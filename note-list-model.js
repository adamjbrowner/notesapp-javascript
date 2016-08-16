(function(exports) {
  function noteList() {
    this._list = []
  }
  noteList.prototype.readNotes = function () {
    return this._list
  };

  noteList.prototype.addNote = function(note) {
    this._list.push(note)
  }

  exports.noteList = noteList
})(this)
