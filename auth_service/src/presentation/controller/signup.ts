import { NextFunction, Request, Response } from "express";
import { IDependencies } from "../../application/interfaces/IDependencies";
import { hashPassword } from "../../util/bcrypt/hashPassword";
import generateToken from "../../util/jwt/generateToken";
import { userCreatedProducer } from "../../infrastructure/kafka/producers/userCreatedProducers";

export const signupController = (dependencies: IDependencies) => {
  const {
    useCases: { signupUserUseCase, findUserByEmailUseCase },
  } = dependencies;
  return async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const credentials = req.body;

      if (!credentials.username || !credentials.username.trim()) {
        res
          .status(400)
          .json({ success: false, message: "Username cannot be empty" });
        return;
      }

      if (!credentials.email || !credentials.password) {
        res
          .status(400)
          .json({ success: false, message: "Email and password are required" });
        return;
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(credentials.email)) {
        res
          .status(400)
          .json({ success: false, message: "Invalid email format" });
        return;
      }

      if (credentials.password.length < 6) {
        res
          .status(400)
          .json({
            success: false,
            message: "Password must be at least 6 characters long",
          });
        return;
      }

      // console.log("Searching for user with email:", credentials.email);
      try {
        const existingUser = await findUserByEmailUseCase(dependencies).execute(
          credentials.email
        );
        // console.log("Existing user:", existingUser);
        if (existingUser) {
          res
            .status(400)
            .json({ success: false, message: "Email already exists" });
          return;
        }
      } catch (error) {
        console.error("Error finding user by email:", error);
      }

      const hashedPassword: string | null = await hashPassword(
        credentials.password
      );
      credentials.password = hashedPassword;
      const user = await signupUserUseCase(dependencies).execute(req.body);
      if (user) {
        const userId: string = user._id?.toString() ?? "";
        const token = generateToken({
          userId: userId,
          role:user.role,
          userEmail: user.email,
          isAdmin: user.isAdmin,
          isBlocked: user.isBlocked,
        });
     if(user.isAdmin){
          res.cookie("admin_jwt", token, {
          maxAge: 1000 * 60 * 60 * 24,
          httpOnly: true,
        });
}else{
  res.cookie("user_jwt", token, {
          maxAge: 1000 * 60 * 60 * 24,
          httpOnly: true,
        });
}
          res
          .status(201)
          .json({ success: true, data: user, message: "User Created" });
        const addedUser = {
          _id: user._id,
          username: user.username,
          email: user.email,
          password: user.password,
          role: user.role,
          isBlocked: user.isBlocked,
          isAdmin: user.isAdmin,
        };
        if (addedUser) {
          userCreatedProducer(addedUser);
        }
      } else {
        res.status(404).json({ success: false, message: "User not found" });
      }
    } catch (error) {
      next(error);
    }
  };
};
