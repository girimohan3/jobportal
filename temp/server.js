const express = require("express")
require ("dotenv").config();
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors")
const helmet = require("helmet")
const morgan = require("morgan")


const port = process.env.PORT || 5000




app.use(helmet());

app.use(cors());

//mongodb
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI,{
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useFindandModify: false,
    // useCreateIndex: true
});

if (process.env.NODE_ENV !== "production") {
    const mDb = mongoose.connection;
    mDb.on("open", () => {
      console.log("MongoDB is conneted");
    });
  
    mDb.on("error", (error) => {
      console.log(error);
    });
  
    //Logger
    app.use(morgan("tiny"));
  }


//Logger
   app.use(morgan("tiny"));

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());


//load router
const userRouter = require("./src/router/user.router");

//Use Routers
app.use("/v1/user", userRouter);



app.use('/', ( req, res,next) => {
    res.json({ message: "Hieeee changed updated"});
  });

  
//error

const handleError = require("./src/utils/errorHandler")

app.use((req, res) => {
    const error = new Error("Resources not found!")
    error.status = 404;

    next(error);
})

app.use((error, req, res, next) => {
handleError(error, res);
})





app.listen(port, ()=> {
    console.log(`API is ready on http://localhost:$(port)`);
})
