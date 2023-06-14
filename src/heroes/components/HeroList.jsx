import React from 'react'
import { getHeroesByPublisher } from '../helpers/getHeroesByPublisher'
import { HeroCard } from './HeroCard'
import { useMemo } from 'react';

export const HeroList = ({ publisher }) => {
    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);
    return (
        <>
            <div class="row justify-content-around">
                {heroes && heroes.map(hero => (
                    <HeroCard key={hero.id} hero={hero} />
                ))}

            </div>
        </>
    )
}