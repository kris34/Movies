module.exports = () => (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://64b29f7b3071ba0f6f8785c8--glittery-buttercream-62041e.netlify.app/');
  res.header('Access-Control-Allow-Credentials', true);
  res.setHeader(
    'Access-Control-Allow-Methods',
    'HEAD, OPTIONS, GET, POST, PUT, DELETE'
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Content-Type, X-Authorization'
  );

  next();
};
