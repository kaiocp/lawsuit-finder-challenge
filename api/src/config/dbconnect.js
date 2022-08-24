import mongoose from "mongoose";

mongoose.connect("mongodb+srv://kaiocp:4321@cluster0.aymsalv.mongodb.net/lawsuit-finder-challenge");

let db = mongoose.connection;

export default db;