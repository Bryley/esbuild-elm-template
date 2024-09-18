import { Elm } from "./Main.elm";

let app = Elm.Main.init({
  node: document.getElementById("app"),
});

// app.ports.sendChat.subscribe(function (val) {
//   console.log(val);
//   var source = new SSE("http://localhost:5000/chat", { payload: val });
//   source.addEventListener("message", function (e) {
//     // Assuming we receive JSON-encoded data payloads:
//     var payload = JSON.parse(e.data);
//     console.log(payload);
//   });
//   // app.ports.receiveChat.send("Hello");
// });
