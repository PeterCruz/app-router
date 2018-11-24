import React, {Component} from 'react';

class Detail extends Component
{
    constructor() {
        super();
        this.state ={
            character: [],
        }
    }

    componentWillMount() {
        let {character} = this.state;
        const base_url = 'https://swapi.co/api';
        const {id} = this.props.match.params;

        fetch(`${base_url}/people/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                character = data;
                this.setState({character});
                }
            )
    }

    render() {
        let {character} = this.state;
        return(
            <h1>El nombre del personaje es {character.name} y su genero es {character.gender}</h1>
        )
    }
}

export default Detail;