const mongoose = require('mongoose');
const Book = require('./book.js');

const MemberSchema = mongoose.Schema({
    name: String,
    age: Number,
    phone: Number,
    debt: {type: Number, default: '0'},
    books: [Book.schema],
    total_amount_paid: {type: Number, default: '0'}
});

const Member = mongoose.model('Member', MemberSchema);

module.exports = Member;