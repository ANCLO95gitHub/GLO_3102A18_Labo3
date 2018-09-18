let gtimeOut;
export default function hello( argu ){

    let texto = document.getElementById("myMessage").value;
    console.log(texto);

    let unT = document.getElementById("unToast");
    if( argu === 1 ){
        let estPresent = document.getElementById("DivErreur");
        if( estPresent == null){
            let unDiv = document.createElement("div");
            unDiv.setAttribute("id", "DivErreur");////DivSucces   DivInfo
            unDiv.setAttribute("height", "300px");
            unDiv.innerHTML = texto;
            let btn = document.createElement("BUTTON");
            let t = document.createTextNode("CLICK Erreur");       // Create a text node
            btn.appendChild(t);
            unDiv.appendChild(btn);
            unT.appendChild(unDiv);
        }else{
            document.getElementById('DivErreur').style.display = 'block';
        }
    }
    if( argu === 2 ){
        let estPresent = document.getElementById("DivSucces");
        if( estPresent == null){
            let unDiv = document.createElement("div");
            unDiv.setAttribute("id", "DivSucces");////DivSucces   DivInfo
            unDiv.innerHTML = texto;
            let btn = document.createElement("BUTTON");
            let t = document.createTextNode("CLICK Success");       // Create a text node
            btn.appendChild(t);
            unDiv.appendChild(btn);
            unT.appendChild(unDiv);
        }else{
            document.getElementById('DivSucces').style.display = 'block';
        }
    }
    if( argu === 3 ){
        debugger;
        let estPresent = document.getElementById("DivInfo");
        if( estPresent == null){
            let unDiv = document.createElement("div");
            unDiv.setAttribute("id", "DivInfo");////DivSucces   DivInfo
            unDiv.innerHTML = texto;
            let btn = document.createElement("BUTTON");
            let t = document.createTextNode("CLICK Info");       // Create a text node
            btn.appendChild(t);
            unDiv.appendChild(btn);
            unT.appendChild(unDiv);
        }else{
            document.getElementById('DivInfo').style.display = 'block';
        }
    }
    gtimeOut = setTimeout(function() { interval() }, 3000 );
}

function interval() {

    let estPresent = document.getElementById("DivErreur");
    if( estPresent != null) {
        document.getElementById('DivErreur').style.display = 'none';
    }
    estPresent = document.getElementById("DivSucces");
    if( estPresent != null) {
        document.getElementById('DivSucces').style.display = 'none';
    }
    estPresent = document.getElementById("DivInfo");
    if( estPresent != null) {
        document.getElementById('DivInfo').style.display = 'none';
    }
    clearTimeout(gtimeOut);

}
/* export default function hello( arg ){ */