import { useState } from "react";
import { RiMenuFill } from "react-icons/ri";
import "../../../public/bg/bgdark.svg";
import { Logo } from "../../../public/icons";
import { useTheme } from "../../context/Themeprovider";
import { joinClasses } from "../../utils/joinClasses";
import Basebutton from "../common/actions/buttons/Basebutton/Basebutton";
import Center from "../common/blocks/Center/Center";
import Vstack from "../common/blocks/Vstack/Vstack";
import Navlinks from "../common/Navlinks/Navlinks";
import { Drawer, Drawercontent, Drawercontrols } from "../common/overlay/Drawer/Drawer";
import Signature from "../common/Signature/Signature";
import Themetoggler from "../Themetoggler/Themetoggler";
import styles from "./Mobilemenu.module.scss";

const Mobilemenu = (props) => {
	const [isOpen, setIsOpen] = useState(false);
	const { theme } = useTheme();

	const toggleDrawer = () => {
		setIsOpen(!isOpen);
	};

	const closeDrawer = () => {
		setIsOpen(false);
	};

	const callbackAfterLinkClick = (e) => {
		if (e.target.tagName === "A") {
			closeDrawer();
		}
	};

	return (
		<>
			<Basebutton onClick={toggleDrawer}>
				<RiMenuFill />
			</Basebutton>
			{isOpen && (
				<Drawer onClose={closeDrawer} selector="modal">
					<Drawercontent>
						<Drawercontrols>
							<Themetoggler />
						</Drawercontrols>
						<Vstack
							as="aside"
							className={joinClasses(styles.Mobilemenu, theme)}
							onClick={callbackAfterLinkClick}
						>
							<Center className={styles.logocontainer}>
								<Logo />
							</Center>
							<Vstack as="nav">
								<Navlinks />
							</Vstack>
							<Center className={styles.signaturecontainer}>
								<Signature className={styles.signature} />
							</Center>
						</Vstack>
					</Drawercontent>
				</Drawer>
			)}
		</>
	);
};

export default Mobilemenu;
