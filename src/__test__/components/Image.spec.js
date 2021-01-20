import { fireEvent, render } from '@testing-library/react';
import { Image } from '../../components/Image';

describe('Image Component Test', () => {

    const component = shallow(<Image />)

    it('should be an image', () => {
        expect(component.find('img')).toExist();
    });

    it('should be clickable', () => {
        const handleClick = jest.fn();

        const { getByTestId } = render(
            <Image onClick={handleClick} />
        );

        const foundElement = getByTestId(/template/i);

        fireEvent.click(foundElement);

        expect(handleClick).toHaveBeenCalled();
    });
});