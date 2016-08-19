(function(exports) {
  function noteController(notelist) {
    this._list = notelist;
  };

  noteController.prototype.setUpNoteListView = function () {
    this._noteListView = new noteListView(this._list);
  };

  noteController.prototype.HTMLToApp = function () {
    var element = document.getElementById("app");
    element.innerHTML = this._noteListView.toHTML();
  };

  noteController.prototype.showNote = function (id) {
    var noteView = new SingleNoteView(this._list.readNotes()[id])
    document
      .getElementById('notes')
      .innerHTML = noteView.noteAsHTML()
  }

  noteController.prototype.getNoteFromUrl = function(location){
   return location.hash.split('#')[1];
 };

  noteController.prototype.submitListener = function () {
    document.addEventListener("submit", function(submitForm) {
      var text = document.getElementById("text").value
      submitForm.preventDefault();
      controller._list.addNote(text)
      controller.HTMLToApp()
      });
    };
  exports.noteController = noteController;
})(this);
