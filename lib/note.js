const fs = require('fs');
const path = require('path');
const uuid = require('../helpers/uuid');

// add notes function 
function addNote(data, array) {
    // check it the data object has an ID
    if (!data.id) {
        // if no data id, set data.id = UUID (random function to generate id)
        data.id = uuid();
    }
    // push it into the array
    array.push(data);
    // overwrite the db.json file with the new array (stringified)
    fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(array), err => {
        err ? console.log(err) : console.log("Added Notes");
    })
    return data;
}

// delete notes functions
function deleteNote(id, note) {
    // return arrays of index from db.json and search index of the paramater ID
    let indexID = note.map(x => { return x.id }).indexOf(id);
    // delete the index from the db.json array
    note.splice(indexID, 1);
    // overwrite the db.json file with the new array (stringified)
    fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(note), err => {
        err ? console.log(err) : console.log("Deleted Notes");
    })
}

module.exports = {
    addNote,
    deleteNote
};