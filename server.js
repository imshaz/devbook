const express= require("express"); 
// const config=require("config"); 
const app = express();

const connectDB = require('./config/db')
connectDB(); 
const PORT = process.env.PORT ||5500; 
app.use(express.json());
app.get('/',(req,res)=>{res.send("Hello World")})


app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'))
app.use('/api/profile', require('./routes/api/profile'))
app.use('/api/posts', require('./routes/api/posts'))


app.listen(PORT, (req,res)=>{
    console.log(`server Running on port ${PORT}`)
})