import React from 'react';
import {useQuery} from 'react-query';

interface RequestProps {
    queryKey: string | Array<any>,
    url: string;
    render: (data: any) => JSX.Element
}

const Request: React.FC<RequestProps> = ({queryKey, url, render}) => {
    const {isLoading, isError, data} = useQuery(queryKey, () =>
        fetch(url).then(x => x.json()));

    if(isLoading) {
        return <h1>loading</h1>
    }

    if(isError) {
        return <h1>error</h1>
    }

    return render(data);
}

export default Request;
