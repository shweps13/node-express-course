let { people } = require("../data");

const getPeople = (req, res) => {
    res.json({ people });
}

const getPerson = (req, res) => {
    const idToFind = parseInt(req.params.id);
    const person = people.find((p) => p.id === idToFind);

    if (!person) {
        return res.status(404).json({ message: "That person was not found." });
    }

    res.status(200).json({ person });
}

const editPerson = (req, res) => {
    const name = req.body.name;
    const idToFind = parseInt(req.params.id);
    const personIndex = people.findIndex((p) => p.id === idToFind);

    if (personIndex === -1) {
        return res.status(404).json({ message: "That person was not found." });
    }

    people[personIndex].name = name;

    res.status(200).json({ success: true, data: { id: idToFind, name: name } });
}

const removePerson = (req, res) => {
    const idToFind = parseInt(req.params.id);
    const person = people.find((p) => p.id === idToFind);

    if (!person) {
        return res.status(404).json({ message: "That person was not found." });
    }

    people = people.filter((person) => person.id !== idToFind);

    res.status(200).json({ success: true, person });
}

const addPerson = (req, res) => {
    const name = req.body.name;
    if (name && name != "") {
        people.push({ id: people.length + 1, name: name });
        res.status(201).json({ success: true, name: name });
    } else {
        res.status(400).json({ success: false, message: "Please provide a name" });
    }
}

module.exports = { getPeople, getPerson, editPerson, removePerson, addPerson }