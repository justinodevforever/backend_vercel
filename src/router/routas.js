import express from "express";

const router = express();

router.get("/", (req, res) => {
  res.json("Seja Benvido ao Meu Site");
});
router.get("/nome", (req, res) => {
  res.json("Qual e o seu nome?");
});

export default router;
