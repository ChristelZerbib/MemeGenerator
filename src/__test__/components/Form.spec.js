import { fireEvent, render } from '@testing-library/react';
import { Form } from '../../components/Form';

describe('Form Component Test', () => {
    it('should have a clickable button', () => {
        const handleClick = jest.fn();
        const { getByTestId } = render(
            <Form />
        );
        const foundElement = getByTestId(/button/i);
        fireEvent.click(foundElement);
        expect(handleClick).toHaveBeenCalled();
    });
});