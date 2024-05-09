// fetch(url, {options})
//method : default, get, delete

async function fetchData(){
    try{
        const name = document.getElementById("name").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

        if(!response.ok)
        {
            throw new Error("Couldn't fetch resource");
        }
        const data = await response.json();
        const imag = data.sprites.front_default;
        const imgEle = document.getElementById("image");
        console.log(data);
        imgEle.src = imag;
        imgEle.style.display = "block";
    }
    catch(error){
        console.error(error);
    }
}