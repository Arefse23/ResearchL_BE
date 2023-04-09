const Research = require('../models/Research')
const User = require('../models/Users')

const moment = require('moment')

exports.research_create_get = (req, res) =>{
    // res.render("article/add");
    User.find()
    .then((users) => {
        res.render("research/add", { users })
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
        // res.redirect("/article/index");
        // Reference Schema
        // req.body.user.forEach(user => {
        //     User.findById(user, (err, user) => {
        //         user.research.push(research);
        //         user.save();
        //     })
        // });

        // Save Research with Loggedin user

        res.redirect("/research/index");
    })
    .catch((err) => {
        console.log(err);
        res.send(err.message);
    });
}


exports.research_index_get = (req, res) => {
    Research.find({categories: "Experimental Research"})
    .then(researchs => {
        res.render("research/index", {researchs, moment})
    })
    .catch(err => {
        console.log(err);
    })
}


exports.research_show_get = (req, res) => {
    console.log(req.query.id);
    Research.findById(req.query.id)
    .then(research => {
        res.render("research/detail", {research, moment})
    })
    .catch(err => {
        console.log(err);
    })
}



exports.research_edit_get = (req, res) => {
    Research.findById(req.query.id)
    .then(research => {
        res.render("research/edit", {research});
    })
    .catch(err => {
        console.log(err);
    })
}

exports.research_update_put = (req, res) => {
    console.log(req.body.id);
    Research.findByIdAndUpdate(req.body.id, req.body)
    .then(() => {
        res.redirect("/research/index");
    })
    .catch(err => {
        console.log(err)
    });
}


exports.research_delete_get = (req, res) => {
    console.log(req.query.id);
    Research.findByIdAndDelete(req.query.id)
    .then(()=>{
        res.redirect("/research/index");
    })
    .catch(err => {
        console.log(err);
    })
};