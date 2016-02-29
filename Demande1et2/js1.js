/**
 * Created by Emmanuelle on 10/01/2016.
 */
(function () {
window.addEventListener("load", function () {


    var notes = ["Sélectionnez une note", "do", "ré", "mi", "fa", "sol", "la", "si"],
        go = document.getElementById("go");

//Création des nouveaux éléments
    var titre = document.createElement('h1');
    titre.innerHTML = "Ma note de musique en américain";

    var form = document.createElement('form');
    form.id = "form_notes";
    form.action = "D1.php";
    var select = document.createElement('select');
    select.size = "1";
    select.className = "list";

    var div = document.createElement('div');
    div.id = "answer";


//Insertion des nouveaux éléments
    document.body.appendChild(div);
    form.appendChild(select);

//remplissage des options du selectquand on clique sur .go
    function addSelects() {
        go.insertBefore(titre, go.firstChild);
        document.body.appendChild(form);

        //Dans la consigne il est demandé une boucle foreach mais elle n'existe pas en Javascript.
        //La boucle forEach existe mais j'ai choisi d'utiliser la boucle for que je trouve plus adaptée dans ce cas)
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

    function translate() {
        var note = select.value;
        var xml;

        if (window.XMLHttpRequest) {
            xml = new XMLHttpRequest();
        } else {
            xml = new ActiveXObject("Microsoft.XMLHTTP");
        }

        xml.addEventListener('readystatechange', function () {
            if (xml.readyState == 4) {
                if (xml.status === 200 || xml.status === 0) {
                    var answer = document.getElementById('answer');
                    answer.innerHTML = xml.responseText ;

                } else {
                    alert('error code :' + xml.status + ':' + xml.statusText)
                }
            }
        });
        xml.open("POST", form.action, true);
        xml.setRequestHeader("content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
        xml.send("note=" + note);

        document.getElementById("default").selected = true;
    }

    go.addEventListener('click', addSelects, false);
    select.addEventListener("change", translate, false);
});//s'assure que la page est chargée
})();//fin de la fonction anonyme
