function testarPrimo(num){
num = document.getElementById("inputNum").value

let primo = true



for(let tester = 2; tester < num; tester++){

    if(num % tester === 0 ){

        primo = false
        break

    }

}

    if(primo==true){

    let elemento = document.getElementById("output")
    elemento.innerHTML = ""
    elemento.innerHTML = `O valor ${num} é um número primo!`

    }else{

    let elemento = document.getElementById("output")

    elemento.innerHTML = ""
    elemento.innerHTML = `O valor ${num} não é um número primo :(`
    

    }


}