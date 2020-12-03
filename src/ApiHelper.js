import axios from 'axios'


// conceptueel het idee
/*class Pokemon {

    constructor() {

    }
}*/

class Client {
    constructor() {
        this.baseURL = 'https://pokeapi.co/api/v2/'
    }
    parsePokemonData(mainFetch, sideFetch) {
        this.getEvolutionSprites(sideFetch.evolution_chain.url)
        return {
            name: mainFetch.name,
            id: mainFetch.id,
            img: [mainFetch.sprites.front_default, mainFetch.sprites.back_default],
            img_shiny: [mainFetch.sprites.front_shiny, mainFetch.sprites.back_shiny],
            moves: mainFetch.moves,
            genus: this.getEnglishGenus(sideFetch),
            /*evolution_array: this.getEvolutionSprites(sideFetch.evolution_chain.url)*/
        }
    }
    getPokemonByName(name) {
         return axios.get(`${this.baseURL}pokemon/${name}`)
            .then(main => {
                const mainData = main.data
                return axios.get(`${this.baseURL}pokemon-species/${name}`)
                    .then(side => {
                        return this.parsePokemonData(mainData, side.data)
                    })

            })
    }
    getEnglishGenus(data) {
        let enGenus
        data.genera.forEach(genus => {
            if (genus.language.name === 'en') {
                enGenus= genus.genus
            }
        })
        return enGenus
    }
    // returns array with all pokemon in evolution line
    getEvolutionLine(url) {
         axios.get(url)
            .then(res => {
                let evoArray = [];
                let basePath = res.data.chain
                console.log(basePath)
                if (basePath.species.name){
                    evoArray.push(basePath.species.name)
                    let path
                    if (basePath.evolves_to.length > 1) {
                        basePath.evolves_to.forEach((evo) =>
                        {
                            evoArray.push(evo.species.name)
                        })
                    } else {
                        path = basePath.evolves_to[0]
                        if(path) {
                            evoArray.push(path.species.name)
                            if(path.evolves_to[0]) {
                                evoArray.push(path.evolves_to[0].species.name)
                            }
                        }
                    }

                }
                console.log(evoArray)
            })
    }

}


export default Client