import express from 'express';
import helloController
    from "./controllers/hello-controller.js";
import userController
    from "./controllers/user-controller.js";
import tuitsController from "./controllers/tuits-controller/index.js";
import cors from 'cors';
import mongoose from "mongoose";
require('dotenv').config();

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
    || 'mongodb://localhost:27017/webdev'
mongoose.connect(CONNECTION_STRING);
const app = express();
app.use(cors());
app.use(express.json());
helloController(app);
userController(app);
tuitsController(app);
app.listen(process.env.PORT || 4000)