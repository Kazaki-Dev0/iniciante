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

    <!--ex2-->

    let filtro = document.getElementById("filtro");
    const lista = document.getElementById("lista");
    const nomesOriginais = Array.from(lista.children).map(li => li.innerText);

    filtro.addEventListener("filtro", function () {
      const termo = filtro.value();

      lista.innerHTML = "";

      nomesOriginais.forEach(nome => {
        const nomeLower = nome.toLowerCase();
        const posicao = nomeLower.indexOf(termo);

        const li = document.createElement("li");

        if (termo && posicao !== -1) {
          // separa a parte a ser destacada
          const inicio = nome.substring(0, posicao);
          const destaque = nome.substring(posicao, posicao + termo.length);
          const fim = nome.substring(posicao + termo.length);

          li.innerHTML = `${inicio}<strong>${destaque}</strong>${fim}`;
        } else {
          li.innerText = nome;
        }

        lista.appendChild(li);
      });
    });