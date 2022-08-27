import { render, waitFor, screen } from "@testing-library/react"
import { BrowserRouter as Router } from "react-router-dom";
import SearchResult from '.';
import http from '../../common/http';
import LAWSUIT_MOCK from "../../common/mock/lawsuit";

jest.mock('http');

describe('SearchResult', () => {
    it('should render no results section if there is no lawsuit found', () => {
        const { container } =  render(
            <Router>
                <SearchResult />
            </Router>
        );

        // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
        const notFoundSection = container.getElementsByClassName('noresults');

        expect(notFoundSection).toBeTruthy();
    });

    it('should render details title if there is a lawsuit', async () => {
        jest.spyOn(http, 'get').mockImplementation();
        (http.get as jest.Mock).mockResolvedValue({ data: LAWSUIT_MOCK });
        
        render(
            <Router>
                <SearchResult />
            </Router>
        );
        
        let detalhesSection = undefined;

        await waitFor(() => {
            detalhesSection = screen.getByText(/Detalhes/i);
        });

        expect(detalhesSection).toBeTruthy();
    });
});