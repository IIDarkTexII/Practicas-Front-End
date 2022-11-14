const fetchPokemon = async() => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName=pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    let data = await fetch(url).then((res)=>{
        if (res.status != "200"){
            console.log(res);
            pokeImage("pokemon-sad.gif")
        }
        else{
            return res.json();
        }
    })

    if (data){
        console.log(data);
        let pokeimg= data.sprites.front_default;
        let pokeinfo=data.abilities;
        pokeImage(pokeimg);
        pokeData(pokeinfo);
        console.log(pokeimg);
    }
}

const pokeImage = (url) =>{ 
    const pokePhoto=document.getElementById("pokeimg");
    pokePhoto.src=url;
};
const pokeData = (abilites) =>{
    const pokeAbilities=document.getElementById("habilidad");
    const abilitiesName= abilites.map((item) => item.ability.name);
    console.log("abilities full", abilites);
    console.log("abilities Names", abilitiesName); /*inecesario*/
    pokeAbilities.innerHTML = abilitiesName;
};

