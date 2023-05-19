/** Auth-related routes. */

const User = require("../models/user");
const express = require("express");
const router = express.Router();
const createTokenForUser = require("../helpers/createToken");
const ExpressError = require("../helpers/expressError");

//  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IldJTEwiLCJhZG1pbiI6ZmFsc2UsImlhdCI6MTY4NDQ2NDM3OX0.jpGw7ygT9ZRKxkaKV_kO5qD8HRSdmDw-bONz98yYWAg

/** Register user; return token.
 *
 *  Accepts {username, first_name, last_name, email, phone, password}.
 *
 *  Returns {token: jwt-token-string}.
 *
 */

router.post("/register", async function (req, res, next) {
  try {
    const { username, password, first_name, last_name, email, phone } =
      req.body;
    let user = await User.register({
      username,
      password,
      first_name,
      last_name,
      email,
      phone,
    });
    const token = createTokenForUser(username, user.admin);
    return res.status(201).json({ token });
  } catch (err) {
    return next(err);
  }
}); // end

/** Log in user; return token.
 *
 *  Accepts {username, password}.
 *
 *  Returns {token: jwt-token-string}.
 *
 *  If incorrect username/password given, should raise 401.
 *
 */

router.post("/login", async function (req, res, next) {
  try {
    const { username, password } = req.body;
    // fix bug #6 missing await
    let user = await User.authenticate(username, password);

    const token = createTokenForUser(username, user.admin);

    return res.json({ token });
  } catch (err) {
    return next(err);
  }
}); // end

module.exports = router;
