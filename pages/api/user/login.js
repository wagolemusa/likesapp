
// import dbConnect from "../../../backend/config/dbConnect"

// import User from '../../../model/user';

// import { NextResponse } from "next/server";


// export async function POST(request){

//     const { email, password } =  await request.json();
//     await dbConnect();
//     await User.create({ email, password });
//     return NextResponse.json({ message: "User Registered"}, { status: 201})

// }


// backend/api/register.js

import dbConnect from "../../../backend/config/dbConnect";
import User from '../../../model/user';
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        // Extract email and password from the request body
        const { email, password } = await request.json();

        // Connect to the database
        await dbConnect();

        // Create a new user record in the database
        await User.create({ email, password });

        // Return a success response
        return NextResponse.json({ message: "User registered" }, { status: 201 });
    } catch (error) {
        // If an error occurs, return an error response
        console.error("Error registering user:", error);
        return NextResponse.json({ error: "Failed to register user" }, { status: 500 });
    }
}
