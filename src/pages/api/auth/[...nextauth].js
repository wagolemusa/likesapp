import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from '../../../backend/model/user';
import bcrypt from "bcryptjs";
import dbConnect from "../../../backend/config/dbConnect"
// import { Account, User as AuthUser } from "next-auth";
import GitHubProvider from "next-auth/providers/github";



export default NextAuth({
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await dbConnect();

        try {
          const user = await User.findOne({ email: credentials.email });
          if (user) {
            const isPasswordCorrect = await bcrypt.compare(
              credentials.password,
              user.password
            );
            if (isPasswordCorrect) {
              // Return the complete user object
              return {
                id: user._id,
                email: user.email,
                name: user.name,
                role: user.role,
                links: user.links
                // Assuming 'name' field exists in the User model
                // Add other fields as needed
              };
            }
          }
          // Return null if user not found or password is incorrect
          return null;
        } catch (err) {
          console.error("Error during authorization:", err);
          throw new Error("Authorization error");
        }
      },
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID || "",
      clientSecret: process.env.GITHUB_SECRET || "",
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
    async session({ session, token }) {
      session.user = token.user;
      delete session?.user?.password;
      return session;
    },
  },

  session: {
    jwt: true, // Use JSON Web Tokens for session
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET, // Provide a secret key for JWT
  },
});