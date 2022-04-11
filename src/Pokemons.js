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
            {id: 30, name: 'Nidorina', type: 'Posison', base_experience: 70},
            {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
            {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
            {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
          ];
        return (
            <div className="Pokemons">
            {
                PokeCardsData.map(element => {
                    return <PokeCard
                                id = {element.id}
                                name = {element.name}
                                type = {element.type}
                                base_experience = {element.base_experience}    
                            />
                })
            }  
            </div>
        )
    }
}


export default Pokemons;