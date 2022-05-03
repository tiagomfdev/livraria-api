import express from "express";
import LivroController from "../controllers/livro.controller.js";

const router = express.Router();

router.post("/info", LivroController.createLivroInfo);
router.put("/info", LivroController.updateLivroInfo);
router.post("/info/:id/avaliacao", LivroController.createAvaliacao);
router.delete(
  "/info/:id/avaliacao/:indice",
  LivroController.deleteLivroInfoAvaliacao
);
router.delete("/info/:id", LivroController.deleteLivroInfo);
router.get("/info/:id", LivroController.getLivroInfo);

router.post("/", LivroController.createLivro);
router.get("/", LivroController.getLivros);
router.get("/:id", LivroController.getLivro);
router.delete("/:id", LivroController.deleteLivro);
router.put("/", LivroController.updateLivro);

export default router;
