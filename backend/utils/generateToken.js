import jwt from "jsonwebtoken";
import { ENV_VARS } from "../config/envVars.js";

export const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, ENV_VARS.JWT_SECRET, { expiresIn: "15d" });

  res.cookie('jwt-netflix', token, {
    maxAge: 15*24*60*60*1000, // 15 fays in MS
    httpOnly:true, //prevent Xss attacks
    sameSite:'strict', //CSRF attacks
    secure: ENV_VARS.NODE_ENV !== 'development',
  })

  return token;
};
