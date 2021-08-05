document.querySelector('.busca').addEventListener('submit', async (event) => {
    event.preventDefault(); // previnir evento padrão (mantem as informações no formulário ao submeter)

    const input = document.querySelector('#searchInput').value;
    
    if(input !== '') {
        showWarning('Carregando...');


        const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=0a84118ed59203ff29a1862eeb400753&units=metric&lang=pt_br`;

        let results = await fetch(url);
        let json = await results.json();

        if(json.cod === 200) {
            showInfo({
                name: json.name,
                country: json.sys.country,
                temp: json.main.temp,
                temIcon: json.weather[0].icon,
                windSpeed: json.wind.speed,
                windAngle: json.wind.angle
            });
        } else {
            showWarning('Não encontramos esta localização...')
        };
    };

});

function showInfo(json) {
    showWarning('');

    document.querySelector('.resultado').style.display = 'block';
    document.querySelector('.titulo').innerHTML = `${json.name}, ${json.country}`;
    document.querySelector('.tempInfo').innerHTML = `${json.temp} <sup>ºC</sup>`;
}

function showWarning(msg) {
    document.querySelector('.aviso').innerHTML = msg;
}

