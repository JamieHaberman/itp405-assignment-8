var bookshelf = require('./bookshelf.js');
var Author = require('./author');
var Publisher = require('./publisher');

var Book = bookshelf.Model.extend({
	tableName: 'books',

	author: function() {
		return this.belongsTo(Author);
	},
	publisher: function() {
		return this.belongsTo(Publisher);
	}
});

module.exports = Book;
