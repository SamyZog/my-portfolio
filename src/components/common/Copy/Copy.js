import { useRef, useState } from "react";
import { RiCheckFill, RiCloseFill, RiFileCopyLine } from "react-icons/ri";
import styles from "./Copy.module.scss";

const Copy = ({ children }) => {
	const [copied, setCopied] = useState(false);
	const copyRef = useRef();
	const timeOutRef = useRef();

	const copyToClipBoard = async () => {
		copyRef.current.animate({ opacity: 0 }, { duration: 100 });
		try {
			await navigator.clipboard.writeText(copyRef.current.innerText);
			setCopied("success");
			clearTimeout(timeOutRef.current);
			timeOutRef.current = setTimeout(() => {
				setCopied(false);
			}, 2000);
		} catch (error) {
			setCopied("error");
		}
	};

	return (
		<button ref={copyRef} className={styles.Copy} onClick={copyToClipBoard}>
			{children}{" "}
			{copied === "success" ? (
				<RiCheckFill color="#00C857" />
			) : copied === "error" ? (
				<RiCloseFill color="#FF0020" />
			) : (
				<RiFileCopyLine title="copy to clipboard" />
			)}
		</button>
	);
};

export default Copy;
