var arr = []
document.getElementById("selector").addEventListener("change",() => {
    var e = document.getElementById("selector");
    var text = e.options[e.selectedIndex].text;
    document.querySelectorAll(".contener .categorie").forEach(element => {
        console.log(element.innerHTML);
        if(element.innerHTML==text)
        {
            element.parentElement.style.display="inline";
        }
        else
        {
            element.parentElement.style.display="none";  
        }
    });
})
