import express from "express";
import routes from "./routes";

const app = express();
const PORT = 3000;

app.use(routes);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API");
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
