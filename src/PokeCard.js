import React, {Component} from "react";
import "./styles/PokeCard.css"


class PokeCard extends Component{
    render(){
        const {id, name, type, base_experience} = this.props;
        const imageURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
        return (
            <div className="PokeCard">
                <h2 className="PokeCard-name">{name}</h2>
                <img className="PokeCard-image" src={imageURL} alt=""></img>
                <p className="PokeCard-type">Type: {type}</p>
                <p className="PokeCard-exp">Exp: {base_experience}</p>
            </div>
        )
    }
}

export default PokeCard;