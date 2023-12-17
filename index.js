let string = "";
var inputElement = document.querySelector('input');
let buttons = document.querySelectorAll('button');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click',function (e){
    button.style.border="white solid 1px";
    setTimeout(function(){
        button.style.border="none";
    },100);

    if(e.target.innerHTML == '='){
        try {
            string = eval(string);
            inputElement.value = string;
          } catch (error) {
            inputElement.value = 'Invalid';
            setTimeout(function(){
                string = "";
                inputElement.value = string;
            },500);
        }
    }
    else if(e.target.innerHTML == 'C'){
      string = "";
      inputElement.value = string;
    }
    else if (e.target.innerHTML == 'B') {
        inputElement.value = inputElement.value.slice(0, -1);
        string=inputElement.value;
    }    
    else{ 
        console.log(e.target);
        string = string + e.target.innerHTML;
        inputElement.value = string;
      }
  })
})
document.addEventListener('keydown', function (e) {
    e.preventDefault();
  });
inputElement.addEventListener('click', function (e) {
    e.preventDefault();
});