import express from "express";
import router from "./src/router/routas.js";
import routerh from "./src/router/home.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/dd", routerh);
app.get("/", router);

app.listen(3000, () => console.log("Servidor Rodando"));
