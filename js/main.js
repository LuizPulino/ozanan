import $ from './modules/dom.js';
import Storage from './modules/storage.js';
Storage.create("person", "Luiz Pulino");
$("p").html(Storage.read("person"));
$("p").prepend("prepend");
$("p").append("append");