import React from "react";
import {useQuery} from 'react-query';
import axios from "axios";

const fetchSuperHeroes = () => axios.get('http://localhost:4000/superheroes');

export const RQSuperHeroesPage = () => {
    const {isLoading, data, isError, error, isFetching} = useQuery('super-heroes', fetchSuperHeroes);
    if (isLoading) {
        return <h2>Loading...</h2>
    }
    console.log({isLoading, isFetching});
    if (isError) {
        return <h2>{error.message}</h2>
    }
    return (
        <>
            <h2>RQ Super Heroes Page</h2>
            {
                data?.data.map(hero => <div key={hero.name}>{hero.name}</div>)
            }
        </>
    );
}
