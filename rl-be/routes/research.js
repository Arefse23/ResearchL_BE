const express = require('express');
const router = express.Router();
router.use(express.json());
router.use(express.urlencoded({ extended: true }));
const isLoggedIn = require("../helper/isLoggedIn")

let methodOverride = require("method-override");
router.use(methodOverride('_method'))

const researchCntrl = require("../controllers/research");


// create a new research
router.get("/research/add", researchCntrl.research_create_get);
router.post("/research/add", researchCntrl.research_create_post);

// display the research 
router.get("/research/index", researchCntrl.research_index_get);

// display the research details
router.get("/research/detail", researchCntrl.research_show_get);

// update and edit the research
router.get("/research/edit", researchCntrl.research_edit_get);
router.put("/research/update", researchCntrl.research_update_put);

// delete research
router.delete("/research/delete", researchCntrl.research_delete_get);



module.exports = router;