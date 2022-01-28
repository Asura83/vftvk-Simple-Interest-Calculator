function get_current_year(){
    var now =new Date();
    var current_year=now.getFullYear();
    return current_year;
};
function calcule(amount= 0, rate=0, no_years=0){
    
    var a = (rate*amount)/100;
    var res = no_years * a;
return res;
}
function compute()
{
    
//    var amount = document.querySelector('input[name="amount"]').value;
   var rate = document.querySelector('input[name="rate"]').value;
//    var no_years = document.querySelector('input[name="no_years"]').value;

    // var result = calcule(amount,rate,no_years);
    alert(rate);
    
}
    
