var list = new noteList();
var controller = new noteController(list);
controller._list.addNote("My favourite drink: seltzer");
controller._list.addNote("My favourite food: burger");
controller._list.addNote("My favourite film: 12 Angry Men")
controller.setUpNoteListView();
controller.HTMLToApp();
