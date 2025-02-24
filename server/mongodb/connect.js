
import mongoose from 'mongoose';



const connectDb=(url)=>{
    mongoose.set('strictQuery',true);


mongoose.connect(url)
    .then(()=>console.log("connection established"))
    .catch((err)=>{console.log(err.message)})

}
export default connectDb;
