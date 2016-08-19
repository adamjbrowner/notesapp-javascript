(function (exports){
  function SingleNoteView(note){
    this._note = note;
  }
  SingleNoteView.prototype = {
    noteAsHTML: function() {
     return "<div>" + this._note.readNote() + "</div>";
    },
  };
  exports.SingleNoteView = SingleNoteView;
})(this);
