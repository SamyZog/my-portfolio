import { memo, useCallback, useEffect, useRef, useState } from "react";
import { Logo } from "../../../../public/icons";
import Routelink from "../../common/actions/links/Routelink/Routelink";
import Box from "../../common/blocks/Box/Box";
import Center from "../../common/blocks/Center/Center";
import Hstack from "../../common/blocks/Hstack/Hstack";
import Navlinks from "../../common/Navlinks/Navlinks";
import Mobilemenu from "../../Mobilmenu/Mobilemenu";
import Themetoggler from "../../Themetoggler/Themetoggler";
import styles from "./Header.module.scss";

const Header = (props) => {
	const [visible, setVisible] = useState(true);
	const scrollRef = useRef(0);

	const handleHeaderVisibility = useCallback(() => {
		setVisible(window.scrollY < scrollRef.current);
		scrollRef.current = window.scrollY;
	}, []);

	useEffect(() => {
		window.addEventListener("scroll", handleHeaderVisibility);
		return () => window.removeEventListener("scroll", handleHeaderVisibility);
	}, []);

	return (
		<Center
			as="header"
			className={styles.Header}
			style={{ opacity: visible ? 1 : 0, pointerEvents: visible ? "auto" : "none" }}
		>
			<Hstack className={styles.content}>
				<Routelink href="/" className={styles.logocontainer}>
					<Logo title="Logo" />
				</Routelink>
				<Hstack className={styles.desktopmenu}>
					<Hstack as="ul" className={styles.linkscontainer}>
						<Navlinks />
					</Hstack>
					<Themetoggler />
				</Hstack>
				<Box className={styles.mobilemenucontainer}>
					<Mobilemenu />
				</Box>
			</Hstack>
		</Center>
	);
};

export default memo(Header);
