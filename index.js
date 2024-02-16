import express from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json("OLa");
});

app.listen(3000, () => console.log("Servidor Rodando"));
