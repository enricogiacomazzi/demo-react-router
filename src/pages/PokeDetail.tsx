import React from 'react';
import {Link, useParams} from 'react-router-dom';
import Request from '../components/Request';

const PokeDetail:React.FC = () => {
    const {name} = useParams();

    return (
        <Request queryKey={['pokemon', name]} url={'https://pokeapi.co/api/v2/pokemon/' + name} render={data => (
            <div>
                <h1>{data.name}</h1>
                <h3>{data.weight}</h3>
                <img alt="img" src={data.sprites.front_default}/>
            </div>
        )}/>
    )
}

export default PokeDetail;
