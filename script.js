document.querySelector('.busca').addEventListener('submit', (event) => {
    event.preventDefault(); // previnir evento padrão (mantem as informações no formulário ao submeter)

    const input = document.querySelector('#searchInput').value;
    
    if(input !== '') {
        showWarning('Carregando...')
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid={API key}`;

});

function showWarning(msg) {
    document.querySelector('.aviso').innerHTML = msg;
}

