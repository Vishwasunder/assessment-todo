const jwt = require('jsonwebtoken')

const authenticateJWT = (req, res, next) => {
  const token = req.header('Authorization')
  if (!token) return res.status(403).json({message: 'No token provided'})

  try {
    const decoded = jwt.verify(token, 'secretkey')
    req.user = decoded
    next()
  } catch (err) {
    return res.status(401).json({message: 'Invalid token'})
  }
}

module.exports = {authenticateJWT}
