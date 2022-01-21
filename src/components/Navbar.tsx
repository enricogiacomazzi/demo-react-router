import React from 'react';
import {Link, NavLink} from 'react-router-dom';

const Sep: React.FC = () => <> | </>;

export const Navbar:React.FC = () => {
    const items = [
        {url: '/', text: 'Home'},
        {url: '/pagina1', text: 'Pag 1'},
        {url: '/pokemon', text: 'Pokemon'},
        {url: '/bigpage', text: 'Big page'},
    ].map((x, id)  => ({...x, id}))

    return (
        <nav>
            {items.map(x => <React.Fragment key={x.id}>
                <NavLink
                    to={x.url} style={({isActive}) => ({backgroundColor: isActive ? 'red' : 'white'})}>
                    {x.text}
                </NavLink>
                <Sep/>
            </React.Fragment>)}
        </nav>
    )
}
