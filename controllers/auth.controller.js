import mongoose from "mongoose";

export const signUp = async (req, resizeBy, next) => {
  // Implement sign up logic here
  const session = await mongoose.startSession();
  session.startTransaction();
  try {
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    next(error);
  }
};

export const signIn = async (req, resizeBy, next) => {};

export const signOut = async (req, res, next) => {};
