import React from 'react'
import { Link } from 'react-router-dom'

export const HeroCard = ({ hero }) => {
    return (
        <div className='card col-3 m-4 '>
            <img src={`/heroes/${hero.id}.jpg`} class="card-img-top" alt={hero.superhero} />
            <div class="card-body">
                <h5 class="card-title">{hero.superhero}</h5>
                {
                    (hero.alter_ego !== hero.superhero) && (<p class="card-text">{hero.characters}</p>)
                }
                <p className='card-text'>
                    <small className='text-muted'>
                        {hero.first_appearance}
                    </small>
                </p>
                <Link
                    className='btn btn-primary'
                    to={`/hero/${hero.id}`}>Go</Link>
            </div>
        </div>
    )
}
