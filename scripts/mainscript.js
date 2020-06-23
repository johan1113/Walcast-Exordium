window.addEventListener('load', function () {
    //begin button listener
    startButton();
});

function startButton(){
    //get tag button
    var btn = document.querySelector('.submit-button');
    //verify that btn is not empty
    if(btn != null){
        btn.addEventListener('click',function(){
            //prevent to refresh the web page
            this.preventDefault;

            var txtInput = document.querySelector('.input-ticket');
            var inputValue = txtInput.value;
            console.log(inputValue);
            if(inputValue != ''){
                document.querySelector('section').innerHTML = `<h1>¿Seguro que seleccionaste el mejor Destino Turístico?</h1>`;
                document.querySelector('section').innerHTML += `<h3>Estás a punto de averiguarlo...</h3>`;
            }
        });
    }
}