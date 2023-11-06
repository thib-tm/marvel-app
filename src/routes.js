import { Link } from "react-router-dom";
import Titre from "./component/Titre";
import List from "./component/Liste";
import Compter from "./component/Nombre_Total";
import { Outlet } from "react-router";

const characters = require('./characters.json')

const routes =  [
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <div>
                    
                <Titre></Titre>
                <List characters={characters}></List>
                <Compter characters={characters}></Compter>
                </div>,
            },
            {
                path: "characters",
                element: <div>
                   PAs de characters
                </div>,
            },
            {
                path: "about",
                element: <div>
                    About
                </div>,
            }
        ]
    }
]

function Root() {
    return (
        <>
            <header>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                </nav>
            </header>
            <div className="content">
                <Outlet />
            </div>
            <footer>
                Matheo
            </footer>
        </>
    );
}

export default routes;