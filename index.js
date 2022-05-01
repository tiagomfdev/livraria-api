import express from "express";
import cors from "cors";

import clienteRouter from "./routes/cliente.route.js";
import autorRouter from "./routes/autor.route.js";
import livroRouter from "./routes/livro.route.js";
import vendaRouter from "./routes/venda.route.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/cliente", clienteRouter);
app.use("/autor", autorRouter);

app.use("/livro", clienteRouter);
app.use("/venda", autorRouter);

app.use((err, req, res, next) => {
  res.status(400).send({ error: err.message });
});

app.listen(3000, () => console.log("API Started!"));
