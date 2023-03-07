import Container from "../container/Container";
import { StyledCards } from "./styles";

const Cards = () => {
	return <StyledCards>
    <Container title='Sedans' text='Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.' button='Learn More' icon='/images/sedan-car.svg'/>
	<Container title='SUVs' text='Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.' button='Learn More' icon='/images/suv-car.svg'/>
	<Container title='Luxury' text='Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style. ' button='Learn More' icon='/images/luxury-car.svg'/>
    </StyledCards> 
};

export default Cards