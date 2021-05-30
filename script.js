
// this function will be call clicking the button Compute Interest
function compute()
{
    //first we retrive the values of inputs and we store in local variables
    var principal = document.getElementById("principal");
    var rate = document.getElementById("rate").value;     
    var years = document.getElementById("years").value; 
    var result = document.getElementById("result");

    //we compute interest and the target date
    var interest = principal.value * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    
    //we verify that some amount is inserted, if not we rise an alert
    if(principal.value <= 0 ) {
        alert("Enter a positive number in the Amount field");
        result.innerHTML= "";
        principal.value = "";
    }
    else {
        //finally we update the result 
        result.innerHTML=
            "If you deposit \<mark\>"+principal.value+"\</mark\>,\<br\>"+
            "at an interest rate of \<mark\>"+rate+"\</mark\>%\<br\>"+
            "You will receive an amount of \<mark\>"+interest+"\</mark\>,\<br\>"+
            "in the year \<mark\>"+year+"\</mark\>\<br\>";
        }

    //after the computation the focus is back to principal element
    principal.focus();
}

//This function will update the dysplayed interest rate value
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+" %";
}

//Thi functio is used to avoid negative or zero number in the amount field
function verifyAmountFiled() {
    var principal = document.getElementById("principal");
    //only avoid negative number to not annoying with allert when we reset the field
    if(principal.value < 0) {
        alert("Enter a positive number");
        //we reset the amount field
        principal.value = "";
    }
}