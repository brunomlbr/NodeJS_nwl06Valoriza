import { Request, Response, NextFunction } from "express";
import { getCustomRepository } from "typeorm";

import { UsersRepositories } from "../repositories/UsersRepositories";

export async function ensureAdmin(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { user_id } = request;

  const usersRepository = getCustomRepository(UsersRepositories);

  const { admin } = await usersRepository.findOne(user_id);
  console.log(admin);

  if (admin) {
    return next();
  }
  return response.status(401).json({
    error: "User is not admin - Unauthorized",
  });
}
