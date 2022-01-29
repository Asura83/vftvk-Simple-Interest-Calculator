function compute(){
    const principal = document.getElementById("principal");
    const rate = document.getElementById("rate");
    const years = document.getElementById("years");
    const interest = principal.value * years.value * rate.value /100;
    const displayFinal = document.getElementById("result")

    if(principal.value<=0 || principal.value ===null){
        alert("kindly input a positive number");
        principal.focus(); 
    } else{
        displayFinal.innerText = interest;
    }
        
}   

function updateRate(){
    const rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval + "%";
}
        
