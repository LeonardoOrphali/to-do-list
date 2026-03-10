

document.getElementById("create-item").addEventListener("click", clickCi);
function clickCi() {

   // Modificações no body
   document.body.style.overflow = "hidden";

   const main = document.querySelector("main");
   let ans = document.getElementById("ans");
   
   let quest = document.createElement("div");
   quest.id = "list";
    main.appendChild(quest);

   let blur = document.createElement("div");
   blur.classList.add("blur");
    main.appendChild(blur);

   // Formulário
   quest.innerHTML = `
      <span id="list-close-wrapper">
         <button id="list-close"></button>
      </span>
      <form id="form">
         <span id="ipt-title-wrapper">
            <label id="ipt-title-label" for="ipt-title">Titulo</label>
            <input id="ipt-title" type="text" required>
         </span>
         <span id="ipt-text-wrapper">
            <label id="ipt-text-label" for="ipt-text">
               Anotação
               <textarea id="ipt-text" cols="30" rows="10" required></textarea>
            </label>
         </span>
         <span id="ipt-date-wrapper">
            <label id="ipt-date-label" for="ipt-date">Data de conclusão</label>
            <input id="ipt-date" type="date" required>
         </span>
         <span id="ipt-radio-wrapper">
            <p id="ipt-radio-title">Prioridade</p>
            <div id="ipt-radio-container">
               <span class="ipt-radio-section">
                  <label id="ipt-radio-1-label" for="ipt-radio-1">Alta</label>
                  <input id="ipt-radio-1" name="pri" value="alta" type="radio" required>
               </span>
               <span class="ipt-radio-section">
                  <label id="ipt-radio-2-label" for="ipt-radio-2">Média</label>
                  <input id="ipt-radio-2" name="pri" value="média" type="radio" required>
               </span>
               <span class="ipt-radio-section">
                  <label id="ipt-radio-3-label" for="ipt-radio-3">Baixa</label>
                  <input id="ipt-radio-3" name="pri" value="baixa" type="radio" required>
               </span>
            </div>
         </span>
      </form>
      <span id="cl-se-btn-wrapper">
         <input id="clean" class="btn" type="reset" value="Limpar" form="form">
         <button id="send" class="btn" type="submit" form="form">Enviar</button>
      </span>
   `
   const listClose = document.getElementById("list-close");
   const form = document.getElementById("form");
   const iptTitle = document.getElementById("ipt-title");
   const iptText = document.getElementById("ipt-text");
   const iptDate = document.getElementById("ipt-date");
   iptDate.min = new Date().toISOString().split("T")[0];

   // Função fechar
   function fecharModal(quest, blur) {
      document.body.style.overflow = "auto";
      quest.remove();
      blur.remove();
   };
   listClose.addEventListener("click", () => fecharModal(quest, blur));

   // Função enviar
   form.addEventListener("submit", (e) => {
      e.preventDefault();

      let cardObj = {
         titulo: iptTitle.value,
         texto: iptText.value,
         data: iptDate.value, 
         pri: document.querySelector('input[name="pri"]:checked').value,
      };

      const card = document.createElement("div");
      card.classList.add("card");
       ans.appendChild(card);

      card.innerHTML = `
         <span id="card-top-wrapper">
            <h1 id="card-title">${cardObj.titulo}</h1>
            <p id="card-text">${cardObj.texto}</p>
         </span>

         <span id="card-bottom-wrapper">
            <p id="card-pri">${cardObj.pri}</p>
            <p id="card-date">${cardObj.data.split('-').reverse().join('/')}</p>
         </span>
      `

      const cardPri = card.querySelector("#card-pri");
      if(cardObj.pri === "alta") {
         cardPri.classList.add("card-pri-red");
      } else if (cardObj.pri === "média") {
         cardPri.classList.add("card-pri-yellow");
      } else {
         cardPri.classList.add("card-pri-green");
      }; 

      fecharModal(quest, blur);
   }); 
};