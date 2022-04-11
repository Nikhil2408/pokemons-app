import React, {Component} from "react";
import PokeCard from "./PokeCard";
import "./styles/Pokemons.css";

class Pokemons extends Component{
    render(){
        const PokeCardsData = [
            {id: 1, name: "Bulbasaur", type: "grass", base_experience: 45},
            {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
            {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
            {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
            {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
            {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
            {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
            {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
            {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
          ];
        return (
            <div className="Pokemons">
                <PokeCard
                    id = {PokeCardsData[0].id}
                    name = {PokeCardsData[0].name}
                    type = {PokeCardsData[0].type}
                    base_experience = {PokeCardsData[0].base_experience} 
                />
                <PokeCard
                    id = {PokeCardsData[1].id}
                    name = {PokeCardsData[1].name}
                    type = {PokeCardsData[1].type}
                    base_experience = {PokeCardsData[1].base_experience} 
                />
                <PokeCard
                    id = {PokeCardsData[2].id}
                    name = {PokeCardsData[2].name}
                    type = {PokeCardsData[2].type}
                    base_experience = {PokeCardsData[2].base_experience} 
                />
                <PokeCard
                    id = {PokeCardsData[3].id}
                    name = {PokeCardsData[3].name}
                    type = {PokeCardsData[3].type}
                    base_experience = {PokeCardsData[3].base_experience} 
                />
                <PokeCard
                    id = {PokeCardsData[4].id}
                    name = {PokeCardsData[4].name}
                    type = {PokeCardsData[4].type}
                    base_experience = {PokeCardsData[4].base_experience} 
                />
                <PokeCard
                    id = {PokeCardsData[5].id}
                    name = {PokeCardsData[5].name}
                    type = {PokeCardsData[5].type}
                    base_experience = {PokeCardsData[5].base_experience} 
                />
                <PokeCard
                    id = {PokeCardsData[5].id}
                    name = {PokeCardsData[5].name}
                    type = {PokeCardsData[5].type}
                    base_experience = {PokeCardsData[5].base_experience} 
                />
                <PokeCard
                    id = {PokeCardsData[6].id}
                    name = {PokeCardsData[6].name}
                    type = {PokeCardsData[6].type}
                    base_experience = {PokeCardsData[6].base_experience} 
                />
                <PokeCard
                    id = {PokeCardsData[7].id}
                    name = {PokeCardsData[7].name}
                    type = {PokeCardsData[7].type}
                    base_experience = {PokeCardsData[7].base_experience} 
                />
                <PokeCard
                    id = {PokeCardsData[8].id}
                    name = {PokeCardsData[8].name}
                    type = {PokeCardsData[8].type}
                    base_experience = {PokeCardsData[8].base_experience} 
                />
            </div>
        )
    }
}


export default Pokemons;