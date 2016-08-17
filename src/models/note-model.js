(function(exports) {
  function Note(text) {
    this.body = text;
  };

  Note.prototype.readNote = function() {
    return this.body;
  };
  exports.Note = Note;
})(this);
