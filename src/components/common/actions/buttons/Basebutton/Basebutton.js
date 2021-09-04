import { forwardRef, memo } from "react";
import { joinClasses } from "../../../../../utils/joinClasses";
import styles from "./Basebutton.module.scss";

const Basebutton = ({ children, className, as: As, danger, safe, ...props }, ref) => {
	As ??= As || "button";
	const css = joinClasses(styles.Basebutton, className);
	return (
		<As ref={ref} className={css} {...props}>
			{children}
		</As>
	);
};

export default memo(forwardRef(Basebutton));
