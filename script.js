const input = document.getElementById("numero");
    const resultado = document.getElementById("resultado");

    input.addEventListener("input", function () {
      const valor = input.value;
      resultado.innerText = "";

      if (isNaN(valor)) {
        alert("Por favor, insira um número entre 1 e 9.");
      }

      for (let i = 1; i <= 10; i++) {
        resultado.innerText += `${valor} x ${i} = ${valor * i}\n`;
      }
    });

 //   ex2

 const inputNome = document.getElementById('nome');
 const lista = document.getElementById('lista');
 
 inputNome.addEventListener('input', () => {
   const texto = inputNome.value.toLowerCase();
   const itens = lista.querySelectorAll('li')
 
   itens.forEach(item => {
     const nome = item.textContent.toLowerCase();
     if (nome.includes(texto)) {
       item.style.fontWeight = "bold";
     } else {
       item.style.fontWeight = "normal";
     } 
   });
});