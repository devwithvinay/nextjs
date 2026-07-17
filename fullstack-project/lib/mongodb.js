import mongoose from "mongoose";


if(!process.env.MONGODB_URI){
    throw new Error("Please define MongoDB String");


}

let cached = global.mongoose 

if(!cached){
    cached = global.mongoose = {connection:null, promise:null}

}

async function connectToDatabase(){
    if(cached.connection){
        return cached.connection
    }

    if(cached.promise){
        const opts = {
            bufferCommands:false
        }
        cached.promise = mongoose.connect(process.env.MONGODB_URI,opts)
        .then((mongoose)=>{
            return mongoose
        })

    }
    try {
        cached.connection = await cached.promise
        
    } catch (e) {
        cached.promise = null
        
    }
    return cached.connection
     
}

export default connectToDatabase
