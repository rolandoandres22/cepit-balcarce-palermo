//cree una variable con el link de la api seccion episode
const RICKyMORTY_API="https://rickandmortyapi.com/api/episode"; 

        fetch(RICKyMORTY_API)
            .then(response => response.json())//combierto el resultado a .json
            .then(data => {
                let html = ''; //crea la variable html para meterla en el div id=episode
                data.results.forEach(episode => {//recorre con foreach todos los episodios
                   //y los mete adentro de html
                    html += `
                    <div class="col">
                        <div class="card episode" >
                            <div class="card-body">
                                <h5 class="card-title"><strong>${episode.episode}:</strong> ${episode.name}</h5>
                                <p class="card-text"><small>Emitido: ${episode.air_date}</small></p>
                            </div>
                        </div>
                    </div>
                        
                    `;
                });
                //meto en el div del index.html que tiene el id=episode el html que hice
                document.getElementById('episodes').innerHTML = html;
            });