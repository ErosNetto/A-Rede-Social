const { body } = require("express-validator");

const userCreateValidation = () => {
  return [
    body("name")
      .isString()
      .withMessage("O nome é obrigatório.")
      .isLength({ min: 3 })
      .withMessage("O nome precisa ter no mínimo 3 caracteres."),
    body("email")
      .isString()
      .withMessage("o e-mail é obrigatório.")
      .isEmail()
      .withMessage("Insira um e-mail valido."),
    body("password")
      .isString()
      .withMessage("A senha é obrigatório")
      .isLength({ min: 5 })
      .withMessage("A senha precisa ter no mínimo 5 caracteres."),
    body("confirmpassword")
      .isString()
      .withMessage("A confirmação de senha é obrigatória.")
      .custom((value, { req }) => {
        if (value != req.body.password) {
          throw new Error("As senha não são iguais.");
        }
        return true;
      }),
  ];
};

module.exports = {
  userCreateValidation,
};
