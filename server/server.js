import bodyParser from "body-parser";
import express from "express";
import mongoose from "mongoose";

const PORT = 4000;
const app = express();
app.use(bodyParser.json());

mongoose.connect(
    "mongodb+srv://karthik:karthikwadeyar@cluster0.6e123gp.mongodb.net/?retryWrites=true&w=majority"
    ).then(() => {
        console.log("MongoDb Connection Successful");
    }).catch((err)=> console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World");
});


app.listen(PORT, () => {
  console.log("Server is running at http://localhost:4000");
});