var operand1 = document.getElementById('operand1');
var operand2 = document.getElementById('operand2');;
var operator = document.getElementById('operator');
console.log(operator.innerText);

var btns = document.getElementsByClassName('btn');
for(var i=0; i<btns.length; i++){
    var btn = btns[i];
    btn.addEventListener('click', function(event){
        var btnVal = event.target.innerText;

        if(btnVal == "C"){
            console.log("c clicked");
            operand1.innerText= 0;
            operand2.innerText= "";
            operator.innerText = "";
        }

        if(btnVal == '1' || btnVal == '2' || btnVal == '3' || btnVal == '4' || btnVal == '5' || btnVal == '6' || btnVal == '7' || btnVal == '8' || btnVal == '9' || btnVal == '0'){
            if(operator.innerText == ''){
                operand1.innerText += btnVal;
                console.log("operand 1");
            }else{
                operand2.innerText += btnVal;
                console.log("operand 2");
            }
        }
        else if(btnVal !== '=' && btnVal !== 'C'){
            operator.innerText = btnVal;
            console.log(btnVal);
        }
       

        if(operand2.innerText !== '' && btnVal == "="){
            console.log("now try to get the sum");
            var operand1Value = parseFloat(operand1.innerText);
            var operand2Value = parseFloat(operand2.innerText);

            var result;
            switch(operator.innerText){
                case '+':
                    result = operand1Value + operand2Value;
                    break;

                case '-':
                    result = operand1Value - operand2Value;
                    break;

                case '*':
                    result = operand1Value * operand2Value;
                    break;

                case '/':
                    result = operand1Value / operand2Value;
                    break;

                case '%':
                    result = operand1Value % operand2Value;
                    break;
                }

            operand1.innerText = result;
            operand2.innerText = "";
            operator.innerText = "";
        }

       
    });
}

