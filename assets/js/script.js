$(document).ready(()=>{
    $("form").submit((e)=>{
        e.preventDefault();
        let valueInput = $('#heroInput').val();
    
        $.ajax({
            url : 'https://superheroapi.com/api/10227947704740792/'+ valueInput,
            success : (data) => {
                let imagen = data.image.url;
                let nombre = data.name;
                let conexion = data.connections['group-affiliation'];
                let publicado = data.biography.publisher;
                let trabajo = data.work.occupation;
                let aparicion = data.biography['first-appearance'];
                let altura = data.appearance.height;
                let peso = data.appearance.weight;
                let alianza = data.biography.aliases;


            $('#heroInfo').html('');
            }
    
        })
    });

});