
import {connect,disconnect } from "mongoose";


async function connectToDataBase() {
    try {
        await connect(process.env.MONGODB_URL);
    } catch (error) {
        console.log(error);
        throw new Error(" Connection failed, Could not connect to the mongodb");
    }
}

async function disconnectFromDataBase() {
    try {
        await disconnect()
    } catch (error) {
        console.log(error);
        throw new Error(" Could not disconnect from mongoDb");
    }
}

export {connectToDataBase,disconnectFromDataBase};