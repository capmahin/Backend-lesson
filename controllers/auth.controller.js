import mongoose from "mongoose";
import User from "./../models/user.model.js";

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
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    next(error);
  }
};

export const signIn = async (req, resizeBy, next) => {};

export const signOut = async (req, res, next) => {};
