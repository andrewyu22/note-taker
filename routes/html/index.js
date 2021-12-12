const path = require('path');
const router = require('express').Router();

// Main page redirect to index.html
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
})

// Note pages redirects to notes.html
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
})

// Any other directory will be redirect to index.html
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
})

module.exports = router;