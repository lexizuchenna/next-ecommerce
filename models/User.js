import { Schema, model, models } from "mongoose";

const addressSchema = new Schema({
  street: {
    type: String,
    required: [true, "Enter street"],
  },
  city: {
    type: String,
    required: [true, "Enter city"],
  },
  state: {
    type: String,
    required: [true, "Enter city"],
  },
  country: {
    type: String,
    required: [true, "Enter city"],
  },
  zip: {
    type: String,
    required: [true, "Enter city"],
  },
});

const UserSchema = new Schema(
  {
    id: {
      type: String,
      unique: [true, "User id exists"],
      required: [true, "Enter user id"],
    },
    firstname: {
      type: String,
      required: [true, "Enter firstname"],
    },
    lastname: {
      type: String,
      required: [true, "Enter lastname"],
    },
    email: {
      type: String,
      unique: [true, "Email exists"],
      required: [true, "Enter email"],
    },
    phone: {
      type: String,
      unique: [true, "Phone exists"],
      required: [true, "Enter phone number"],
    },
    password: {
      type: String,
      required: [true, "Enter passwor1244456 number"],
    },
    address: addressSchema,
  },
  { timestamps: true }
);

const User = models.User || model("User", UserSchema);

export default User;
