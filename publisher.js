var bookshelf = require('./bookshelf.js');

var Publisher = bookshelf.Model.extend({
	tableName: 'publishers'
});

module.exports = Publisher;