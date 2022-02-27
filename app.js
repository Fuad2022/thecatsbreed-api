

/* lets prepare url for getting cats name */
const allCatsBreed = () => {
    fetch('//api.thecatapi.com/v1/breeds')
        .then(res => res.json())
        .then(catsBreedData => catsIdName(catsBreedData))
}

allCatsBreed()



/* retrive id names from object */
const catsIdName = catsBreeds => {
    const displayIdNames = document.getElementById('displayCatsName');

    for (const cat of catsBreeds) {

        const catsIdNames = document.createElement('h6');
        catsIdNames.innerHTML = `
            <p class="fw-light bg-light p-1 m-1 secondaryText">${cat.name}</p>
        `
        displayIdNames.appendChild(catsIdNames)
    }

}

/* Get cats name First by clicking button */
const displayCatName = () => {
    const inputSeachCats = document.getElementById('searchCats').value;
    const url = `https://api.thecatapi.com/v1/breeds/search?q=${inputSeachCats}`


    fetch(url)
        .then(resp => resp.json())
        .then(data => displayCatsInfo(data))

    document.getElementById('searchCats').value = '';

}



const displayCatsInfo = (info) => {
    const parentDiv = document.getElementById('displayCatInfo');
    const catinfos = info[0];
    console.log(catinfos)


    parentDiv.innerHTML = `
            <p> <span class="fw-bold">Cats Id:</span> ${catinfos.id} </p>
            <p> <span class="fw-bold">Cats Origin:</span> ${catinfos.origin} </p>
            <p> <span class="fw-bold">Cats Name:</span> ${catinfos.name} </p>
            <p> <span class="fw-bold">Temperment:</span> ${catinfos.temperament} </p>
            <p> <span class="fw-bold">Description:</span> ${catinfos.description} </p>
           
            <p> <span class="fw-bold">Website:</span> <a href="${catinfos.vetstreet_url}">Vet Website</a></p>
        `

}

