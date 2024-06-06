import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from '../../../backend/model/user';
import bcrypt from "bcryptjs";
import dbConnect from "../../../backend/config/dbConnect"
// import { signIn } from "next-auth/client";

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
        async authorize(credentials) {
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
        return token;
      },
      async session({ session, token }) {
        session.user = token.user;
        delete session?.user?.password;
        return session;
      },
 
      // redirect: async ({ url, baseUrl }) => {
      //   return url.startsWith(baseUrl)
      //     ? Promise.resolve(url)
      //     : Promise.resolve(baseUrl);
      // },

      async redirect({ baseUrl, url }) {
        const redirectUrl = decodeURIComponent(url);
        const callbackIndex = redirectUrl.indexOf('callbackUrl=');
        if (callbackIndex > -1) {
            const callbackPath = redirectUrl.slice(callbackIndex + 12);
            // If I try to login from my homepage, the nested callbackUrl contains the full baseUrl.
            // This behavior seems to be triggerd if you call `signIn()` from a page.
            return callbackPath.includes(baseUrl) ? callbackPath : baseUrl + callbackPath;
        }
        return url;
    },
    
    },
    pages: {
      signIn: `${process.env.NEXTAUTH_URL}/login`,
      signOut: `${process.env.NEXTAUTH_URL}/`,
      error: `${process.env.NEXTAUTH_URL}/thanks`
    },
    secret: process.env.NEXTAUTH_SECRET,
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
//           email: { label: "Email", type: "email", placeholder: "email@example.com" },
//           password: { label: "Password", type: "password" }
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

//         console.log("JWT Callback: ", token);
//         return token;
//       },
//       async session({ session, token }) {
//         session.user = token.user;
//         delete session?.user?.password;

//         console.log("Session Callback: ", session);
//         return session;
//       },
//       callbacks: {
//         async redirect({ url, baseUrl }) {
//           const base = process.env.NEXTAUTH_URL || baseUrl;
//           const redirectUrl = url.startsWith('/') ? `${base}${url}` : url;
//           return redirectUrl;
//         }
//       }
//     },
//     pages: {
//         signIn: process.env.NEXTAUTH_URL + '/login',
//         signOut: process.env.NEXTAUTH_URL + '/',
//         error: process.env.NEXTAUTH_URL + '/thanks'
//     },
//     secret: process.env.NEXTAUTH_SECRET,
//     baseUrl: process.env.NEXTAUTH_URL,
//   });
// }

  
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
  