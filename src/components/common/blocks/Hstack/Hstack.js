import { forwardRef, memo } from "react";
import { joinClasses } from "../../../../utils/joinClasses";
import Box from "../Box/Box";
import styles from "./Hstack.module.scss";

const Hstack = ({ children, as, className, ...props }, ref) => {
	const css = joinClasses(styles.Hstack, className);
	return (
		<Box ref={ref} as={as} className={css} {...props}>
			{children}
		</Box>
	);
};

export default memo(forwardRef(Hstack));
