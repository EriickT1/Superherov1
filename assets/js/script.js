$(document).ready(()=>{
    $("form").submit((e)=>{
        e.preventDefault();
        let input = $('#heroInput').val();
        console.log(input);
        if (!/^([1-9]|[1-9][0-9]|[1-6][0-9]{2}|7[0-2][0-9]|73[01])+$/.test(input) || input >731){
            alert("Ingresa un número entre 1 y  731 !");
        }else{
        $.ajax({
            url : `https://superheroapi.com/api.php/10227947704740792/${input}`,
            success : (data) => {
                let nombre = data.name;
                let publicador = data.biography.publisher;
                let aparicion = data.biography['first-appearance'];
                let conexiones = data.connections['group-affiliation'];
                let ocupacion = data.work.occupation;
                let altura = data.appearance.height;
                let peso = data.appearance.weight;
                let alianza = data.biography.aliases;
                let imagen = data.image.url;

            $('#infoContainer').html(`
            <h5 class="text-center">SuperHero Encontrado</h5>
            <div class="card mt-3" style="max-width: 540px;">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="${imagen}" class="img-fluid rounded-start" alt="${nombre}">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <p class="card-text fs-5">Nombre: ${nombre}</p><hr>
                  <p class="card-text"><Conexiones:</i> ${conexiones} </p><hr>
                  <p class="card-text"><i>Publicado por:</i> ${publicador}</p><hr>
                  <p class="card-text"><i>Ocupacion:</i> ${ocupacion}</p><hr>
                  <p class="card-text"><i>Primera Aparición:</i> ${aparicion}</p><hr>
                  <p class="card-text"><i>Altura:</i> ${altura}</p><hr>
                  <p class="card-text"><i>Peso:</i> ${peso}</p><hr>
                  <p class="card-text"><i>Alianzas:</i> ${alianza}</p>
                </div>
              </div>
            </div>
          </div>`);

          
            let stats = [];
            stats.push({
            label:"Inteligencia",
            y: data.powerstats.intelligence
            });
            stats.push({
            label:"Fuerza",
            y: data.powerstats.strength
            });
            stats.push({
            label:"Velocidad",
            y: data.powerstats.speed
            });
            stats.push({
                label:"Durabilidad",
                y: data.powerstats.durability
            });
            stats.push({
                label:"Poder",
                y: data.powerstats.power
            });
            stats.push({
                label:"Combate",
                y: data.powerstats.combat
            });
            var options = {
                title: {
                    text: `Estadisticas de poder para ${nombre}`
                },
                animationEnabled: true,
                data: [{
                    type: "pie",
                    startAngle: 40,
                    toolTipContent: "<b>{label}</b>: {y}%",
                    showInLegend: "true",
                    legendText: "{label}",
                    indexLabelFontSize: 16,
                    indexLabel: "{label} - {y}%",
                    dataPoints: stats
                }]
            };
            $("#chartContainer").CanvasJSChart(options);
            }
        });
    
    }
    });

});