import connectDB from './db/connectDB.js';
import {app} from "./app.js"
import dotenv from 'dotenv';

const PORT = process.env.PORT || 5000;

dotenv.config({
    path: './.env',
})

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    })
    app.on("error", (error) => {
        console.log("Server is not running", error);
        throw error;
        
    })
}).catch((error) => {
    console.log("MONGODB connection failed", error);
    process.exit(1);
})


