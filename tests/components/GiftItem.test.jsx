import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Probando PropTypes en el componente <GiftItem />', () => {
    const title = 'Saitama';
    const url = 'https:one-punch.com/saitama.jpg';
  
    test('debe de hacer match con el snapshot', () => {
        const {container} = render( <GifItem title={title} url={url} /> );

        expect(container).toMatchSnapshot();
    });

    test('debe de mostrar la imagen con el URL y el ALT indicado', () => {
        // const {container} = render( <GifItem title={title} url={url} /> );
        render( <GifItem title={title} url={url} /> );
        //screen.debug();

        // expect(screen.getByRole('img').alt).toBe(title);
        const {src, alt} = screen.getAllByRole('img');

        expect(src).toBe(url);
        expect(alt).toBe(title);
    });
})
