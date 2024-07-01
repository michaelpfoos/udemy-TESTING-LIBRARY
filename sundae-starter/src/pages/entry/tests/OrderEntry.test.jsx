import { http, HttpResponse } from 'msw';
import { server } from '../../../mocks/server';
import { render, screen } from '@testing-library/react';
import OrderEntry from '../OrderEntry';

test('handles error for scoops and toppings routes', async() => {
    server.resetHandlers(
        http.get("http://localhost:3030/scoops", () => {
            return HttpResponse.error(null, {status: 500});
        }),
        http.get("http://localhost:3030/toppings", () => {
            return HttpResponse.error(null, {status: 500});
        })
    )

    render(<OrderEntry />);

    //https://www.udemy.com/course/react-testing-library/learn/lecture/32177920#content
    //React boostrap does not have the expected name value.
    //Solutions here 1. omit hte name, or search by text.
    //const alerts = await screen.findAllByRole('alert', {name: 'An unexpected error occurred. Please try again later.'});
    const alerts = await screen.findAllByText('An unexpected error occurred. Please try again later.', {exact: false})


    expect(alerts).toHaveLength(2);


});