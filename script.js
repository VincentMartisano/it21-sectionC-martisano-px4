let count = 0;
const countbtn = document.getElementById("countbtn");
const countoutput = document.getElementById("countoutput");
const resetbtn = document.getElementById("resetbtn");
const messege = document.getElementById("message");



//Click event listener for the count button
countbtn.addEventListener("click", function() {
    if (count < 10) {
        count++;
        console.log("current count: " + count);
        
    }
    if (count === 10) {
        messege.textContent = "You have reached 10!";
    } else {
        messege.textContent = "keep clicking!";
    }

});

//Reset button
resetbtn.addEventListener("click", function() {
    count = 10;
    countoutput.textContent = count;
    
    messege.textContent = "Click the button to start!";
   
   
});