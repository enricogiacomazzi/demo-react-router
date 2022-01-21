import React from 'react';
import {Navbar} from '../components/Navbar';
import {useNavigate} from 'react-router-dom';

const Home:React.FC = () => {
    const navigate = useNavigate();

    const clickHandler = () => {
        navigate('/pagina2');
    }

    return (
        <>
            <h1>Home</h1>
            <button onClick={clickHandler}>vai a pagina 2</button>
        </>
    )
}

export  default Home;
