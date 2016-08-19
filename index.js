var list = new noteList();
var controller = new noteController(list);
controller.setUpNoteListView();
function showNoteForUrl(){
  controller.showNote(controller.getNoteFromUrl(window.location))
}
controller.submitListener();
window.addEventListener("hashchange", showNoteForUrl);
