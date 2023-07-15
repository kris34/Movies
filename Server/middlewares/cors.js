module.exports = () => (req, res, next) => {
  res.setHeader(
    'Access-Control-Allow-Origin',
    'https://64b2a8118584bd10b0a7ad9c--stupendous-mousse-71e4a4.netlify.app/'
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
