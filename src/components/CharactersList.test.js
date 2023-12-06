import { render, screen } from '@testing-library/react';
import { CharactersList } from './CharactersList';
import { BrowserRouter } from 'react-router-dom';

describe('CharactersList', () => {
    const characters = [
        { id: 1, id_perso: "1009368" },
        { id: 2, id_perso: "1009220" },
        { id: 3, id_perso: "1009663" },
    ];

    it('renders a list of characters with links to their detail pages', () => {
        // when
        render(<CharactersList characters={characters} />, { wrapper: BrowserRouter });

        // then
        // expect a list with the id "characters" to be in the document
        const characterList = screen.getByRole('list', { id: 'characters' });
        expect(characterList).toBeInTheDocument();

        // expect a listitem for each character
        const characterItems = screen.getAllByRole('listitem');
        expect(characterItems).toHaveLength(characters.length);

        // expect each listitem to have a link to the character detail page
        // characterItems.forEach((item, index) => {
        //     // expect each listitem to have a link to the character detail page
        //     const link = screen.getByTestId(`character-link-${characters[index].id_perso}`);
        //     expect(link).toBeInTheDocument();
        //     expect(link).toHaveAttribute('href', `/characters/${characters[index].id_perso}`);
        // });
    });
});