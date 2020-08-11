const accountsRouter = require("express").Router();
const db = require("../../data/dbConfig");

// // --> GET api/accounts <-- // //
accountsRouter.get("/", (req, res) => {
  db.select("*")
    .from("accounts")
    .then((accounts) => {
      res.status(200).json({ accounts });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

// // --> GET api/accounts/:id <-- // //
accountsRouter.get("/:id", (req, res) => {
  const req_id = req.params.id;

  db.select("*")
    .from("accounts")
    .where("id", req_id)
    .then((account) => {
      account.length > 0
        ? res.status(200).json({ account })
        : res.status(404).json({ message: `no account with id: ${req_id}` });
    })
    .catch((err) => {
      err.message
        ? res.status(500).json({ error: err.message })
        : res.status(500).json({ message: "its not you, its me 💔" });
    });
});

// // --> POST api/accounts <-- // //
accountsRouter.post("/", (req, res) => {
  const post = req.body;

  db.select("*")
    .from("accounts")
    .insert(post)
    .returning("id")
    .then((added_ids) => {
      added_ids.length > 0
        ? res.status(201).json({ added_ids })
        : res
            .status(201)
            .json({ message: "thats weird...no added_id to give ya" });
    })
    .catch((err) => {
      err.message
        ? res.status(500).json({ error: err.message })
        : res.status(500).json({ message: "its not you, its me 💔" });
    });
});

// // --> PUT api/accounts/:id <-- // //
accountsRouter.put("/:id", (req, res) => {
  const req_id = req.params.id;
  const changes = req.body;

  db("accounts")
    .where({ id: req_id })
    .update(changes)
    .then((updated) => {
      updated > 0
        ? res.status(200).json({ updated })
        : res.status(404).json({ message: `no account with id: ${req_id}` });
    })
    .catch((err) => {
      err.message
        ? res.status(500).json({ error: err.message })
        : res.status(500).json({ message: "its not you, its me 💔" });
    });
});

// // --> DELETE api/accounts/:id <-- // //
accountsRouter.delete("/:id", (req, res) => {
  const req_id = req.params.id;

  db("accounts")
    .where({ id: req_id })
    .delete()
    .then((deleted) => {
      deleted > 0
        ? res.status(200).json({ deleted })
        : res.status(404).json({ message: `no account with id: ${req_id}` });
    });
});

module.exports = accountsRouter;
