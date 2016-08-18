var list = new noteList();
var controller = new noteController(list);
controller.setUpNoteListView();
// controller.HTMLToApp();
controller.submitListener();
