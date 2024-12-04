import "dotenv/config"
import jwt from "jsonwebtoken"

const jwtSecret = process.env.JWT_SECRET

export function issueJwt(user) {
    const payload = {
        id: user._id
    }

    return jwt.sign(payload, jwtSecret, {expiresIn: "10h"})
}

export function verifyToken(req, res, next) {
  const token = req.cookies.jwt;
  if (!token) {
     return res.status(401).send("Access denied. No token provided.");
  }
 
  jwt.verify(token, jwtSecret, (error, decoded) => {
     if (error) return res.status(401).send("Invalid token.");
     req.user = decoded;
     
     next();
  });
 }
 