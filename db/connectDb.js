import mongoose from "mongoose";


const connectDB = async () => {
    try {
      const conn = await mongoose.connect(`mongodb+srv://karthikiyer:test12345@cluster0.jm2pxgg.mongodb.net/chai?retryWrites=true&w=majority&appName=Cluster0`, {
        useNewUrlParser: true,
      });
      console.log(`MongoDB Connected: {conn.connection.host}`);
    } catch (error) {
      console.error(error.message);
      process.exit(1);
    }
  }

  export default connectDB;