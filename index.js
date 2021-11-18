var initiaPrice=document.querySelector("#initial-price");
var stocksQuantity=document.querySelector("#stocks-quantity");
var currentPrice=document.querySelector("#current-price");
var calculateBtn=document.querySelector("#calculate-btn")
var outputElement=document.querySelector("#output-box");


calculateBtn.addEventListener("click",submitHandler)

function submitHandler(){
    var ip=Number(initiaPrice.value);
    var qty=Number(stocksQuantity.value);
    var curr=Number(currentPrice.value);

    calculateProfitAndLoss(ip,qty,curr);
}


function calculateProfitAndLoss(initial,quantity,current){
    if(initial>current){
        var loss=(initial-current)*quantity;
        var lossPercentage=(loss/initial)*100;
        outputElement.innerHTML=`Loss is ${loss} and Loss Percentage is ${lossPercentage}%`;
       
    }else if(current>initial){
        var profit=(current-initial)*quantity;
        var profitPercentage=(profit/initial)*100;
        outputElement.innerHTML=`Profit is ${profit} and Profit Percentage is ${profitPercentage}%`;
        
    }else{
        outputElement.innerHTML="No profit No Loss";
        console.log("No pain no gain");
    }
}

