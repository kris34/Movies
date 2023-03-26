const cookieController = require('express').Router();

cookieController.get('/',  async (req, res) => {
    res.cookie('asdasdasdasd', 'asdasdasd')
    res.send('Cookie have been saved successfully');
  });
  
  module.exports = cookieController