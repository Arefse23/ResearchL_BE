const Research = require('../models/Research')
const User = require('../models/Users')


const moment = require('moment')

exports.research_create_get = (req, res) =>{
    // res.render("article/add");
    User.find()
    .then((users) => {
        // res.render("research/add", { users })
        res.json({users})
    })
    .catch(err => {
        console.log(err)
    });
}

exports.research_create_post = (req, res) => {
    console.log(req.body);
    let research = new Research(req.body);

    // Save article
    research.save()
    .then(()=>{

        // res.redirect("/research/index");
    })
    .catch((err) => {
        console.log(err);
        res.send(err.message);
    });
}


exports.research_index_get = (req, res) => {
    Research.find()
    .then(researchs => {
        res.json({researchs: researchs})
        res.render("research/index", {researchs, moment})
        
        
        
    })
    .catch(err => {
        console.log(err);
    })
}

// ====================================Categories===============================


// exports.research_index_get = (req, res) => {
//     Research.find({categories: "Experimental Research"})
//     .then(researchs => {
//         res.render("research/index", {researchs, moment})
//     })
//     .catch(err => {
//         console.log(err);
//     })
// }




// =============================================================================

exports.research_show_get = (req, res) => {
    console.log(req.query.id);
    Research.findById(req.query.id)
    .then(research => {
        // res.render("research/detail", {research, moment})
        res.json({research})
    })
    .catch(err => {
        console.log(err);
    })
}



exports.research_edit_get = (req, res) => {
    Research.findById(req.query.id)
    .then(research => {
        // res.render("research/edit", {research});
        res.json({research})
    })
    .catch(err => {
        console.log(err);
    })
}

exports.research_update_put = (req, res) => {
    console.log(req.body.id);
    Research.findByIdAndUpdate(req.body._id, req.body, {new : true})
    .then((research) => {
        // res.redirect("/research/index");
        res.json({research})
    })
    .catch(err => {
        console.log(err)
    });
}


exports.research_delete_get = (req, res) => {
    console.log(req.query.id);
    Research.findByIdAndDelete(req.query.id)
    .then((research)=>{
        // res.redirect("/research/index");
        res.json({research})
    })
    .catch(err => {
        console.log(err);
    })
};

// ===================================Categories================================

exports.categories_create_get = (req, res) =>{
    // res.render("article/add");
    User.find()
    .then((users) => {
        res.render("categories/add", { users })
    })
    .catch(err => {
        console.log(err)
    });
}

exports.categories_create_post = (req, res) => {
    console.log(req.body);
    let categories = new Categories(req.body);

    // Save article
    categories.save()
    .then(()=>{

        res.redirect("/research/index");
    })
    .catch((err) => {
        console.log(err);
        res.send(err.message);
    });
}
