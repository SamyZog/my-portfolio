/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import Box from "../common/blocks/Box/Box";
import Center from "../common/blocks/Center/Center";
import { Closemodalbutton, Modal, Modalcontent } from "../common/overlay/Modal/Modal";
import styles from "./Imagepreview.module.scss";

const Imagepreview = ({ name }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleModal = () => {
		setIsOpen(!isOpen);
	};

	const closeModal = () => {
		setIsOpen(false);
	};

	return (
		<>
			<Box
				style={{ backgroundImage: `url(/project-thumbs/${name}.png)` }}
				className={styles.thumb}
				onClick={toggleModal}
			></Box>
			{isOpen && (
				<Modal selector="modal" onClose={closeModal}>
					<Modalcontent>
						<Closemodalbutton />
						<Center
							style={{
								backgroundImage: `url(/project-thumbs/${name}.png)`,
							}}
							className={styles.Imagepreview}
						></Center>
					</Modalcontent>
				</Modal>
			)}
		</>
	);
};

export default Imagepreview;
