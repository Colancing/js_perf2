/**
 * Created by Emmanuelle on 10/01/2016.
 */
window.addEventListener("load", function () {


    var notes = ["Sélectionnez une note", "do", "ré", "mi", "fa", "sol", "la", "si"],
        go = document.getElementById("go");

//Création des nouveaux éléments
    var titre = document.createElement('h1');
    titre.innerHTML = "Ma note de musique en américain";

    var form = document.createElement('form');
    form.id = "form_notes";
    var select = document.createElement('select');
    select.size = "1";
    select.className = "list";

    var div = document.createElement('div');
    div.id = "answer";


//Insertion des nouveaux éléments
    document.body.appendChild(div);
    form.appendChild(select);

//remplissage des options du select
    function addSelects() {
        go.insertBefore(titre, go.lastChild);
        document.body.appendChild(form);

        for (var id = 0; id < notes.length; id++) {
            var option = document.createElement('option');
            option.label = notes[id];

            if (id == 0) {
                option.value = "default";
                option.id = "default";
                option.disabled = true;
                option.selected = true;
            }
            else {
                option.value = notes[id];
            }
            select.appendChild(option);

        }
        go.removeEventListener('click', addSelects, false);
    }

    go.addEventListener('click', addSelects, false);
//
    function translate() {
        var note = select.value;
        var xml;

        if (window.XMLHttpRequest) {
            xml = new XMLHttpRequest();
        } else {
            xml = new ActiveXObject("Microsoft.XMLHTTP");
        }

        xml.addEventListener('readystatechange', function (event) {
            if (xml.readyState == 4) {
                if (xml.status === 200 || xml.status === 0) {
                    var answer = document.getElementById('answer');
                    answer.innerHTML = xml.responseText ;

                } else {
                    alert('error code :' + xml.status + ':' + xml.statusText)
                }
            }
        });
        xml.open("POST", 'D1.php', true);
        xml.setRequestHeader("content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
        xml.send("note=" + note);
//        var selection = notes[newselect.value].fr;
//        var translation = notes[newselect.value].am;
//
        document.getElementById("default").selected = true;
    }

//
    select.addEventListener("change", translate, false);
})
; //s'assure que la page est chargée
