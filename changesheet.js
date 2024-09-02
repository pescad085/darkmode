//This will check the user preferences
document.addEventListener("DOMContentLoaded", function() {
const savedTheme = localStorage.getItem("theme");

      if(savedTheme) {
        changestylesheet(savedTheme);
      }

})

document.getElementById("night").addEventListener("click", changeTheme);
let myBtn  = document.getElementById("night");
     function changeTheme() {
           const currentTheme = document.getElementById("mystylesheet").getAttribute("href");
           if(currentTheme === "styling.css") {
              changestylesheet("dark.css");
               localStorage.setItem("theme", "dark.css");
               myBtn.innerHTML = "Day mode"

           }
             else {
                 changestylesheet("styling.css");
                 localStorage.setItem("theme", "styling.css");
                 myBtn.innerHTML = "Night mode"


             }

     }
             function changestylesheet(sheet) {
                document.getElementById('mystylesheet').setAttribute('href', sheet);

             }