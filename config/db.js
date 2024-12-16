import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // Use the mongoose.connect() method with the correct URI
    const mongoURI = `${process.env.MONGO_URI}/prescripto`;

    await mongoose.connect(mongoURI, {
      useNewUrlParser: true, // to use the new URL parser
      useUnifiedTopology: true, // to opt into the new topology engine
    });

    console.log("Database connected");
  } catch (error) {
    console.error("Error connecting to database:", error);
    process.exit(1); // Exit the process with failure if unable to connect
  }
};

export default connectDB;
