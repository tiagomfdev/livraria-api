import mongoose from "mongoose";

async function connect() {
  const uri =
    "mongodb+srv://maluskao:igti@cluster0.xdis7.mongodb.net/bookstore?retryWrites=true&w=majority";
  return await mongoose.connect(uri);
}

export { connect };
