import { createContext, useContext, useRef } from "react";
import Closebutton from "../../actions/buttons/Closebutton/Closebutton";
import Box from "../../blocks/Box/Box";
import Hstack from "../../blocks/Hstack/Hstack";
import Portal from "../Portal";
import styles from "./Drawer.module.scss";

const drawerContext = createContext();
const { Provider: Drawerprovider } = drawerContext;

const Drawer = ({ children, onClose, selector, ...props }) => {
	const drawerRef = useRef();
	const overlayRef = useRef();

	const closeDrawer = () => {
		const animation = { duration: 300, easing: "ease-in" };
		drawerRef.current
			.animate({ transform: "translate(100%)", opacity: 0 }, animation)
			.finished.then(() => onClose());
		overlayRef.current.animate({ opacity: 0 }, animation);
	};

	const closeOnClickOutside = (e) => {
		if (e.target.contains(overlayRef.current)) {
			closeDrawer();
		}
	};

	const value = {
		closeDrawer,
		drawerRef,
	};

	return (
		<Portal selector={selector}>
			<Drawerprovider value={value}>
				<Box ref={overlayRef} className={styles.Drawer} onClick={closeOnClickOutside}>
					{children}
				</Box>
			</Drawerprovider>
		</Portal>
	);
};

const Drawercontrols = ({ children }) => {
	const { closeDrawer } = useContext(drawerContext);

	return (
		<Hstack className={styles.drawercontrols}>
			{children}
			<Closebutton onClick={closeDrawer} />
		</Hstack>
	);
};

const Drawercontent = ({ children }) => {
	const { drawerRef } = useContext(drawerContext);

	return (
		<Box ref={drawerRef} className={styles.content}>
			{children}
		</Box>
	);
};

export { Drawer, Drawercontrols, Drawercontent };
