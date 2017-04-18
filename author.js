var bookshelf = require('./bookshelf.js');

var Author = bookshelf.Model.extend({
	tableName: 'authors'
});

module.exports = Author;
