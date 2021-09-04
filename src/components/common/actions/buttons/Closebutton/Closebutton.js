import { forwardRef, memo } from "react";
import { RiCloseFill } from "react-icons/ri";
import Basebutton from "../Basebutton/Basebutton";

const Closebutton = (props, ref) => (
	<Basebutton ref={ref} {...props}>
		<RiCloseFill />
	</Basebutton>
);

export default memo(forwardRef(Closebutton));
