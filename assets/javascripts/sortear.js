var numeroSorteado = document.querySelector("div.box h1")
const botaoSortear = document.querySelector("div.box button")
var roleta = []
const imagem = document.getElementById("imagem");

for(i = 0; i <= 25; i++){
    roleta.push(i)
}

botaoSortear.addEventListener("click", () => {
    let result = roleta[Math.floor(Math.random() * roleta.length)];
    if (result == 1) {
        imagem.src = "assets/img/avestruz1.png"
    } else if (result == 2) {
        imagem.src = "assets/img/aguia2.png"
    } else if (result == 3) {
        imagem.src = "assets/img/burro3.png"
    } else if (result == 4) {
        imagem.src = "assets/img/borboleta4.png"
    } else if (result == 5) {
        imagem.src = "assets/img/cachorro5.png"
    } else if (result == 6) {
        imagem.src = "assets/img/cabra6.png"
    } else if (result == 7) {
        imagem.src = "assets/img/carneiro7.png"
    } else if (result == 8) {
        imagem.src = "assets/img/camelo8.png"
    } else if (result == 9) {
        imagem.src = "assets/img/cobra9.png"
    } else if (result == 10) {
        imagem.src = "assets/img/coelho10.png"
    } else if (result == 11) {
        imagem.src = "assets/img/cavalo11.png"
    } else if (result == 12) {
        imagem.src = "assets/img/elefante12.png"
    } else if (result == 13) {
        imagem.src = "assets/img/galo13.png"
    } else if (result == 14) {
        imagem.src = "assets/img/gato14.jpg"
    } else if (result == 15) {
        imagem.src = "assets/img/jacare15.png"
    } else if (result == 16) {
        imagem.src = "assets/img/leao16.png"
    } else if (result == 17) {
        imagem.src = "assets/img/macaco17.png"
    } else if (result == 18) {
        imagem.src = "assets/img/porco18.png"
    } else if (result == 19) {
        imagem.src = "assets/img/pavao19.png"
    } else if (result == 20) {
        imagem.src = "assets/img/peru20.png"
    } else if (result == 21) {
        imagem.src = "assets/img/touro21.png"
    } else if (result == 22) {
        imagem.src = "assets/img/tigre22.png"
    } else if (result == 23) {
        imagem.src = "assets/img/urso23.png"
    } else if (result == 24) {
        imagem.src = "assets/img/veado24.png"
    } else if (result == 25) {
        imagem.src = "assets/img/vaca25.png"
    }
    if (result > 0) {
        numeroSorteado.innerHTML = "O número sorteado é " + result;
    }
})