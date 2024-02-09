const {body} = require ('express-validator')


module.exports = createUser = [
  body('first_name').isAlpha().withMessage('first_name can not be in number'),
  body('email').isEmail().withMessage('Invalid email'),
  body('password').isLength({min: 6}).withMessage('The minimum password length is 6 characters'),
]
