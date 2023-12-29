import { hash, genSalt } from "bcryptjs";

import User from "@models/User";
import { connectDB } from "@utils/database";
import { generateNum } from "@utils";

export const POST = async (req) => {
  try {
    const { email, phone, firstname, lastname, password } = await req.json();

    await connectDB();

    const user = await User.findOne({ email });

    if (user) {
      return new Response("Email already used", { status: 400 });
    }

    const phoneMatch = await User.findOne({ phone });

    if (phoneMatch) {
      return new Response("Mobile number already used", { status: 400 });
    }

    const salt = await genSalt();
    const hashedPwd = await hash(password, salt);

    const generateId = async () => {
      let id = generateNum();
      let user = await User.findOne({ id });

      while (user) {
        id = generateNum();
        user = await User.findOne({ id });
      }

      return id;
    };

    await User.create({
      id: await generateId(),
      firstname,
      lastname,
      email,
      phone,
      password: hashedPwd,
    });

    return new Response("Account created successfully", { status: 201 });
  } catch (error) {
    console.log(error);
    return new Response("Internal Server Error", { status: 500 });
  }
};
