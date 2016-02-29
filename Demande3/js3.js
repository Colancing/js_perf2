/**
 * Created by Emmanuelle on 10/01/2016.
 */
(function () {
window.addEventListener("load", function () {


    var go = document.getElementById("go");
    var close = document.getElementById("close");
    var result = document.getElementById("result");
    var select;

//Création des nouveaux éléments
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
        var answer = document.getElementById('answer');
        answer.innerHTML = "Vous pouvez choisir une note dans le menu déroulant";
    }

    function gotophp(note) {
        if (select) {
            select.removeEventListener("change", modify, false);
        }
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
                    select = document.getElementById('select');
                    select.addEventListener("change", modify, false);
                } else {
                    alert('error code :' + xml.status + ':' + xml.statusText)
                }
            }
        });
        xml.open("POST", 'D3.php', true);
        xml.setRequestHeader("content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
        xml.send("note=" + note);
    }

    function modify() {
        var note = select.value;
        gotophp(note);
    }

    go.addEventListener('click', showform, false);
    close.addEventListener('click', reset, false);

}); //s'assure que la page est chargée
})();//fin de la fonction anonyme