function clickMe(id){
    // showTheSeatDetails(id);
    myFunction(id);
    
}

function totalPrice(id){
    const priceElement = document.getElementById("price-total")
    const priceElementText = priceElement.innerText;
    const currentPrice = parseInt(priceElementText);
    const newPriceStatus = currentPrice+550;
    return newPriceStatus;


    // 

    
}

function displayThePrice(){
    const priceElement = document.getElementById("price-total")
    priceElement.innerText = totalPrice()

}





function setBackgroundColorbyId(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-[#1DD100]')
}

function showTheSeatDetails(id){
    const parentDiv = document.getElementById("first-div");
    const childDiv = document.createElement("div"); 
    const span1 = document.createElement("span");
    span1.innerText = id ;
    const span2 = document.createElement("span");
    span2.innerText = "AC";
    const span3 = document.createElement("span");
    span3.innerText = 550;



    childDiv.appendChild(span1);
    childDiv.appendChild(span2);
    childDiv.appendChild(span3);
    


    childDiv.classList.add("flex");
    childDiv.classList.add("justify-around");
    childDiv.classList.add("border");
    childDiv.classList.add("gap-20");

    parentDiv.appendChild(childDiv);

}

let counter=0;
let myArray = [];
function myFunction(id){
    
    if(myArray.includes(id)){
        const button = document.getElementById(id);
        alert("Cant Not the seat")
    }
    else{
        if (counter<4){
            counter+=1; 
            showTheSeatDetails(id);
            setBackgroundColorbyId(id); 
            displayThePrice(id)
            increaseSeat();
            decreaseSeat();
            myArray.push(id); 

        }
        else{
            alert("Can't Select More than 4 seat at a Time");

        }  
    }
}
function increaseSeat(){
    // 1)getting the Current Seat status
    const currentSeatElement = document.getElementById("increase-seat");
    const currentSeatText = currentSeatElement.innerText;
    const currentSeat = parseInt(currentSeatText);
    
    // 2)Updating the current seat status
    const newSeatStatus = currentSeat + 1;
    // 3)Showing The Seat Status
    currentSeatElement.innerText = newSeatStatus;
    // Now Change The colour of the seat status
    colourChange();
}

function decreaseSeat(){
    const currentSeatElement = document.getElementById("decrease-seat");
    const currentSeatText = currentSeatElement.innerText;
    const currentSeat = parseInt(currentSeatText);
    const newSeatStatus = currentSeat - 1;
    currentSeatElement.innerText = newSeatStatus;
}


function colourChange(){
    const element = document.getElementById("increase-seat");
    element.classList.add('bg-[#1DD100]',"rounded");
}

let cuponResult =0;

function cuponCalculation(){
    const cuponInputFieldText = document.getElementById("input-cupon-id").value;
    const value = totalPrice() - 550;
    if (cuponInputFieldText === "NEW15"){
        cuponResult = (value * 15) / 100;
    } else if (cuponInputFieldText === "Couple 20"){
        cuponResult = (value * 20) / 100;
        
    }
}

function showGrandTotalPrice(){
    
    const mainPrice =totalPrice()-550;
    cuponCalculation();
    const grandPriceElement = document.getElementById("grand-total");
    const newGrandPrice = mainPrice - cuponResult;
    grandPriceElement.innerText = newGrandPrice;


}



function hideandShow(){
    hideElementbyId();
    showElementbyId();
}

function hideElementbyId(){
    const element = document.getElementById("hide-kora-lagbe");
    element.classList.add("hidden");
}
function showElementbyId(){
    const element = document.getElementById("show-id");
    element.classList.remove("hidden");
}

function continueKorbe(){
    const element = document.getElementById("hide-kora-lagbe");
    element.classList.remove("hidden");
    const removeSuccess = document.getElementById("show-id");
    removeSuccess.classList.add("hidden");
}

document.getElementById("apply-button").addEventListener("click",function(){
    const hideCupon = document.getElementById("hide-korbo");
    hideCupon.style.display = "none";
});