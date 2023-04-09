const express = require('express');
const router = express.Router();
router.use(express.urlencoded({ extended: true }));

let methodOverride = require("method-override");
router.use(methodOverride('_method'));

const categorieCntrl = require("../controllers/categories");

router.get("/categories/add", categorieCntrl.categories_create_get);
router.post("/categories/add", categorieCntrl.categories_create_post);


module.exports = router;