import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hook/useForm"
import { HeroCard } from "../components/HeroCard"
import queryString from 'query-string';
import { getHeroesByName } from "../helpers/getHeroesByName";

export const SearchPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { q = '' } = queryString.parse(location.search)
    const heroes = getHeroesByName(q);

    const { onInputChange, searchText } = useForm({
        searchText: q
    });

    const showSearch = q.length === 0;
    const showError = q.length > 0 && heroes.length === 0;

    const onSearchSubmit = (e) => {
        e.preventDefault();
        navigate(`?q=${searchText}`);
    }

    return (
        <>
            <h1>
                Search
            </h1>
            <hr />
            <div className="row">
                <div className="col-5">
                    <h4>
                        Search
                    </h4>
                    <hr />
                    <form onSubmit={onSearchSubmit}>
                        <input
                            type="text"
                            placeholder="Search a hero"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            onChange={onInputChange}
                            value={searchText}
                        />
                        <button className="btn btn-outline-primary mt-2">
                            Search
                        </button>

                    </form>
                </div>
                <div className="col-7">
                    <h4>
                        Results
                    </h4>
                    <hr />
                    <div className="alert alert-primary" style={{ display: showSearch ? '' : 'none' }}>
                        Search a hero
                    </div>
                    <div className="alert alert-danger" style={{ display: showError ? '' : 'none' }}>
                        No Results for <b>{q}</b>
                    </div>
                </div>
                {
                    heroes.map(hero => (
                        <HeroCard key={hero.id} hero={hero} />
                    ))
                }
            </div>
        </>
    )
}
