import express, { Request, Response } from "express";
import { placeRouter } from "./router/places.router";
import { errorHandler } from "./middlewares/errorHandler";
import { connectDb } from "./db/mongo";
import { config } from "dotenv";


config(); 
const app = express();
const PORT = 3000;

connectDb();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use('/places', placeRouter);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
