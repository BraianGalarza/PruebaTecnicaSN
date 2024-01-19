const jsonWT = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();
const jwtKey = process.env.JWT_PASSWORD;

function generateAccessToken(payload, expirationTime) {
  return jsonWT.sign(payload,jwtKey, { expiresIn: expirationTime });
}

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) return res.sendStatus(401);

  jsonWT.verify(token, jwtKey, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

module.exports = {
  generateAccessToken,
  authenticateToken
};