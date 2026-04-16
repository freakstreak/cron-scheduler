import express from 'express';
import config from './config/config';
import cors from "cors"
const app = express();

app.use(express.json());

app.use(cors())

app.get("/", (req, res) => {
  res.json({ message: "Hello, World!" });
});

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});
