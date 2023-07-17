//Numbers on card
let cardNumber = document.getElementsByClassName("num-span");
//Customer's name on card;
let customer_Name = document.getElementById("left");
//CVC input BOX
let card_cvc_input = document.getElementById("card-cvc-input");
//CVC ON CARD
let card_cvc = document.getElementById("card-cvc");
//Expire Month Input
let ExpM_input = document.getElementById("ExpM-input");
//Expire Month number on card
let ExpM_in_card = document.getElementById("ExpM-in-card");
//Expire year Input
let ExpY_input = document.getElementById("ExpY-input");
//Expire year number on card
let ExpY_in_card = document.getElementsByClassName("year-span");

  //Number input tag
  let Number_inputs = document.getElementById("Number-input");
//Name input tag
let Name_inputs = document.getElementById("Name-input")

let red_text = document.getElementsByClassName("required");


//modifying required message 
            function handleInput(index){
                       
                        if(index==0){
                            if(Name_inputs.value.length>0 ){
                                red_text[0].style.display='none';
                            }else{
                                red_text[0].style.display='block';
                            }
                        }
                        if(index==1){
                            if(Number_inputs.value.length>0){
                                red_text[1].style.display='none';
                            }else{
                                red_text[1].style.display='block';
                            }
                        }
                        if(index==2){
                            if(card_cvc_input.value.length>0){
                                red_text[2].style.display='none';
                            }else{
                                red_text[2].style.display='block';
                            }
                        }
                    
                    console.log(index);
            }



//Limits Numbers should be 16
function checkInput(input) {
if (input.value.length > 16) {
  input.value = input.value.slice(0, 16); // Truncate the input value
}
}


//functions trigger when we click submit button.
function formSubmit(event){
  //For stoping auto page refresh
  event.preventDefault();



//Conditions for checking if both inputs are empty or not.
if(
 Number_inputs.value.length>0 &&
 Name_inputs.value.length>0 &&
 card_cvc_input.value.length>0 &&
 ExpM_input.value.length>0 &&
 ExpY_input.value.length>0

 ){

  //changing innertext of name according to the input name.
  customer_Name.innerText=Name_inputs.value;
  card_cvc.innerText=card_cvc_input.value;

   //changing innertext of Exp month and Year according to the input .
  ExpM_in_card.innerText = ExpM_input.value;
  ExpY_in_card[0].innerText = ExpY_input.value;
  //Update CVC
  card_cvc.innerText= card_cvc_input.value;
//Changing inner text according to  the inputs of numbers
          let x = '';
          let y=0;
          for (let i = 0; i <= 16-1; i += 4) {
              for (let j = i; j < i + 4; j++) {
              x = x +  Number_inputs.value[j];
              }
              cardNumber[y].innerText=x;
              console.log(x);
              x = '';
              console.log('------');
              y++;
          } 
}else{
// alert("Enter all details")
// let red_text = document.getElementsByClassName("required");
// console.log("Fill Empty BOX");


}
}