(function() {
  function noteListView(notelist) {
    this._list = notelist
  }
  noteListView.prototype.toHTML() {
    joined = this._list.readNotes().join(', ');
  }
})
