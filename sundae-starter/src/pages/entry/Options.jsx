import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ScoopOption from './ScoopOption';
import ToppingOption from './ToppingOption';
//import toppingOption from './ToppingOption';
import Row from 'react-bootstrap/Row';
import AlertBanner from '../common/AlertBanner';


export default function Options({optionType}) {
    const [items, setItems] = useState([]);
    const [error, setError] = useState(false);
    
    useEffect(() => {
        axios.get(`http://localhost:3030/${optionType}`)
            .then(response => {
                setItems(response.data);
            })
            .catch(error => {
                setError(true)
            });
    }, [optionType]);

    if ( error ) {
        // @ts-ignore
        return <AlertBanner />;
    }

    const ItemComponent = optionType === 'scoops' ? ScoopOption : ToppingOption;
    const optionItems = items.map(item => (
        <ItemComponent 
            key={item.name} 
            name={item.name} 
            imagePath={item.imagePath}
        />
    ));

    return (
        <Row>{optionItems}</Row>
    );
}