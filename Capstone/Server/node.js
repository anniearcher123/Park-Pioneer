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
        console.log(user)
        if (user) {
            const validAuth = await bcrypt.compare(req.body.password, user.password);
            if (validAuth) {
                res.json(
                    {
                        ...user,
                        username: user.username,
                        events: JSON.parse(user.events)
                    }
                )
                console.log(user)
            } else {
                res.json({message: 'wrong password'})
            }
        }}
        catch {
            res.json({message:'failed'})
        }
    }
  )

  app.post('/', async(req, res, next) =>{
    try {
        console.log(req.body.events)
        const thisUser = req.body.username
        const thisEvents = JSON.stringify(req.body.events);
        const item = {
            events: thisEvents
        }
        db.USER.update(item, {where: {username: thisUser}})
        res.json({message:'success'})
    }catch(ex){
        console.log(ex)
        res.json({message: 'Nope'})
    }
  })
        
            

  app.listen(4000, () => {
    console.log(`Server is running`);
  });


