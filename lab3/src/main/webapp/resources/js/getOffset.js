function getOffset(){
    document.getElementById("date").value = new Date().getTimezoneOffset()/(-60);
    document.getElementById("mainForm:offset").value = new Date().getTimezoneOffset()/(-60);
}