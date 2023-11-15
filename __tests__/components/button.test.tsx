// @ts-nocheck
import React from 'react';
import { render, screen } from '@testing-library/react';


import MyButton from "@/components/Button"

describe('Button component tests', () => {
    it('should render the button with the text "Button"', () => {
        render(<MyButton>Button</MyButton>);
        expect(screen.getByText('Button')).toBeInTheDocument();
    });
});