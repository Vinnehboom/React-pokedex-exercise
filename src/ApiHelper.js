import axios from 'axios'

class ApiHelper {
    constructor(pokemon, shiny = false) {
        this.baseURL = 'https://pokeapi.co/api/v2/'
        this.pokemon = pokemon
        this.shiny = shiny
        this.baseInfo = this.fetchBaseInfo(pokemon)
        this.sideInfo = this.fetchSideInfo(pokemon)
    }

    fetchBaseInfo(pokemon) {
         axios.get(`${this.baseURL}pokemon/${pokemon}`)
            .then(res => {
                return res.data
            })
    }

    fetchSideInfo(pokemon) {
         axios.get(`${this.baseURL}pokemon-species/${pokemon}`)
            .then(res => {
                return res.data
            })
    }

}

/*class ApiHelper {
    constructor() {
        this.baseURL = 'https://pokeapi.co/api/v2/'
        this.basicInfo = ''
        this.sideInfo = ''
        this.isLoaded = false
    }

    fetchInfo(pokemon) {
        axios.get(`${this.baseURL}pokemon/${pokemon}`)
            .then(res => this.baseInfo = res.data)
            .then(axios.get(`${this.baseURL}pokemon-species/${pokemon}`)
                .then(res => {
                    this.sideInfo = res.data
                    this.isLoaded = true
                }))
    }

}*/

export default ApiHelper