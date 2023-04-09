const mongoose = require('mongoose');

const CategoriesSchema = mongoose.Schema({
    categoriesname : String,
},{timestamps: true})

const Categories = mongoose.model("Categories", CategoriesSchema)
module.exports = Categories

