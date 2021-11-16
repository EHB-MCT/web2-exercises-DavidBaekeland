// let fs = require(fs)

// console.log(fs)

let iconInput = document.getElementsByClassName("iconInput");

console.log(iconInput.length)

for(let i=0; i <= iconInput.length-1; i++){  
    // console.log(iconInput, i);
    iconInput[i].addEventListener("change", e => {
        change(e, i);
    });
}
    
    //https://www.codegrepper.com/code-examples/javascript/javascript+event+listener+checkbox
    // https://www.w3schools.com/howto/howto_js_add_class.asp
    // https://www.quora.com/How-do-I-add-an-HTML-element-ID-with-Javascript-and-classes
    // https://stackoverflow.com/questions/54358737/add-and-remove-id-by-pure-javascript/54358814

function change(e, i)  {
    // console.log(e.target);
    if(e.target.checked) {
        // console.log("qqsdfqsdfdsqfqf");
        document.getElementsByTagName("img")[i].setAttribute('class','img filterImg');
        document.getElementsByTagName("div")[i].setAttribute('class','iconActive');
    } else {
        document.getElementsByTagName("img")[i].setAttribute('class','img iconImg');
        document.getElementsByTagName("div")[i].setAttribute('class','icon');
    
    }
};

document.getElementById("form").addEventListener("submit", e => {
    e.preventDefault();
    let input = document.getElementsByClassName('iconInput');
    console.log(input);
    if(input.length > 0)  {
        for(let i=0; i<=input.length-1; i++)  {
            if(input[i].checked) {
                console.log(input[i].value);
            }
        }
    } else{
        console.log("U heeft geen icon aangeduid");
    }
});