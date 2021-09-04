import { forwardRef, memo } from "react";
import { joinClasses } from "../../../../utils/joinClasses";
import styles from "./Text.module.scss";

const Text = ({ children, className, as: As, ...props }, ref) => {
	As ??= As || "p";
	const css = joinClasses(styles.Text, className);
	return (
		<As className={css} {...props}>
			{children}
		</As>
	);
};

export default memo(forwardRef(Text));
