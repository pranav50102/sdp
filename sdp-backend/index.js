const express = require('express');
const app = express();
const cors = require("cors");
const mongoose = require('mongoose');

const regis = require('./Models/regis');



app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://pranav:root@cluster0.jajh4.mongodb.net/user?retryWrites=true&w=majority', {
    useNewUrlParser: true,
});

app.get('/', async (req, res) => { 
/*const user = new User({ email: '190032114', pwd: 'pranav'});

try{
    await user.save();

} catch(err){
    console.log(err);
}

*/});

app.post('/loginAuth',async (req,res) => {
    const Regis = await regis.findOne({
        email: req.body.email,
        pwd: req.body.pwd,
    })

    if(Regis) {
        console.log(Regis.email, Regis.pwd);
        return res.json( {Status: 'ok', Regis: true})
    }   
    else {
        return res.json( {Status: 'error', Regis:false})
    }
});

app.post('/RegisterAuth',async (req,res) => {
    
    const firstname = req.body.firstname
    const lastname = req.body.lastname
    const Phoneno = req.body.Phoneno
    const email= req.body.email
    const pwd = req.body.pwd
    const Regis = new regis({
        firstname: firstname,
        lastname: lastname,
        Phoneno: Phoneno,
        email: email,
        pwd: pwd
    })
    try{
        await Regis.save();
        res.send("Account created successfully");
        alert('Account created successfully');
        window.location.href='/Login';

    }
    catch(err){
        res.send("email alaready exists");
 
    }

});

app.listen(3001, () => {
    console.log('Server running at port:3001');
});

