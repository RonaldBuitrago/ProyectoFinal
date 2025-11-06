const jwt = require('jsonwebtoken');

function authMiddleware(req, res, next) {
  const header = req.headers['authorization'] || req.headers['x-auth-token'];
  const token = header && header.startsWith('Bearer ') ? header.split(' ')[1] : header;

  if (!token) return res.status(401).json({ msg: 'No token, acceso denegado' });

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { id: payload.id };
    next(); // continúa al siguiente paso
  } catch (err) {
    return res.status(401).json({ msg: 'Token inválido' });
  }
}

module.exports = authMiddleware;
