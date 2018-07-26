var electron=require('electron');
// console.log(electron);
window.myremote={
  fs:require('fs'),
  path:require("path"),
  //sqlectron:require("sqlectron-core"),
  electron:electron,
  remote:electron.remote,
  ipcRenderer:electron.ipcRenderer,
  shell:electron.shell,
  webFrame:electron.webFrame,
  clipboard:electron.clipboard
};
