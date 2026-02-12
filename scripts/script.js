document.getElementById("create-item").addEventListener("click", clickCi);


function clickCi() {
    document.body.style.overflow = "hidden";

    const main = document.querySelector("main");
       let ans = document.getElementById("ans");

    const quest = document.createElement("div");
    quest.id = "list";
     main.appendChild(quest);

    const blur = document.createElement("div");
    blur.classList.add("blur");
     main.appendChild(blur);

        const listCloseWrapper = document.createElement("span");
        listCloseWrapper.id = "list-close-wrapper";
         quest.appendChild(listCloseWrapper);

            const listClose = document.createElement("button");
            listClose.id = "list-close";
             listCloseWrapper.appendChild(listClose);

        document.getElementById("list-close").addEventListener("click", clickClose);
        function clickClose() {
            document.body.style.overflow = "auto";
            quest.remove();
            blur.remove();
        };
    
    const form = document.createElement("form");
    form.id = "form";
     quest.appendChild(form);

            const iptTitleWrapper = document.createElement("span");
            iptTitleWrapper.id = "ipt-title-wrapper";
             form.appendChild(iptTitleWrapper);

                const iptTitleLabel = document.createElement("label");
                iptTitleLabel.id = "ipt-title-label";
                iptTitleLabel.textContent = "Titulo";
                iptTitleLabel.htmlFor = "ipt-title";
                 iptTitleWrapper.appendChild(iptTitleLabel);

                const iptTitle = document.createElement("input");
                iptTitle.id = "ipt-title";
                iptTitle.type = "text";
                iptTitle.required = true;
                 iptTitleWrapper.appendChild(iptTitle);

            const iptTextWrapper = document.createElement("span");
            iptTextWrapper.id = "ipt-text-wrapper";
             form.appendChild(iptTextWrapper);

                const iptTextLabel = document.createElement("label");
                iptTextLabel.id = "ipt-text-label";
                iptTextLabel.textContent = "Anotação";
                iptTextLabel.htmlFor = "ipt-text";
                 iptTextWrapper.appendChild(iptTextLabel);
                
                const iptText = document.createElement("textarea");
                iptText.cols = "30"; iptText.rows = "10";
                iptText.id = "ipt-text";
                iptText.required = true;
                 iptTextLabel.appendChild(iptText);

            const iptDateWrapper = document.createElement("span");
            iptDateWrapper.id = "ipt-date-wrapper";
             form.appendChild(iptDateWrapper);

                const iptDateLabel = document.createElement("label");
                iptDateLabel.id = "ipt-date-label";
                iptDateLabel.textContent = "Data de conclusão";
                iptDateLabel.htmlFor = "ipt-date";
                 iptDateWrapper.appendChild(iptDateLabel);

                const iptDate = document.createElement("input");
                iptDate.id = "ipt-date";
                iptDate.type = "date";
                iptDate.required = true;
                iptDate.min = new Date().toISOString().split('T')[0];
                 iptDateWrapper.appendChild(iptDate);
                
            const iptRadioWrapper = document.createElement("span");
            iptRadioWrapper.id = "ipt-radio-wrapper";
             form.appendChild(iptRadioWrapper);
            
                const iptRadioTitle = document.createElement("p");
                iptRadioTitle.id = "ipt-radio-title";
                iptRadioTitle.textContent = "Prioridade";
                 iptRadioWrapper.appendChild(iptRadioTitle);

                const iptRadioContainer = document.createElement("div");
                iptRadioContainer.id = "ipt-radio-container";
                 iptRadioWrapper.appendChild(iptRadioContainer);

                    const iptRadioSection = document.createElement("span");
                    iptRadioSection.classList.add("ipt-radio-section");
                     iptRadioContainer.appendChild(iptRadioSection);

                        const iptRadio1Label = document.createElement("label");
                        iptRadio1Label.id = "ipt-radio-1-label";
                        iptRadio1Label.htmlFor = "ipt-radio-1";
                        iptRadio1Label.textContent = "Alta";
                         iptRadioSection.appendChild(iptRadio1Label);

                        const iptRadio1 = document.createElement("input");
                        iptRadio1.id = "ipt-radio-1";
                        iptRadio1.name = "pri";
                        iptRadio1.value = "alta"
                        iptRadio1.type = "radio";
                        iptRadio1.required = true;
                         iptRadioSection.appendChild(iptRadio1);

                    const iptRadioSection2 = document.createElement("span");
                    iptRadioSection2.classList.add("ipt-radio-section");
                     iptRadioContainer.appendChild(iptRadioSection2);

                        const iptRadio2Label = document.createElement("label");
                        iptRadio2Label.id = "ipt-radio-2-label";
                        iptRadio2Label.htmlFor = "ipt-radio-2";
                        iptRadio2Label.textContent = "Média";
                         iptRadioSection2.appendChild(iptRadio2Label);

                        const iptRadio2 = document.createElement("input");
                        iptRadio2.id = "ipt-radio-2";
                        iptRadio2.name = "pri";
                        iptRadio2.value = "média"
                        iptRadio2.type = "radio";
                        iptRadio2.required = true;
                         iptRadioSection2.appendChild(iptRadio2);

                    const iptRadioSection3 = document.createElement("span");
                    iptRadioSection3.classList.add("ipt-radio-section");
                     iptRadioContainer.appendChild(iptRadioSection3);
                    
                        const iptRadio3Label = document.createElement("label");
                        iptRadio3Label.id = "ipt-radio-3-label";
                        iptRadio3Label.htmlFor = "ipt-radio-3";
                        iptRadio3Label.textContent = "Baixa";
                         iptRadioSection3.appendChild(iptRadio3Label);

                        const iptRadio3 = document.createElement("input");
                        iptRadio3.id = "ipt-radio-3";
                        iptRadio3.name = "pri";
                        iptRadio3.value = "baixa"
                        iptRadio3.type = "radio";
                        iptRadio3.required = true;
                         iptRadioSection3.appendChild(iptRadio3);

    const clSeBtnWrapper = document.createElement("span");
    clSeBtnWrapper.id = "cl-se-btn-wrapper";
     list.appendChild(clSeBtnWrapper);

        const clean = document.createElement("input");
        clean.id = "clean";
        clean.classList.add("btn");
        clean.setAttribute("form", "form")
        clean.value = "Limpar";
        clean.type = "reset";
         clSeBtnWrapper.appendChild(clean);

        const send = document.createElement("button");
        send.id = "send";
        send.type = "submit";
        send.setAttribute("form", "form");
        send.classList.add("btn");
        send.textContent = "Enviar";
         clSeBtnWrapper.appendChild(send);


        form.addEventListener("submit", (e) => {
            e.preventDefault();

            const cardObj = {
               titulo: iptTitle.value,
               texto: iptText.value,
               data: iptDate.value, 
               pri: document.querySelector('input[name="pri"]:checked').value,
            };

            let card = document.createElement("div");
            card.classList.add("card");
             ans.appendChild(card);

               let cardTopBox = document.createElement("span");
               cardTopBox.id = "card-top-wrapper";
                card.appendChild(cardTopBox);

               let cardTitle = document.createElement("h1");
               cardTitle.textContent = cardObj.titulo;
               cardTitle.id = "card-title";
                cardTopBox.appendChild(cardTitle)

               let cardText = document.createElement("p");
               cardText.textContent = cardObj.texto;
               cardText.id = "card-text";
                cardTopBox.appendChild(cardText);

               let cardBottomBox = document.createElement("span");
               cardBottomBox.id = "card-bottom-wrapper";
                card.appendChild(cardBottomBox);
               
               let cardPri = document.createElement("p");
               cardPri.textContent = cardObj.pri;
               cardPri.id = "card-pri";
                cardBottomBox.appendChild(cardPri); 

               let cardDate = document.createElement("p");
               cardDate.textContent = cardObj.data.split('-').reverse().join('/');
               cardDate.id = "card-date";
                cardBottomBox.appendChild(cardDate);

               if(cardObj.pri === "alta") {
                  cardPri.classList.add("card-pri-red");
               } else if (cardObj.pri === "média") {
                  cardPri.classList.add("card-pri-yellow");
               } else {
                  cardPri.classList.add("card-pri-green");
               }; 
            quest.remove();
            blur.remove();
        });
};

