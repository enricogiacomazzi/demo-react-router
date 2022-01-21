import React from 'react';
import {Navbar} from '../components/Navbar';
import {useQuery} from 'react-query';
import {Link} from 'react-router-dom';
import Request from '../components/Request';

const Page2:React.FC = () => {

    return (
        <Request queryKey="pokemon" url="https://pokeapi.co/api/v2/pokemon" render={data => (
            <ul>
                {data?.results.map((x:any) => <li key={x.name}>
                    <Link to={'/pokemon/' + x.name}>{x.name}</Link>
                </li>)}
            </ul>
        )}/>
    )
    // const {isLoading, isError, data} = useQuery<{results: Array<any>}>('pokemon', () =>
    //     fetch('https://pokeapi.co/api/v2/pokemon').then(x => x.json()));
    //
    // if(isLoading) {
    //     return <h1>loading</h1>
    // }
    //
    // if(isError) {
    //     return <h1>error</h1>
    // }
    //
    // return (
    //     <ul>
    //         {data?.results.map(x => <li key={x.name}>
    //             <Link to={'/pokemon/' + x.name}>{x.name}</Link>
    //         </li>)}
    //     </ul>
    // )
}

export  default Page2;
