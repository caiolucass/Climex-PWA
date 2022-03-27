window.addEventListener('load', () => {
  const cidades = JSON.parse(localStorage.getItem("cidades")) || {};

  const selecionada = localStorage.getItem('cidade-selecionada');
  const cidadeConfig = cidades[selecionada]
  const data = new Date().toLocaleDateString('pt-br', { weekday: 'long' });

  // data.array.forEach(element => {
  //   cidades[cidade]
  // });
  document.getElementById('nome-cidade').innerHTML =  selecionada;
  const listElement = document.querySelector("ul");
})