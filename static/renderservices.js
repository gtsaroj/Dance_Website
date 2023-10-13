const service1 = document.querySelector("#missionSection");

if (service1) {
    function renderServices() {
        services.forEach((_service) => {
            service1.innerHTML += `
            <div class="services">
        <div class="image">
            <img src="" alt="">
        </div>
        <div class="description">
            <h1>Bollywood</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, officiis architecto doloribus
                commodi sint incidunt aut quia nemo officia cumque deserunt voluptas atque debitis!</p>
        </div>
            
        `
        })
        renderServices();
    }

}
else {
    console.log("Does not work");
}


