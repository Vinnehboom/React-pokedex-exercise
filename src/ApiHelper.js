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
        console.log(this.getEvolutionLine(sideFetch.evolution_chain.url))
        return {
            name: mainFetch.name,
            id: mainFetch.id,
            img: [mainFetch.sprites.front_default, mainFetch.sprites.back_default],
            img_shiny: [mainFetch.sprites.front_shiny, mainFetch.sprites.back_shiny],
            moves: mainFetch.moves,
            genus: this.getEnglishGenus(sideFetch),
            flavor_text: this.getRandomFlavorText(sideFetch),
            evolutions: this.getEvolutionLine(sideFetch.evolution_chain.url)
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

   /* getSpriteByName(name) {
        return axios.get(`${this.baseURL}pokemon/${name}`)
            .then(main => main.data.sprites.front_default)
    }*/
    getSpritesByArray(array) {
        return array.then(result => {
            const sprites = []
            result.forEach(evolution => {
                axios.get(`${this.baseURL}pokemon/${evolution}`)
                    .then(result => {
                        sprites.push(result.data.sprites.front_default)
                    })

            })
            return sprites
        })
    }

    getEnglishGenus(data) {
        let enGenus
        data.genera.forEach(genus => {
            if (genus.language.name === 'en') {
                enGenus = genus.genus
            }
        })
        return enGenus
    }

    getRandomFlavorText(data) {
        let flavorText;
        let EnglishFlavors = data.flavor_text_entries.filter(entry => entry.language.name === 'en')
        return EnglishFlavors[Math.floor(Math.random() * EnglishFlavors.length)].flavor_text
    }



    // returns array with all pokemon in evolution line
    getEvolutionLine(url) {
         return axios.get(url)
            .then(res => {
                let evoArray = [];
                let basePath = res.data.chain
                console.log(basePath)
                if (basePath.species.name) {
                    evoArray.push(basePath.species.name)
                    let path
                    if (basePath.evolves_to.length > 1) {
                        basePath.evolves_to.forEach((evo) => {
                            evoArray.push(evo.species.name)
                        })
                    } else {
                        path = basePath.evolves_to[0]
                        if (path) {
                            evoArray.push(path.species.name)
                            if (path.evolves_to[0]) {
                                evoArray.push(path.evolves_to[0].species.name)
                            }
                        }
                    }
                }
                return evoArray
            })

    }
}


export default Client