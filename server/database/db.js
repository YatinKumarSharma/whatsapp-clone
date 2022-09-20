import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config();
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = async ()=>{
    const URL = `mongodb://${USERNAME}:${PASSWORD}@ac-8buydhq-shard-00-00.w9zqwdp.mongodb.net:27017,ac-8buydhq-shard-00-01.w9zqwdp.mongodb.net:27017,ac-8buydhq-shard-00-02.w9zqwdp.mongodb.net:27017/?ssl=true&replicaSet=atlas-pm9h52-shard-0&authSource=admin&retryWrites=true&w=majority`
    try{
       await mongoose.connect(URL,{ useUnifiedTopology: true })
       console.log("Databse Connected Successfully");
    }
    catch(error){
        console.log("Error ",error.message);

    }
}

export default Connection