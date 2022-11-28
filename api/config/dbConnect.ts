import mongoose from "mongoose";

mongoose.connect('mongodb+srv://api_ecommerce:admin@ecommerce.parhzq3.mongodb.net/?retryWrites=true&w=majority');

let db = mongoose.connection;

export default db;