const express = require('express');
const router = express.Router();
router.use(express.urlencoded({ extended: true }));

const isLoggedIn = require("../helper/isLoggedIn")

let methodOverride = require("method-override");
router.use(methodOverride('_method'))

const researchCntrl = require("../controllers/research");

router.get("/research/add", researchCntrl.research_create_get);
router.post("/research/add", researchCntrl.research_create_post);

router.get("/research/index", researchCntrl.research_index_get);
router.get("/research/detail", researchCntrl.research_show_get);

router.get("/research/edit", researchCntrl.research_edit_get);
router.put("/research/update", researchCntrl.research_update_put);

router.get("/research/delete", researchCntrl.research_delete_get);


module.exports = router;