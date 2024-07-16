var tablinks= document.getElementsByClassName("tab_links");
var tabcontents= document.getElementsByClassName("tab_contents");
function opentab(tabname){
    for(tab_links of tablinks){
        tab_links.classList.remove("active-link");
    }
    for(tab_contents of tabcontents){
        tab_contents.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu = document.getElementById("sidemenu");
    function openmenu(){
        sidemenu.style.right = "0";
    }
    function closemenu(){
        sidemenu.style.right = "-200px";
    }

const scriptURL = 'https://script.google.com/macros/s/AKfycbxjDzN2GSh01q7g2G6qvQfnukjW2ZQAzbrSkQAoqyWDA5Kmc5wMuWmfD7ZZuCW8e1Ht/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message sent sucessfully!"
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})