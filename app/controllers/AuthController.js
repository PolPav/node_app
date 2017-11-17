const Auth = require(`../models/Auth`);
const UserController = require(`../controllers/UserController`);
const user = new UserController;

class AuthController {

  static checkAccount(req, res) {

    return Auth.findAll({where: {token: req.params.token, userId: req.params.id}}).then(result => {

      if (result.length !== 0) {
        return user.getUserById(result[0].userId, res);

      } else {

        res.redirect('/login');
      }
    });
  }

  static addAccount(req, res) {

    const secret = "s_e_c_r_e_t";
    const user =
      {
        login: req.body.login,
        password: req.body.password,
        token: `${req.body.login}${secret}`
      };

    return Auth.create(user).then(() => {

      res.status(201);
      res.send(({success: true, token: user.token}));
    });
  }
}

module.exports = AuthController;
