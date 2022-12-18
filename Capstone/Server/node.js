const express = require('express');
const cors = require('cors');
const app = express();
const { sequelize, Sequelize } = require('sequelize');
const db = require('./models')
const bcrypt = require('bcrypt')

app.use(cors());
app.use(express.json());


app.post('/register', async(req, res, next)=>{
    try {
        const hashPassword = await bcrypt.genSalt(10);
        const item = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            username: req.body.username,
            password : await bcrypt.hash(req.body.password, hashPassword),
            events : '[]'
        };
        created_user = await db.USER.create(item); 
        res.json({message:'Account Created'})
    } catch (error) {
        res.json({message: 'Failed'})
    }
  });

  app.post('/login', async(req, res, next) =>{
    try {
        const user = await db.USER.findOne({ where : {username: req.body.username} });
        if (user) {
            const validAuth = await bcrypt.compare(req.body.password, user.password);
            if (validAuth) {
                res.json(user)
            } else {
                res.json({message: 'wrong password'})
            }
        }}
        catch {
            alert('failed')
        }

    }
  )

//   app.put('/', async(req, res, next) =>{
//     try {
//         const user = await db.USER.findOne({ where : {username: req.body.username} });
//         if (user) {
//             user.events = req.body.events

//             await user.save();
//             res.json({message:'Calendar updated'})
//         } else {
//             res.json({message: 'User not found'})
//         }
//         }catch{
//             res.json('error')
//         }
//     })
        
            

  app.listen(4000, () => {
    console.log(`Server is running`);
  });


