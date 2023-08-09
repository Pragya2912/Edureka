const express = require('express')
var bodyParser = require("body-parser");
const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const db_name = 'Edureka';
const app = express()
const port = 2203
const nodemailer = require('nodemailer');
const alert = require('alert');


app.use(express.static("Assets"));
//static path:the entire public directory is made static
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')

})
app.get('/login.html', (req, res) => {
    res.sendFile(__dirname + '/login.html')

})
app.get('/contact.html', (req, res) => {
    res.sendFile(__dirname + '/contact.html')

})
app.get('/AI.html', (req, res) => {
    res.sendFile(__dirname + '/AI.html')

})
app.get('/algorithm.html', (req, res) => {
    res.sendFile(__dirname + '/algorithm.html')

})

app.get('/cybersecurity.html', (req, res) => {
    res.sendFile(__dirname + '/cybersecurity.html')

})
app.get('/android.html', (req, res) => {
    res.sendFile(__dirname + '/android.html')

})
app.get('/robotics.html', (req, res) => {
    res.sendFile(__dirname + '/robotics.html')

})
app.get('/DAA.html', (req, res) => {
    res.sendFile(__dirname + '/DAA.html')

})
app.get('/programming.html', (req, res) => {
    res.sendFile(__dirname + '/programming.html')

})
app.get('/training.html', (req, res) => {
    res.sendFile(__dirname + '/training.html')

})


app.get('/angular.html', (req, res) => {
    res.sendFile(__dirname + '/angular.html')

})
app.get('/backend.html', (req, res) => {
    res.sendFile(__dirname + '/backend.html')

})

app.get('/blockchain.html', (req, res) => {
    res.sendFile(__dirname + '/blockchain.html')

})

app.get('/C.html', (req, res) => {
    res.sendFile(__dirname + '/C.html')

})
app.get('/cpp.html', (req, res) => {
    res.sendFile(__dirname + '/cpp.html')

})

app.get('/cloud.html', (req, res) => {
    res.sendFile(__dirname + '/cloud.html')

})

app.get('/csharp.html', (req, res) => {
    res.sendFile(__dirname + '/csharp.html')

})
app.get('/css.html', (req, res) => {
    res.sendFile(__dirname + '/css.html')

})

app.get('/datastructure.html', (req, res) => {
    res.sendFile(__dirname + '/datastructure.html')

})


app.get('/dbms.html', (req, res) => {
    res.sendFile(__dirname + '/dbms.html')

})

app.get('/digital.html', (req, res) => {
    res.sendFile(__dirname + '/digital.html')

})


app.get('/frontend.html', (req, res) => {
    res.sendFile(__dirname + '/frontend.html')

})


app.get('/golang.html', (req, res) => {
    res.sendFile(__dirname + '/golang.html')

})

app.get('/graphics.html', (req, res) => {
    res.sendFile(__dirname + '/graphics.html')

})
app.get('/html.html', (req, res) => {
    res.sendFile(__dirname + '/html.html')

})

app.get('/IOT.html', (req, res) => {
    res.sendFile(__dirname + '/IOT.html')

})
app.get('/java.html', (req, res) => {
    res.sendFile(__dirname + '/java.html')

})

app.get('/javascript.html', (req, res) => {
    res.sendFile(__dirname + '/javascript.html')

})
app.get('/os.html', (req, res) => {
    res.sendFile(__dirname + '/os.html')

})
app.get('/php.html', (req, res) => {
    res.sendFile(__dirname + '/php.html')

})
app.get('/python.html', (req, res) => {
    res.sendFile(__dirname + '/python.html')

})
app.get('/sql.html', (req, res) => {
    res.sendFile(__dirname + '/sql.html')

})
app.get('/react.html', (req, res) => {
    res.sendFile(__dirname + '/react.html')

})
app.get('/ruby.html', (req, res) => {
    res.sendFile(__dirname + '/ruby.html')

})
app.get('/vue.html', (req, res) => {
    res.sendFile(__dirname + '/vue.html')

})


app.get('/form.html', (req, res) => {
    res.sendFile(__dirname + '/form.html')

})



app.use(bodyParser.urlencoded({
    extended: true
}));
const db = client.db(db_name)
app.post('/form.html', function (req, res) {
   
    const email = req.body.email
    
    const phone = req.body.phone
    const pass = req.body.password
    const confrm_pass = req.body.confrm_passwd
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'sdivyanshu5561@gmail.com',
            pass: 'rllqpkstuoejbugo'
        }
    })

    var mailoptions = {
        from: 'sdivyanshu5561@gmail.com',
        to: req.body.email,
        subject: 'Welcome to edukart ' ,
        html: "Welcome to edukart! <br> Good to have you here.<br> Is there any way we could make your journey easier? <br> Edureka!! <br> Thanks for signing In to Edureka <br> feel free to ask your questions <br> We will reply As soon as possible <br>If you want to read Further more Topics on Edureka Fill The Form By writing The Topic name.<br>Many different Courses are Also Available and You will Get 20% off On your registration. So why are you Witing For Hurry Up To gain Skills.<br>Team Edureka<br> THANKYOU!! Contact us:-sdivyanshu5561@gmail.com For any query.<br>"


    };

    transporter.sendMail(mailoptions, function (error, info) {
        if (error) {
            console.log(error);
        }
        else {
            // res.send("Thanks for registering you will recieve confirmation mail Shortly..");
            // res.alert("Confirmation mail will be sent to you Shortly!! Thankyou.")
            // res.redirect('/');
            console.log("success")
            res.redirect("/");
        }

    })

    var data = {
        
        "email": email,
        "phone":phone,
        "password": pass,
        "confrm_passwd": confrm_pass
    }
    db.collection('Signup').insertOne(data, function (err, collection) {
        if (err) console.log(err)
        else console.log("Record inserted")
    })

})


app.post('/login.html',async(req,res)=>{

    try{
        const login_user=req.body.phone
        const password=req.body.password
        const useremail=await db.collection('Signup').findOne({phone:login_user});
        // res.send(useremail);
        // console.log(useremail);
        if(useremail.password==password){
            console.log("Login Successfully");
        
 
            alert('Logged In Successfully')
            res.redirect("/");
            
        }
        else{
            console.log("Invalid Login Details")
            alert('Invalid Login Details')
        }
        
    
    }
    
    catch(error){
             console.log("Invalid login details");
              alert('Invalid Login Details')
             
    }
})



app.post('/contact.html', function (req, res) {
   
    const email = req.body.email
    
    const phone = req.body.number
    const name = req.body.name
    const message = req.body.msg
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'sdivyanshu5561@gmail.com',
            pass: 'rllqpkstuoejbugo'
        }
    })

    var mailoptions = {
        from: 'sdivyanshu5561@gmail.com',
        to: req.body.email,
        subject: 'Welcome to edukart ' ,
        html: "Thanks For Contacting Us!! Our Executive Will Contact You Within 24 hours <br> Thankyou!! <br> EDUREKA"


    };

    transporter.sendMail(mailoptions, function (error, info) {
        if (error) {
            console.log(error);
        }
        else {
        
            console.log("success")
            res.redirect("/");
        }

    })

    var data = {
        "Name": name,
        "email": email,
        "Phone number": phone,

        "Message": message
        
    }
    db.collection('Contact').insertOne(data, function (err, collection) {
        if (err) console.log(err)
        else console.log("Record inserted")
    })

})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
}) 