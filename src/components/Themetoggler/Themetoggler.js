import { RiMoonFill, RiSunFill } from "react-icons/ri";
import { useTheme } from "../../context/Themeprovider";
import Basebutton from "../common/actions/buttons/Basebutton/Basebutton";

const Themetoggler = (props) => {
	const { theme, toggleTheme } = useTheme();

	return <Basebutton onClick={toggleTheme}>{theme === "dark" ? <RiSunFill /> : <RiMoonFill />}</Basebutton>;
};

export default Themetoggler;
