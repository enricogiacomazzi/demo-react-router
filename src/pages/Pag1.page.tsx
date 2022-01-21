import React from 'react';
import {Outlet, useLocation, useSearchParams} from 'react-router-dom';

const Page1:React.FC = () => {
    const [params] = useSearchParams();
    const location = useLocation();

    const myParams: any = {};

    params.forEach((k, v) => {
        myParams[k] = v;
    })

    // @ts-ignore
    console.log('query params', myParams, location);
    return (
        <>
            <h1>pagina 1</h1>
            <Outlet/>
        </>
    )
}

export  default Page1;
