import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDb from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userroute.js';
import productRoute from './routes/productRoute.js';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';

//App config

const app=express();
const port=process.env.PORT || 3000;
connectDb();
connectCloudinary()
//middlewares
app.use(express.json());
app.use(cors());


//Api endpoints
app.use('/api/user',userRouter);
app.use('/api/product',productRoute);
app.use('/api/cart',cartRouter)
app.use('/api/order',orderRouter)

app.get('/',(req,res)=>{
    res.send('Api Working');
})

app.listen(port,()=>console.log("Server Started On PORT:" + port))