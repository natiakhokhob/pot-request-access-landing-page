const input = document.getElementById("email");
const error = document.getElementsByClassName("error")[0];
const button = document.getElementById("button");


button.addEventListener("click", () => {
  event.preventDefault();
  emailValidation(input, error);
});




function emailValidation(inputText, errorr) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputText.value.match(mailformat)){
        error.style.display = "none";
        input.style.borderColor = "black";
        return true;
    } else {
        error.style.display = "flex";
        input.style.borderColor = "red";
        return false;
    }
}