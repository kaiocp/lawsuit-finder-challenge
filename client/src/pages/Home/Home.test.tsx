import { fireEvent, render, screen } from "@testing-library/react"
import { BrowserRouter as Router } from "react-router-dom";
import Home from ".";

describe('HomePage', () => {
    it('button should be disbled when inputs are empty', () => {
        render(
            <Router>
                <Home />
            </Router>
        );
        const searchButton = screen.getByRole('button');
    
        expect(searchButton).toBeDisabled();
    });

    it('button should be enabled when inputs are filled', () => {
        render(
            <Router>
                <Home />
            </Router>
        );
        const lawsuitNumberInput = screen.getByRole('textbox');
        fireEvent.change(lawsuitNumberInput, {
            target: {
                value: '5001682-88.2020.8.13.0672'
            }
        });
    
        const courtSelect = screen.getByRole('combobox');
        fireEvent.change(courtSelect, {
            target: {
                value: 'TJBA'
            }
        });
    
        const searchButton = screen.getByRole('button');
        
        expect(searchButton).toBeEnabled();
    });
});