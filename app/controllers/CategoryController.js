const Categories = require(`../models/Categories`);

class CategoryController{

  getCategories() {

    return  Categories.findAll( {where: { trash: 0 } } );
  }

  getCategoryById(id){

    return Categories.findAll({where: { trash: 0, id: id } } );
  }

  addCategory(user){

    return Categories.create(user);
  }

  updateCategory(user, id){

    return Categories.update(user, { where: { id: id } } );
  }

  deleteCategory(id){

    return Categories.update( {trash: 1}, { where: { id: id } } );
  }
}

module.exports = CategoryController;
