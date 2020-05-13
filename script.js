var inputLabel = document.getElementById('inputLabel');

function insert(num) {

    if (inputLabel.innerHTML == '0') {
        inputLabel.innerHTML = num;
    } else {
        inputLabel.innerHTML += num;
    }
}

function operator(simbol) {
    inputLabel.innerHTML += simbol
}

function equal() {
    inputLabel.innerHTML = eval(inputLabel.innerHTML);
}

function clearAll() {
    inputLabel.innerHTML = '0';
}

function backspace(simbol) {
    let str = inputLabel.innerHTML;
    str = str.slice(0, str.length - 1);

    inputLabel.innerHTML = str;

    if (inputLabel.innerHTML == '') {
        inputLabel.innerHTML = '0';
    }
}