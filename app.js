const items = document.querySelectorAll(".dropdown-item");
let diaSelecionado = null;
const dropdownButton = document.querySelector(".dropdown-toggle"); // Assuming this is the dropdown button
const diaDaSemana = {
  Segunda: [],
  Terça: [],
  Quarta: [],
  Quinta: [],
  Sexta: [],
  Sábado: [],
  Domingo: []
};

// Store the original button
const originalPlusButton = document.getElementById("btn1").cloneNode(true);

items.forEach((item) => {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    diaSelecionado = this.getAttribute("data-value");
    dropdownButton.textContent = diaSelecionado;

    // Check if the selected day has items
    const hasItems = diaDaSemana[diaSelecionado].length > 0;
    const currentButton = document.querySelector("#btn1, .fa-check");

    if (currentButton) {
      if (hasItems) {
        // Show checkmark if the day has items
        let addedIcon = document.createElement("i");
        addedIcon.className = "fa fa-check text-success";
        addedIcon.setAttribute("aria-hidden", "true");
        currentButton.replaceWith(addedIcon);
      } else {
        // Restore original plus button if no items
        currentButton.replaceWith(originalPlusButton.cloneNode(true));
      }
    }
  });
});

const adicionado = () => {
  if (!diaSelecionado) {
    alert("Por favor, selecione um dia da semana antes de adicionar.");
    return;
  }

  const conteudo = "Musculação";
  diaDaSemana[diaSelecionado].push(conteudo);
  console.log("Dia selecionado:", diaSelecionado);
  console.log("Dia da Semana:", diaDaSemana);

  let plusButton = document.getElementById("btn1");

  let addedIcon = document.createElement("i");
  addedIcon.className = "fa fa-check text-success";
  addedIcon.setAttribute("aria-hidden", "true");

  plusButton.replaceWith(addedIcon);
};