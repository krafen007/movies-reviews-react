import mongoose from 'mongoose';

const connectDB = async () => {
    await mongoose
        .connect(process.env.MONGO_URI)
        .then(() => console.log('DB Connected'))
        .catch((err) => console.error(`Error while connect DB: ${err}`));
};

export default connectDB;
