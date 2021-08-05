document.querySelector('.busca').addEventListener('submit', async (event) => {
    event.preventDefault(); // previnir evento padrão (mantem as informações no formulário ao submeter)

    const input = document.querySelector('#searchInput').value;
    
    if(input !== '') {
        showWarning('Carregando...');


        const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=0a84118ed59203ff29a1862eeb400753&units=metric&lang=pt_br`;

        let results = await fetch(url);
        let json = await results.json();

        if(json.cod === 200) {

        } else {
            showWarning('Não encontramos esta localização...')
        }
    };

    
});

function showWarning(msg) {
    document.querySelector('.aviso').innerHTML = msg;
}

