exports.homePage = (req, res) => {
  res.render('layout'); //views/layout.pug
}

//add store nav link
exports.addStore = (req, res) => {
  res.render('editStore', {title: 'Add Store'}); //views/editStore.pug
}
