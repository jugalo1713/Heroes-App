import { LoginPage } from '../auth/pages/LoginPage'
import { Navigate, createBrowserRouter } from 'react-router-dom';
import { HeroesApp } from '../HeroesApp';
import { DCPage, MarvelPage, HeroPage, SearchPage } from '../heroes/pages';
import HomePage from '../auth/pages/HomePage';
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';

export const AppRouter = () => {
    return createBrowserRouter(
        [
            {
                path: "/login",
                element: <PublicRoutes><LoginPage /></PublicRoutes>
            },
            {
                path: "/",
                element: <PrivateRoutes><HeroesApp /></PrivateRoutes>,
                children: childrenHeroesRoutes,
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