//Install command to allow you to use user-event.
//npm install --save-dev @testing-library-user-event

import {render, screen } from '@testing-library/react';
import SummaryForm from '../summary/SummaryForm';
import userEvent from '@testing-library/user-event';

test('Initial conditions', () => {
    render(<SummaryForm />);
    const checkbox = screen.getByRole('checkbox', {name: /terms and conditions/i});
    const confirmButton = screen.getByRole('button', {name: /confirm order/i});
    expect(checkbox).not.toBeChecked();
    expect(confirmButton).toBeDisabled();    
});

test('Checkbox enables button on first click and disables on second click', async() => {
    const user = userEvent.setup();

    render(<SummaryForm />);
    const checkbox = screen.getByRole('checkbox', {name: /terms and conditions/i});
    const confirmButton = screen.getByRole('button', {name: /confirm order/i});
    await user.click(checkbox);
    expect(confirmButton).toBeEnabled();
    await user.click(checkbox);
    expect(confirmButton).toBeDisabled();
});

test('popover responds to hover', async() => {
    render(<SummaryForm />);
    //popover starts out hidden
    const nullPopover = screen.queryByText(/no ice cream will actually be delivered/i);
    expect(nullPopover).not.toBeInTheDocument();

    //popover appears upon mouseover of checkbox label
    const termsAndConditions = screen.getByText(/terms and conditions/i);
    await userEvent.hover(termsAndConditions);
    const popover = screen.getByText(/no ice cream will actually be delivered/i);
    expect(popover).toBeInTheDocument();

    //popover disappears when we mouse out
    await userEvent.unhover(termsAndConditions);
    const nullPopoverAgain = screen.queryByText(/no ice cream will actually be delivered/i);
    expect(nullPopoverAgain).not.toBeInTheDocument();
});