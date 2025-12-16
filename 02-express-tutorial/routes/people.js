const express = require("express");
const router = express.Router();
const { addPerson, getPerson, editPerson, removePerson, getPeople } = require("../controllers/people.js");

router.get('/', (req, res) => {
    getPeople(req, res)
})

router.get('/:id', (req, res) => {
    getPerson(req, res)
})

router.put('/:id', (req, res) => {
    editPerson(req, res)
})

router.delete('/:id', (req, res) => {
    removePerson(req, res)
})

router.post('/', (req, res) => {
    addPerson(req, res)
})

module.exports = router;