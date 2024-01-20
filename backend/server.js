require('./config/db');

const app = require('express')();
const port = process.env.PORT ||5000;

const cors = require('cors');
app.use(cors(
//     {
//     origin:["https://user-registration-auth-form-e28x.vercel.app"],
//     methods:["POST","GET"],
    
// }
));

const UserRouter = require('./api/user')



const bodyParser = require('express').json;
app.use(bodyParser());

app.use('/user',UserRouter)


app.get('/',(res,req)=>{
    res.json("hello");
})


app.listen(port, ()=>{
    console.log(`server runnign on port ${port}`)
})
