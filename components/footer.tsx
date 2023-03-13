import { Col, Row  } from './base';
import 'twin.macro';


const Footer: React.FC = () => {
    return (
        <Row tw="justify-between items-center pt-10 pb-4 sm:py-20">
            <p>footer left element</p>
            <p>footer right element</p>
        </Row>
    )
}

export default Footer;


