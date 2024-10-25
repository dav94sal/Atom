const express = require('express')
const bcrypt = require('bcryptjs');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { validateSignup } = require('../../utils/validation')
const { User } = require('../../db/models');

const router = express.Router();

// Sign up
router.post(
    '/',
    validateSignup,
    async (req, res) => {
      const { email, firstName, lastName, password, username } = req.body;
      const hashedPassword = bcrypt.hashSync(password);
      const user = await User.create({ email, firstName, lastName, username, hashedPassword });

      const safeUser = {
        id: user.id,
        email: user.email,
        username: user.username,
      };

      await setTokenCookie(res, safeUser);

      return res.json({
        user: safeUser
      });
    }
  );

module.exports = router;
