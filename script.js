let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        button.classList.add("button-click")
        setTimeout(()=>button.classList.remove("button-click"),100)
        if(e.target.innerHTML == '='){
            try {
                string = eval(string);
                input.value = string;
            }
            catch(error) {
                input.value="Invalid Input"
                string=""
            }
        }
        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
    })
})

document.addEventListener('DOMContentLoaded', function() {
    const toggleSwitch = document.querySelector('.switch input[type="checkbox"]');
    const themeStylesheet = document.getElementById('themeStylesheet');
    toggleSwitch.addEventListener('change', function() {
        if (toggleSwitch.checked)
            themeStylesheet.setAttribute('href', 'stylesDark.css');
        else 
            themeStylesheet.setAttribute('href', 'stylesLight.css');
    });
});
