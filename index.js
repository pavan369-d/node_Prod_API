const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const productRoutes = require('./routes/productRoute')
const errorMiddleware = require('./middlewares/errorMiddleware')
const cors = require('cors');


const app = express();
const PORT = process.env.PORT || 8000
const MONGODB_URL = process.env.MONGODB_URL;
const FRONTED = process.env.FRONTED
const corsOptions = {
    origin: FRONTED,
    optionsSuccessStatus: 200
}

// DB Connection

mongoose.connect(MONGODB_URL)
.then(()=>{
    console.log('Connected to DB');
})
.catch(err=>console.log('Error Connecting to DB:',err))

// middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))


mongoose.set("strictQuery", false);

app.use(cors())

app.get('/', (req, res)=>{
    // throw new Error('Fake error');
    res.send('Hello, from backend');
})

// create a new product
app.use('/prods', cors(corsOptions),productRoutes)




app.use(errorMiddleware)


app.listen(PORT, (req,res)=>{
    console.log(`Server listening on ${PORT}`);
})

// db connection

