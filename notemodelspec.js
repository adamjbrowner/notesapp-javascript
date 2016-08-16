// var Note = require("./note-model.js").Note;
// var assert = require("./assert").assert;

function createsANote() {
  var note = new Note("My favourite language is Ruby");
  assert.isTrue(note.readNote() === "My favourite language is Ruby");
}

function createNotesList() {
  var list = new noteList()
  list.addNote("Please bring back ruby");
  assert.isTrue(list.readNotes()[0] === "Please bring back ruby");
}
createsANote();
createNotesList();
