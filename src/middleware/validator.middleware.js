const {body} = require ('express-validator')


exports.createUser = [
  body('first_name').not().isEmpty().withMessage("first_name is required"),
  body('first_name').isAlpha().withMessage('first_name must be a alphabet'),
  body('email').not().isEmpty().withMessage("email is required"),
  body('email').isEmail().withMessage('Invalid email format'),
  body('password').not().isEmpty().withMessage('password is required'),
  body('password').isLength({min: 6}).withMessage('The minimum password length is 6 characters'),
]

exports.emailValidate = [
  body('email').not().isEmpty().withMessage("email is required"),
  body('email').isEmail().withMessage('Invalid email format'),
]

exports.passwordValidation = [
  body('newPassword').isLength({min: 6}).withMessage('The minimum password length is 6 characters'),
]
