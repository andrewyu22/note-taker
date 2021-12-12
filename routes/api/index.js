const router = require('express').Router();
const notes = require('../../db/db.json');
const { addNote, deleteNote } = require('../../lib/note');

// when /api/notes is called it will get all current notes
router.get('/notes', (req, res) => {
    let results = notes;
    res.json(results);
})

// post when /api/notes is called to add a new note to the db.json
router.post('/notes', (req, res) => {
    const note = addNote(req.body, notes);
    res.json(note);
})

// delete when /api/notes/${id} from db.json
router.delete('/notes/:id', (req, res) => {
    deleteNote(req.params.id, notes);
    res.json(req.body);
})


module.exports = router;