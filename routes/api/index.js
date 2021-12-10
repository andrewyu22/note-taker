const router = require('express').Router();
const notes = require('../../db/db.json');
const { addNote, deleteNote } = require('../../lib/note');

router.get('/notes', (req, res) => {
    let results = notes;
    console.log('IN NOTE API');
    res.json(results);
})

router.post('/notes', (req, res) => {
    const note = addNote(req.body, notes);
    res.json(note);
})

router.delete('/notes/:id', (req, res) => {
    console.log(req.body);
    console.log(notes);
    deleteNote(req.body, notes);
    res.json(req.body);
})


module.exports = router;