const amount = document.getElementById("bill_input");
const people_number = document.getElementById("number_of_people");
const reset_btn = document.getElementById("reset_btn");
let tip_amount = document.getElementById('tip_amount');
let perPerson = document.getElementById('eachPersonTotal');
let custom_input = document.getElementById('custom-input');
let tipping_buttons = Array.from(document.getElementsByClassName('tipping-button'));
let percent;
let colorChanger;
let warningOn0 = document.getElementById('warning');

function updInfo(){
    let total_amount = +amount.value;
    let peopleNumber = +people_number.value;
    if(!percent || peopleNumber < 0 || peopleNumber === 0){
        return;
    }
    let tipAmount = ((total_amount * percent) / 100 ) / peopleNumber;
    let person_total = (((total_amount * percent) / 100) + parseInt(total_amount)) / peopleNumber; 
    tip_amount.textContent = '$' + tipAmount.toFixed(2);
    perPerson.textContent = '$' + person_total.toFixed(2);


    if(amount.value.length>6){
        tip_amount.style.fontSize = "30px";
        perPerson.style.fontSize = "30px";
    }

    if(amount.value.length>12){
        tip_amount.style.fontSize = "20px";
        perPerson.style.fontSize = "20px";
    }
    
   
    
}

reset_btn.addEventListener('click', (event) =>{
    if(colorChanger){
        colorChanger.style.color = '#FFFF';
        colorChanger.style.backgroundColor = "#00474B";
    };

    custom_input.value = '';
    
    event.target.style.backgroundColor = '#0D686D';
   
    amount.value = '';
    people_number.value = '';
    perPerson.textContent = '$00.00';
    tip_amount.textContent = '$00.00';
    custom_input.value = '';
    warningOn0.style.display = "none"
    people_number.style.border = 'none';
   })


amount.addEventListener( 'input', () => {
 updInfo();
 reset_btn.style.backgroundColor = '#26C2AE';
})

custom_input.addEventListener('input', (event) =>{
percent = (parseInt(event.target.value));
updInfo();
reset_btn.style.backgroundColor = '#26C2AE';

})

tipping_buttons.map( (button) => {
    button.addEventListener('click', (event) => {
        if ( colorChanger != undefined){
            colorChanger.style.backgroundColor = "#00474B";
            colorChanger.style.color = '#FFFF';
         
        };

        event.target.style.backgroundColor = "#26C2AE";
        event.target.style.color = '#00474B';
        colorChanger = event.target;
        percent=(parseInt(event.target.textContent));
     updInfo();
     reset_btn.style.backgroundColor = '#26C2AE';
    });
})

people_number.addEventListener('input', (event) => {
    updInfo();
    reset_btn.style.backgroundColor = '#26C2AE';
     
    if(event.target.value === '0'){
      warningOn0.style.display = "block";
      people_number.style.border = '2px solid #E17052';
    } else {
        warningOn0.style.display = "none";
        people_number.style.border = 'none';
    }
})


