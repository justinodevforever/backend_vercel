import express from "express";
// import router from "./src/router/routas";
// import routerh from "./src/router/home";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use("/dd", routerh);
app.get("/", (req, res) => {
  res.json("kkkkkkkkkkkkkkk");
});

app.listen(3000, () => console.log("Servidor Rodando"));
