(function(exports) {
  function noteListView(notelist) {
    this._list = notelist;
  };
  noteListView.prototype.toHTML = function() {
    if (!this._list.readNotes().length) {
      return null;
    } else {
    var HTMLstring = "<ul>";
    this._list.readNotes().forEach(function(note) {
      HTMLstring += "<li><div>" + note.readNote() + "</div></li>";
    });
    return HTMLstring += "</ul>";
  };
  };
  exports.noteListView = noteListView;
})(this)
