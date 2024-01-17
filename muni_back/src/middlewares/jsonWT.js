const jsonWT = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

function generateAccessToken(payload, expirationTime) {
  return jsonWT.sign(payload,"MuniKey", { expiresIn: expirationTime });
}

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) return res.sendStatus(401);

  jsonWT.verify(token, "MuniKey", (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

module.exports = {
  generateAccessToken,
  authenticateToken
};