const express = require('express');
const app = express();
const db = require('./models');

app.post('/register', async(req, res, next)=>{
    const hashPassword = await bcrypt.genSalt(10);
    var usr = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
    };
    created_user = await db.user.create(usr);
  });


