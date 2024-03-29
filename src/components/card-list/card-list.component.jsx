import { Component } from "react";
import Card from "../card/card.component";

import './cardList.style.css';


class CardList extends Component {
    constructor(props) {
    super(props);
}

    render(){

        const { monsters } = this.props;

        return (
        <div className="card-list">
            {monsters.map((monster) => {
            return(
               <Card monster = {monster} />
            );
            })}
        </div>
        );
    }
}


export default CardList;