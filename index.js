var list = new noteList();
var controller = new noteController(list);
controller._list.addNote("My favourite drink: seltzer");
controller.setUpNoteListView();
controller.HTMLToApp();
