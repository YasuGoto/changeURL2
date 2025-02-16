const express = require("express");
const router = express.Router();
const { updateShort, getRedirectURL } = require("../controllers/urls");

router.post("/shorten", updateShort);
router.get("/:shortId", getRedirectURL);

module.exports = router;
