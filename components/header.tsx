import { Col, Row } from './base';
import 'twin.macro';

const Header: React.FC = () => {
    return (
        <Row tw="justify-between items-center pt-10 pb-4 sm:py-20">
            <p>header left element</p>
            <p>header right element</p>
        </Row>
    )
}

export default Header;


