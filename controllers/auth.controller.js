import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import User from "./../models/user.model.js";
import jwt from "jsonwebtoken";

export const signUp = async (req, resizeBy, next) => {
  // Implement sign up logic here
  const session = await mongoose.startSession();
  session.startTransaction();
  try {
    // Logic to create a new user
    await session.commitTransaction();

    const { name, email, password } = req.body;

    //Check if a user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      const error = new Error("User already exists");
      error.statusCode = 409;
      throw error;
    }

    //Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = await User.create(
      [{ name, email, password: hashedPassword }],
      { session }
    );
    const token = jwt.sign({ userId: newUser[0]._id });
    await session.commitTransaction();
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    next(error);
  }
};

export const signIn = async (req, resizeBy, next) => {};

export const signOut = async (req, res, next) => {};
