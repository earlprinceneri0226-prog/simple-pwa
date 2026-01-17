 document.getElementById("btn").addEventListener("click", () => {
     document.getElementById("output").textContent = "Button clicked!";
 });

 if("serviceworker" in navigator){
     Window.addEventListener("load", () => {
         navigator.serviceWorker
             .register("service-worker.js")
             .then(() => console.log("service worker registered"))
             .catch( err => console.log("Service worker registration failed", err));
     });
 }

    