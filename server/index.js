import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import UserRoutes from "./routes/User.js";

dotenv.config();

const app = express();
app.use(cors(
  {
    origin : ["https://fitness-track-3s4c.vercel.app/"],
    methods : ["GET" ,"POST"],
    credentials:true

  }
));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true })); // for form data


const PORT = process.env.PORT|| 8080;

app.use("/api/user/", UserRoutes);
// error handler
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong";
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});

app.get("/", async (req, res) => {
  res.status(200).json({
    message: "Hello",
  });
});

mongoose.connect(process.env.MONGODB_URL)
.then(()=>{
  console.log('DB connected')
})
.catch((error)=>{
  console.log('DB connection error',error)
})

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

