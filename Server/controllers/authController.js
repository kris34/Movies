const authController = require('express').Router();

authController.get('/', (req, res) => {
   res.json({})
});

authController.post('/', (req, res) => {
    const user = req.body
    console.log(user);
    res.json({})
 });

module.exports = authController;
