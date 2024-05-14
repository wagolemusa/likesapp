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
            callbackUrl: "https://master.db8a0i6yi8i2l.amplifyapp.com",
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
      },
      pages: {
        signIn: "/login",
      },
      secret: process.env.NEXTAUTH_SECRET,
    });
  }






