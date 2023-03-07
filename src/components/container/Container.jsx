import Title from '../title/Title';
import Text from '../text/Text';
import Button from '../button/Button';
import Icono from '../icon/Icono';
import { StyledContainer } from './styles';
import Cards from '../cards/Cards';

const Container = ({ title, text, button, icon, color }) => {
	return (
		<StyledContainer>
			<Cards color={color} />
			<Icono icon={icon} />
			<Title text={title} />
			<Text text={text} />
			<Button text={button} />
		</StyledContainer>
	);
};

export default Container;
