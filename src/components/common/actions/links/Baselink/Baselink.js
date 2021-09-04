import React, { forwardRef, memo } from "react";
import { joinClasses } from "../../../../../utils/joinClasses";
import styles from "./Baselink.module.scss";

const Baselink = ({ children, className, ...props }, ref) => {
	const css = joinClasses(styles.Baselink, className);
	return (
		<a ref={ref} rel="prefetch" className={css} {...props}>
			{children}
		</a>
	);
};

export default memo(forwardRef(Baselink));
