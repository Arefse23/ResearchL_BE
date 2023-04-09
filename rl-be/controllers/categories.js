const Research = require('../models/Research')
const Categories = require('../models/Categories')
const User = require('../models/Users')

exports.categories_create_get = (req, res) =>{
  
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

exports.categories_linked_research = (req, res) => {
    

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

