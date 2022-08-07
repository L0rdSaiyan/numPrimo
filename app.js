

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

    const local = document.getElementById("container")
    const elemento = document.createElement("h3")
    const conteudo = document.createTextNode(`O número ${num} é um número primo!`)
        
    elemento.appendChild(conteudo)
    local.appendChild(elemento)


    }else{

        
        const local = document.getElementById("container")
        const elemento = document.createElement("h3")
        const conteudo = document.createTextNode(`O número ${num} não é um número primo :(`)
        elemento.appendChild(conteudo)
        local.appendChild(elemento)

    }


}