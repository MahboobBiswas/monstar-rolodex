import { Component } from "react";

import './search-box.style.css';


class SearchBox extends Component {
    constructor(props) {
    super(props);
}
    render(){
        return (
            <input 
            className={this.props.className} 
            type='search'
             placeholder={this.props.placeholder}
            onChange={this.props.onChangeHandler}
        />

        )
    }
}

export default SearchBox;