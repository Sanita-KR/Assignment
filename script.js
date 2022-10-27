bindButtonsIncreaseReduce(1);
bindButtonsIncreaseReduce(2);
bindButtonsIncreaseReduce(3);


function bindButtonsIncreaseReduce(buttonId) {
    let btnAdd = document.querySelector("#increase-quantity-button-" + buttonId);
    let btnSubtract = document.querySelector("#reduce-quantity-button-" + buttonId);
    let input = document.querySelector("#quantity-" + buttonId);
    btnAdd.addEventListener("click", () => {
        input.value = parseInt(input.value) + 1;
        cart();
    });
    btnSubtract.addEventListener("click", () => {
        let newValue = parseInt(input.value) - 1
        if (newValue < 0) {
            newValue = 0
        }
        input.value = newValue
        cart();
    });

    input.addEventListener("change", () => {
        cart();
    });
}

function cart() {
    var item = [
        Number(document.querySelector("#quantity-1").value),
        Number(document.querySelector("#quantity-2").value),
        Number(document.querySelector("#quantity-3").value)
    ];

    var total = [
        document.querySelector("#quantity-1").value * document.querySelector(".amount-1").textContent,
        document.querySelector("#quantity-2").value * document.querySelector(".amount-2").textContent,
        document.querySelector("#quantity-3").value * document.querySelector(".amount-3").textContent
    ];

    var countItem = 0;
    var totalDue = 0;

    for (var i = 0; i < item.length; i++) {
        countItem += item[i];
    }

    for (var j = 0; j < total.length; j++) {
        totalDue += total[j];
    }

    showSummary(countItem);

    document.querySelector("#shipping-price-1").innerHTML = " R " + totalDue.toFixed(2);
}

function showSummary(value) {
    if (value > 0) {
        document.querySelector("#summary").style.display = "block";
    } else {
        document.querySelector("#summary").style.display = "none";
    }
}

// function quantityChanged(event) {
//   var input = event.target
//   if (isNaN(input.value) || input.value <= 0) {
//       input.value = 1
//   }
//   document.getElementsByClassName("option-price").innerHTML = input.value;
// }
