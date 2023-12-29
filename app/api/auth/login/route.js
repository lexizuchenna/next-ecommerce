import { compare } from "bcryptjs";

import User from "@models/User";
import { connectDB } from "@utils/database";
import { generateToken } from "@utils";

export const POST = async (req) => {
  try {
    const { email, password } = await req.json();

    await connectDB();

    const user = await User.findOne({ email });

    if (!user) {
      return new Response("Invalid Email or Password", { status: 400 });
    }

    const isMatch = await compare(password, user.password);

    if (!isMatch) {
      return new Response("Invalid Email or Password", { status: 400 });
    }

    const newUser = {
      token: generateToken(user._id),
      firstname: user.firstname,
      lastname: user.lastname,
      phone: user.phone,
      email: user.email,
      id: user.id
    }

    return new Response(JSON.stringify(newUser), { status: 201 });
  } catch (error) {
    console.log(error);
    return new Response("Internal Server Error", { status: 500 });
  }
};
