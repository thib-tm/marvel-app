import { Link } from "react-router-dom";
import { format, isValid } from "date-fns";

export function CharactersList({ characters = [] }) {
    return (
        <ul id="characters">
            {characters.map((character) => {
                const date = new Date(character.modified);
                const formattedDate = isValid(date) ? format(date, 'MMMM d, yyyy') : 'Invalid date';
                return (
                    <li key={character.id}>
                        <Link to={`/characters/${character.id}`} data-testid={`character-link-${character.id}`}>
                        {character.name}
                        {/* <strong>{character.name}</strong> - <small>{formattedDate}</small> */}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
}