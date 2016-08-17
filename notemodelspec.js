// var Note = require("./note-model.js").Note;
// var assert = require("./assert").assert;

function createsANote() {
  var note = new Note("My favourite language is Ruby");
  assert.isTrue("creates a note", note.readNote() === "My favourite language is Ruby");
}

function createNotesList() {
  var list = new noteList()
  list.addNote("I love ruby");
  assert.isTrue("Creates notelist", list.readNotes()[0].readNote() === "I love ruby");
}

function showNotesListinHTML() {
  var list = new noteList()
  list.addNote("I love ruby");
  list.addNote("it's better for you");
  var view = new noteListView(list);
  var HTMLstring = "<ul><li><div>I love ruby</div></li><li><div>it's better for you</div></li></ul>"
  assert.isTrue("Shows note list in html", view.toHTML() === HTMLstring)
}

function viewWithListWithNoNotes() {
  var list = new noteList();
  var view = new noteListView(list);
  assert.isTrue("List with no notes", view.toHTML() === null)
}

function viewWithOneNote() {
  var list = new noteList();
  list.addNote("It's a wednesday");
  var view = new noteListView(list);
  assert.isTrue("list with one note", view.toHTML() === "<ul><li><div>It's a wednesday</div></li></ul>");
}

createsANote();
createNotesList();
showNotesListinHTML();
viewWithListWithNoNotes();
viewWithOneNote();
