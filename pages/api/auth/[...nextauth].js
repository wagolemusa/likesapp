import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from '../../../backend/model/user';
import bcrypt from "bcryptjs";
import dbConnect from "../../../backend/config/dbConnect"


export default async function auth(req, res) {
  return await NextAuth(req, res, {
    session: {
      strategy: 'jwt',
    },
    providers: [
      CredentialsProvider({
        name: 'Credentials',
        credentials: {
          email: { label: "Email", type: "email", placeholder: "email@example.com" },
          password: { label: "Password", type: "password" }
        },
        async authorize(credentials, req) {
          await dbConnect();

          const { email, password } = credentials;
          const user = await User.findOne({ email }).select("+password");

          if (!user) {
            throw new Error("Invalid Email or Password");
          }

          const isPasswordMatched = await bcrypt.compare(password, user.password);

          if (!isPasswordMatched) {
            throw new Error("Invalid Email or Password");
          }

          return user;
        },
      }),
    ],
    callbacks: {
      async jwt({ token, user }) {
        if (user) {
          token.user = user;
        }

        console.log("JWT Callback: ", token);
        return token;
      },
      async session({ session, token }) {
        session.user = token.user;
        delete session?.user?.password;

        console.log("Session Callback: ", session);
        return session;
      },

      async redirect({ url, baseUrl }) {
          const base = process.env.NEXTAUTH_URL || baseUrl;
          const redirectUrl = url.startsWith('/')
          return redirectUrl;
        }
    },

    pages: {
        signIn: process.env.NEXTAUTH_URL + '/login',
        signOut: process.env.NEXTAUTH_URL + '/',
        error: process.env.NEXTAUTH_URL + '/thanks'
    },
    secret: process.env.NEXTAUTH_SECRET,
    baseUrl: process.env.NEXTAUTH_URL || 'https://master.d28j0wql6qmeva.amplifyapp.com',
  });
}

  
  // export default async function auth(req, res) {
  //   return await NextAuth(req, res, {
  //     session: {
  //       strategy: 'jwt',
  //     },
  //     providers: [
  //       CredentialsProvider({
  //         name: 'Credentials',
  //         credentials: {
  //               email: { label: "Email", type: "email", placeholder: "email@example.com" },
  //               password: { label: "Password", type: "password" }
  //         },
  //         async authorize(credentials, req) {
  //           await dbConnect();
  
  //           const { email, password } = credentials;
  //           const user = await User.findOne({ email }).select("+password");
  
  //           if (!user) {
  //             throw new Error("Invalid Email or Password");
  //           }
  
  //           const isPasswordMatched = await bcrypt.compare(password, user.password);
  
  //           if (!isPasswordMatched) {
  //             throw new Error("Invalid Email or Password");
  //           }
  
  //           return user;
  //         },
  //       }),
  //     ],
  //     callbacks: {
  //       async jwt({ token, user }) {
  //         if (user) {
  //           token.user = user;
  //         }
  
  //         if (req.url === '/api/auth/session?update') {
  //           const updatedUser = await User.findById(token.user._id);
  //           token.user = updatedUser;
  //         }
  
  //         return token;
  //       },
  //       async session({ session, token }) {
  //         session.user = token.user;
  
  //         // delete password from session
  //         delete session?.user?.password;
  
  //         return session;
  //       },
  //       async redirect({ url, baseUrl }) {
  //         if (url.startsWith('/')) return `${baseUrl}${url}`;
  //         else if (new URL(url).origin === baseUrl) return url;
  //         return baseUrl;
  //       },
  //     },
  //     pages: {
  //       signIn: process.env.NEXTAUTH_URL + '/login',
  //       signOut: process.env.NEXTAUTH_URL + '/',
  //       error: process.env.NEXTAUTH_URL + '/thanks'
  //     },
  //     secret: process.env.NEXTAUTH_SECRET,
  //     baseUrl: process.env.NEXTAUTH_URL || 'https://master.d28j0wql6qmeva.amplifyapp.com',
  //   });
  // }
  