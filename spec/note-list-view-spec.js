function showNotesListinHTML() {
  var list = new noteList();
  list.addNote("123456789012345678901");
  list.addNote("it's better for you");
  var view = new noteListView(list);
  var HTMLstring = "<ul><li><div>12345678901234567890</div></li><li><div>it's better for you</div></li></ul>";
  assert.isTrue("Shows note list in html with 20 chars", view.toHTML() === HTMLstring);
}

function viewWithListWithNoNotes() {
  var list = new noteList();
  var view = new noteListView(list);
  assert.isTrue("List with no notes", view.toHTML() === null);
}

function viewWithOneNote() {
  var list = new noteList();
  list.addNote("It's a wednesday");
  var view = new noteListView(list);
  assert.isTrue("list with one note", view.toHTML() === "<ul><li><div>It's a wednesday</div></li></ul>");
}


showNotesListinHTML();
viewWithListWithNoNotes();
viewWithOneNote();
