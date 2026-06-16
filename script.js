let series = JSON.parse(localStorage.getItem("series")) || [];

function salvar() {
  localStorage.setItem("series", JSON.stringify(series));
}

function adicionarSerie() {
  const nome = document.getElementById("serieNome").value;
  const episodio = document.getElementById("episodio").value;

  if (!nome || !episodio) {
    alert("Preencha todos os campos!");
    return;
  }

  series.push({
    nome,
    episodio
  });

  salvar();
  renderizar();

  document.getElementById("serieNome").value = "";
  document.getElementById("episodio").value = "";
}

function removerSerie(index) {
  series.splice(index, 1);
  salvar();
  renderizar();
}

function renderizar() {
  const lista = document.getElementById("listaSeries");
  lista.innerHTML = "";

  series.forEach((serie, index) => {
    lista.innerHTML += `
      <div class="card">
        <h3>${serie.nome}</h3>
        <p>Último episódio assistido: ${serie.episodio}</p>
        <button onclick="removerSerie(${index})">Excluir</button>
      </div>
    `;
  });
}

renderizar();
