document.querySelector('.busca').addEventListener('submit', async (event) => {
    event.preventDefault(); // previnir evento padrão (mantem as informações no formulário ao submeter)

    const input = document.querySelector('#searchInput').value;
    
    if(input !== '') {
        showWarning('Carregando...');


        const url = `api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=${process.env.APP_WEATHER_API_KEY}&units=metric&lang=pt_br`;

        const results = await fetch(url);
        const json = await results.json();
    };

    
});

function showWarning(msg) {
    document.querySelector('.aviso').innerHTML = msg;
}

