const express = require('express');
const { getListItems, createItem } = require("../controllers/listControllers");
const router = express.Router();

router.get("/getItems", getListItems);
router.post("/createItem", createItem);

module.exports = router;
