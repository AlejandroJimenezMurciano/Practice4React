import Title from "../title/Title";
import Text from "../text/Text";
import Button from "../button/Button";
import Icono from "../icon/Icono";
import { StyledContainer } from "./styles";

const Container = ({title, text, button, icon}) => {
	return <StyledContainer>
	<Icono icon={icon}/>
	<Title text={title}/>
    <Text text={text}/>
    <Button text={button}/>
	</StyledContainer>
};

export default Container