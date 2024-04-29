// get the id's of bill, tip and button from the html 
const bill = document.getElementById('bill');
const tip = document.getElementById('tip');
const btn = document.getElementById('btn');
const calculator = document.getElementById('result');

// calculate tip function
calculateBill = () =>{
    // get user input
    const billInput = bill.value;
    const tipInput = tip.value;
    // check input
    if(billInput === ""){
        alert("Enter bill amount ")
    }else if(tipInput === ""){
        alert("Enter Tip amount")
    }else{
        // convert string to number
        const amount = parseFloat(billInput)/100 * parseFloat(tipInput) + parseFloat(billInput);
        result.innerText = "Total Bill:" + "£" + amount.toFixed(2);
    }
}
btn.addEventListener('click', calculateBill);