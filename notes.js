const fs = require("fs");
const chalk = require("chalk");

const getNotes = (title) => {
    const notes = loadNotes();
    const note = notes.find(note => note.title === title);
    if(note) {
        console.log(note.title);
        console.log(note.body);
    }else{
        console.log(chalk.red.inverse("Note not find!"))
    }

};

const addNote = (title, body) => {
  const notes = loadNotes();
  const contained = notes.find((obj) => obj.title === title);
  if (!contained) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.green.inverse("Note properly saved"));
  } else {
    console.log(chalk.red.inverse("No Note saved"));
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const findNote = notes.find((note) => note.title === title);
  if (findNote) {
    const filterdNote = notes.filter((note) => note.title !== title);
    saveNotes(filterdNote);
    console.log(chalk.green.inverse("Note removed"));
  } else {
    console.log(chalk.red.inverse("No note removed!"));
  }
};

const listNotes = () => {
  const notes = loadNotes();
  if (notes.length > 0) {
    console.log(chalk.green.inverse("LIST OF NOTES"));
    notes.forEach((note) => {
      console.log(note.title);
      console.log(note.body);
    });
  } else {
    console.log(chalk.red.inverse("Empty notes"));
  }
};

const saveNotes = (notes) => {
  const noteJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", noteJSON);
};

const loadNotes = () => {
  try {
    const bufferNote = fs.readFileSync("notes.json");
    const noteJSON = bufferNote.toString();
    return JSON.parse(noteJSON);
  } catch (e) {
    return [];
  }
};

module.exports = {
  getNotes,
  addNote,
  removeNote,
  listNotes,
};
