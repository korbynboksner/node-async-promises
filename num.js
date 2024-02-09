$("#favSubmit").on("click", function(e) {
    e.preventDefault();
    let inputValue = $("#favnum").val()
    async function getfavnum(value){

        try {
            let data = await $.getJSON(`http://numbersapi.com/${value}?json`)
            console.log("API Response:", data);
            $("#location").append(`<p>${data.text}</p>`);
        } catch (err) {
            console.log(err)
    }
}
    getfavnum(inputValue)
})


$("#rangeSubmit").on("click", async function(e) {
    e.preventDefault();
    let firstValue = $("#firstnum").val()
    let secondValue = $("#secondnum").val()
    

    try {
        let response = await $.getJSON(`http://numbersapi.com/${firstValue}..${secondValue}?json`)

        for(let fact in response){
                //console.log(response[fact])
                $("#location").append(`<p>${response[fact]}</p>`);    
            }
            
            
    } catch(err){
        console.log(err)
    }
        
})


$("#fav4Submit").on("click", async function(e) {
    e.preventDefault();
    let inputValue = $("#fav4num").val()

    let fact1 = await $.getJSON(`http://numbersapi.com/${inputValue}?json`);
    let fact2 = await $.getJSON(`http://numbersapi.com/${inputValue}?json`);
    let fact3 = await $.getJSON(`http://numbersapi.com/${inputValue}?json`);
    let fact4 = await $.getJSON(`http://numbersapi.com/${inputValue}?json`);

    $("#location").append(`<p>${fact1.text}</p>`);
    $("#location").append(`<p>${fact2.text}</p>`);
    $("#location").append(`<p>${fact3.text}</p>`);
    $("#location").append(`<p>${fact4.text}</p>`);
})