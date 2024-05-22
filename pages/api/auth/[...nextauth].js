import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from '../../../backend/model/user';
import bcrypt from "bcryptjs";
import dbConnect from "../../../backend/config/dbConnect"


export default async function auth(req, res) {
    return await NextAuth(req, res, {
      session: {
        strategy: "jwt",
      },
      providers: [
        CredentialsProvider({

          credentials: {
            // Update callbackUrl here
            callbackUrl: "https://master.d28j0wql6qmeva.amplifyapp.com",
        },

          async authorize(credentials, req) {
            dbConnect();
  
            const { email, password } = credentials;
            const user = await User.findOne({ email }).select("+password");
            if (!user) {
              throw new Error("Invalid Email or Password");
            }
            const isPasswordMatched = await bcrypt.compare(
              password,
              user.password
            );
  
            if (!isPasswordMatched) {
              throw new Error("Invalid Email or Password");
            }
  
            return user;
          },
        }),
      ],
      callbacks: {
        jwt: async ({ token, user }) => {
          user && (token.user = user);

          if(req.url === '/api/auth/session?update'){
            // hit the db and return the update
            console.log("Updating user session...", );
            const updatedUser = await User.findById(token.user._id)
            token.user = updatedUser
          }
  
          return token;
        },
        session: async ({ session, token }) => {
          session.user = token.user;
  
          // delete password from session
          delete session?.user?.password;
  
          return session;
        },

        async redirect(url, baseUrl) {
          return Promise.resolve(url, baseUrl)
          // return baseUrl;
        },

        // async redirect({ url, baseUrl }) {
        //   // Ensures the base URL is used correctly
        //   if (url.startsWith("/")) return `${baseUrl}${url}`;
        //   else if (new URL(url).origin === baseUrl) return url;
        //   return baseUrl;
        // },

      },
      pages: {
        signIn: "/login",
      },
      secret: process.env.NEXTAUTH_SECRET,
      baseUrl: process.env.BASE_URL || 'https://master.d28j0wql6qmeva.amplifyapp.com',
    });
  }






