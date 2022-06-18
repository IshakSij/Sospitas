let button = document.getElementById('btn');

button.addEventListener('click', () =>{
    const groesse = parseInt(document.getElementById('groesse').value);
    const gewicht = parseInt(document.getElementById('gewicht').value);
    const ergebnis = document.getElementById('output');
    let groesse_status = false, gewicht_status=false;

    if (groesse === '' || isNaN(groesse) || (groesse <= 0)){
        document.getElementById('groesse_error').innerHTML = 'Bitte Größe eingeben';
    }else{
        document.getElementById('groesse_error').innerHTML = '';
        groesse_status = true;
    }

    if (gewicht === '' || isNaN(gewicht) || (gewicht <= 0)) {
        document.getElementById('gewicht_error').innerHTML = 'Bitte Gewicht eingeben';
    }else{
        document.getElementById('gewicht_error').innerHTML = '';
        gewicht_status = true
    }

    if(groesse_status && gewicht_status){
        const bmi = (gewicht / ((groesse*groesse)/10000)).toFixed(2)

        if(bmi < 18.6){
            ergebnis.innerHTML = 'Untergewicht : ' + bmi;
        }else if(bmi >= 18.6 && bmi < 24.9){
            ergebnis.innerHTML = 'Normalgewicht : ' + bmi;
        }else{
            ergebnis.innerHTML = 'Übergewicht : ' + bmi;
        }
    }else{
        alert('Bitte geben Sie ihre Angaben korrekt an');
        ergebnis.innerHTML = '';
    }

    });