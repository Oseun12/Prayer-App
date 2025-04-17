import mongoose from "mongoose";

const connectViaMongoose = async () => {
    if (mongoose.connection.readyState === 1) {
        console.log('MongoDB connected:', mongoose.connection.readyState);
        return;
    }

    return mongoose.connect(process.env.MONGODB_URI!);
}

export default connectViaMongoose;