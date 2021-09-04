import Aboutsection from "../components/layout/Aboutsection/Aboutsection";
import Contactsection from "../components/layout/Contactsection/Contactsection";
import Fixedcontainer from "../components/layout/Fixedcontainer/Fixedcontainer";
import Herosection from "../components/layout/Herosection/Herosection";
import Portfoliosection from "../components/layout/Portfoliosection/Portfoliosection";

const Homeroute = (props) => {
	return (
		<>
			<Fixedcontainer />
			<Herosection />
			<Aboutsection />
			<Portfoliosection />
			<Contactsection />
		</>
	);
};

export default Homeroute;
