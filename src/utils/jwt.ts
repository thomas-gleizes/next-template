import jwt from "jsonwebtoken";

const SECRET_TOKEN = process.env.SECRET_TOKEN;

export const generateToken = (payload: any): string => {
  return jwt.sign(payload, SECRET_TOKEN, { expiresIn: "1d" });
};

export const verifyToken = (token: string): any => {
  return jwt.verify(token, SECRET_TOKEN);
};
