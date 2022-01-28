function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);

}
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
    document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+amount+",\<br\>in the year "+year+"\<br\>"
}
window.onload = function () {
    var slider = document.getElementById("slider");
    slider.addEventListener("input", function () {
        document.body.style.setProperty("--thumbNumber", "'" + this.value + "'");
<span id="valBox"></span>
<input type="range" min="5" max="10" step="1" 
   oninput="showVal(this.value)" onchange="showVal(this.value)">
