import { createContext, useContext, useRef } from "react";
import Closebutton from "../../actions/buttons/Closebutton/Closebutton";
import Center from "../../blocks/Center/Center";
import Portal from "../Portal";
import styles from "./Modal.module.scss";

const modalContext = createContext();
const { Provider: Modalprovider } = modalContext;

const Modal = ({ children, onClose, selector, ...props }) => {
	const overlayRef = useRef();

	const closeModal = () => {
		overlayRef.current.animate({ opacity: 0 }, { duration: 300 }).finished.then(() => onClose());
	};

	const value = {
		closeModal,
	};

	return (
		<Portal selector={selector}>
			<Modalprovider value={value}>
				<Center ref={overlayRef} className={styles.Modal}>
					{children}
				</Center>
			</Modalprovider>
		</Portal>
	);
};

const Closemodalbutton = () => {
	const { closeModal } = useContext(modalContext);

	return <Closebutton autoFocus className={styles.closebutton} onClick={closeModal} />;
};

const Modalcontent = ({ children }) => {
	return <Center className={styles.content}>{children}</Center>;
};

export { Modal, Modalcontent, Closemodalbutton };
