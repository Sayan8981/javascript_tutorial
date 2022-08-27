const sliders = document.querySelectorAll("input[type='range']");

const billInput = document.getElementById("bill");

function calculateTip(){
    let bill = parseFloat(billInput.value);
    let tipPercent =  document.getElementById("tip").value;
    let noOfPeople = document.getElementById("no-of-people").value;

    console.log({bill: bill, tip: tip, tipPercent: tipPercent, noOfPeople: noOfPeople})

    billInput.value = bill.toFixed(2);

    let totaltip = parseFloat(bill * (tipPercent/100)).toFixed(2);
    let total = parseFloat(bill + totaltip).toFixed(2);
    let tipPerperson = (totaltip / noOfPeople);
    let totalPerperson = (total/noOfPeople).toFixed(2);

    document.getElementById("tip-amount").textContent = `\$ ${totaltip}`;
    document.getElementById("total-amount").textContent = `\$ ${total}`;

    document.getElementById("tip-percent").textContent = `${tipPercent}`;
    document.getElementById("split-num").textContent = noOfPeople;

    document.getElementById("tip-per-person").textContent = `\$ ${tipPerperson}`;
    document.getElementById("total-per-person").textContent = `\$ ${totalPerperson}`;

};

sliders.forEach(function(slider){
    slider.addEventListener("input", calculateTip);
});

billInput.addEventListener("change", calculateTip);

