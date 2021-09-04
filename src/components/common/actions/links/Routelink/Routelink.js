import Link from "next/link";
import Baselink from "../Baselink/Baselink";

const Routelink = ({ children, href, ...props }) => (
	<Link href={href} passHref>
		<Baselink {...props}>{children}</Baselink>
	</Link>
);

export default Routelink;
