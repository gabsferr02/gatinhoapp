document.getElementById("btn-gato").addEventListener("click", async () => {
  const img = document.getElementById("imagem-gato");

  try {
    const res = await fetch("https://api.thecatapi.com/v1/images/search");
    const data = await res.json();
    img.src = data[0].url;
  } catch (erro) {
    console.error("Erro ao buscar imagem de gato:", erro);
    img.alt = "Erro ao carregar imagem 😿";
  }
});
