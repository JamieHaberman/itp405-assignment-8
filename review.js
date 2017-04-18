var bookshelf = require('./bookshelf.js');

var Review = bookshelf.Model.extend({
	tableName: 'reviews'
});

module.exports = Review;