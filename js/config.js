window.addEventListener('load', () =>{
    const select = document.getElementById('cidade-selecionada');
    const cidades = JSON.parse(localStorage.getItem("cidades")) || {};
    const selecionada = localStorage.getItem('cidade-selecionada');

    if(Object.keys(cidades).length){
        Object.keys(cidades).forEach((cidade) => {
           const option = document.createElement('option');
           option.setAttribute('value', cidade);

           if(cidade === selecionada){
               option.setAttribute('selected', true);
           }
           option.innerHTML = cidade;
           select.appendChild(option);
        });
    }

    window.saveConfig = (e )=> {
        e.preventDefault();
        console.log(e.target);
        
        const dia = e.target[0].value;
        const cidade = e.target[1].value
        const clima = e.target[2].value;
        const minimo = e.target[3].value;
        const maximo = e.target[4].value;

        const config = {
            dia: dia,
            clima: clima,
            const: clima,
            minimo: minimo,
            maximo: maximo
        };

        if(cidades[cidade]){
             //nao pode ter cidade na mesma data com o mesmo clima
            if(cidades[cidade].some((elemento) => elemento.dia === dia)) return;
             cidades[cidade].push(config)
        }
        else{
             cidades[cidade] = [config];
        }
        localStorage.setItem("cidades", JSON.stringify(cidades));
    };
    
    window.selectCity = () => {
          console.log(select);
          const cidade = select.value;
          console.log(cidade);

          if(cidade === select) return;
          localStorage.setItem('cidade-selecionada', cidade);
    }
});