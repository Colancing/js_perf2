/**
 * Created by Emmanuelle on 10/01/2016.
 */
window.addEventListener("load", function () {


    var go = document.getElementById("go");
    var close = document.getElementById("close");
    var result = document.getElementById("result");
    var select = document.getElementById("select");
//Création des nouveaux éléments
    console.log(select);
    function showform() {
        if (document.getElementById('form') == null) {
            var note = "Choix";
            gotophp(note);
        }
        else {
            result.style.display = "block";
        }
        go.style.display = "none";
        close.style.display = "block";
    }

    function reset() {
        result.style.display = "none";
        go.style.display = "block";
        close.style.display = "none";
    }

    function gotophp(note) {
        var xml;

        if (window.XMLHttpRequest) {
            xml = new XMLHttpRequest();
        } else {
            xml = new ActiveXObject("Microsoft.XMLHTTP");
        }

        xml.addEventListener('readystatechange', function () {
            if (xml.readyState == 4) {
                if (xml.status === 200 || xml.status === 0) {
                    result.innerHTML = xml.responseText;
                } else {
                    alert('error code :' + xml.status + ':' + xml.statusText)
                }
            }
        });
        xml.open("POST", 'D3.php', true);
        xml.setRequestHeader("content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
        xml.send("note=" + note);
    }


    if (select) {
        var note = select.value;
        console.log("ecoute ok : " + note);
        select.addEventListener("change", gotophp(note), false);
    }

    go.addEventListener('click', showform, false);
    close.addEventListener('click', reset, false);

})
; //s'assure que la page est chargée
