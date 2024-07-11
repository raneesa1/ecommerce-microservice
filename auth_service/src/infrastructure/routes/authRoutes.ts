import { Router } from "express";
import { IDependencies } from "../../application/interfaces/IDependencies";
import { controllers } from "../../presentation/controller/index";

export const authRoutes = (dependencies: IDependencies) => {
  const { signup,login } = controllers(dependencies);

  const router = Router();

  router.route("/signup").post(signup);

  router.route("/login").post(login);

  return router;

};

