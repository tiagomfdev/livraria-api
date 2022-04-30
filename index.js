import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

console.log("teste");

app.use((err, req, res, next) => {
  res.status(400).send({ error: err.message });
});

app.listen(3000, () => console.log("API Started!"));
