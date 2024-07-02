import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import { useOrderDetails } from '../../contexts/OrderDetails';

export default function ScoopOption({name, imagePath}){
    const { updateItemCount } = useOrderDetails();
    const handleChange = (e) => {
        updateItemCount(name, parseInt(e.target.value), "Scoops");
    }

    return (
        <Col xs={12} sm={6} md={4} lg={3} style={{ textAlign: 'center' }}>
            <img src={`http://localhost:3030/${imagePath}`} alt={`${name} scoop`} />
            <Form.Group controlId={`${name}-count`} as={Row} style={{marginTop: "10px"}}>
                <Form.Label column xs="6" style={{textAlign: "Right"}}>{name}</Form.Label>
                <Form.Control 
                    type="number"
                    defaultValue={0}
                    onChange={handleChange}
                />
            </Form.Group>
        </Col>
    );
}