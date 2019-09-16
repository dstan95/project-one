const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ListSchema = new Schema({
    name: {type: String, trim: true, required: true, unique: true},
    description: {type: String, trim: true, required: true},
    asignee: {type: String, trim: true, required: true},
    createdBy: {type: String, trim: true, required: true},
    tags: {type: String, trim: true, required: true },
    daysOpen: {type: Number, default: 0},
    isActive: {type: Boolean, default: false},
    dateCreated: {type: Date, default: Date.now}
});

const List = mongoose.model('List', ListSchema);
// se exporta pentru a fi folost in alta parte
module.exports = List;