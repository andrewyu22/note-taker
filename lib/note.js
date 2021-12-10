const fs = require('fs');
const path = require('path');
const uuid = require('../helpers/uuid');

function addNote(data, array) {
    if (!data.id) {
        data.id = uuid();
    }
    array.push(data);
    fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(array), err => {
        err ? console.log(err) : console.log("Added Notes");
    })
    return data;
}

function deleteNote(body, note) {
    console.log(body);
    let indexID = note.forEach((searchID, index) => {
        if (searchID.id === body.id) {
            return index;
        }
    })
    console.log(indexID);
}

module.exports = {
    addNote,
    deleteNote
};