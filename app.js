const express = require('express');
const app = express();

const userModel = require('./usermodel')

app.get('/',(req,res) =>{
    res.send("hey");
})

app.get('/create', async(req,res) =>{
    let createdUser = await userModel.create({
        name: "poshit",
        email: "poshit@gmail.com",
        username: "posh1604"
    })
    res.send(createdUser);
})

app.get('/update', async(req,res) => {
  let updatedUser = await userModel.findOneAndUpdate({name: "poshit"}, {name: "poshit rathi"},{new:true})
  res.send(updatedUser);
})

app.get('/read' , async (req,res) => {
    let users = await userModel.find();
    res.send(users);
})

app.get('/delete', async(req,res) => {
  let deletedUser = await userModel.findOneAndDelete({name: "poshit"})
  res.send(deletedUser);
})

app.listen(3000);