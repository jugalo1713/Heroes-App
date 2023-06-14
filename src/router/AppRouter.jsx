import { LoginPage } from '../auth/pages/LoginPage'
import { Navigate, createBrowserRouter } from 'react-router-dom';
import { HeroesApp } from '../HeroesApp';
import { DCPage, MarvelPage, HeroPage, SearchPage } from '../heroes/pages';
import HomePage from '../auth/pages/HomePage';

export const AppRouter = () => {
    return createBrowserRouter(
        [
            {
                path: "/",
                element: <HeroesApp />,
                children: childrenHeroesRoutes,
            },
            {
                path: "/login",
                element: <LoginPage />
            },
        ]);
}

const childrenHeroesRoutes = [
    {
        path: "home",
        element: <HomePage />
    },
    {
        path: "dc",
        element: <DCPage />
    },
    {
        path: "marvel",
        element: <MarvelPage />
    },
    {
        path: "hero/:id",
        element: <HeroPage />
    },
    {
        path: "search",
        element: <SearchPage />
    },
    {
        path: "/*",
        element: <Navigate to={"/marvel"} />
    },
]