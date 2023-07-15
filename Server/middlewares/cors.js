module.exports = () => (req, res, next) => {
  res.setHeader(
    'Access-Control-Allow-Origin',
    'https://marvelous-axolotl-d0539f.netlify.app/'
  );
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
