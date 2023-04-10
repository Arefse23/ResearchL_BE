const express = require('express');
const router = express.Router();
router.use(express.urlencoded({ extended: true }));

const isLoggedIn = require("../helper/isLoggedIn")

let methodOverride = require("method-override");
router.use(methodOverride('_method'))

const categoriesCtrl = require("../controllers/categories")

router.get('/categories/index', categoriesCtrl.categories_index_get)




module.exports = router;