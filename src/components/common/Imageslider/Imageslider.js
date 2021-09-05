/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from "react";
import { RiArrowLeftSFill, RiArrowRightSFill } from "react-icons/ri";
import Basebutton from "../actions/buttons/Basebutton/Basebutton";
import Box from "../blocks/Box/Box";
import Hstack from "../blocks/Hstack/Hstack";
import styles from "./Imageslider.module.scss";

const Imageslider = ({ imageUrls, withHover = false, withControls = true }) => {
	const [idx, setIdx] = useState(0);
	const width = useRef();

	useEffect(() => {
		width.current = width.current.getBoundingClientRect().width;
	}, []);

	const selectSlide = (order, e) => {
		e.stopPropagation();
		setIdx(order);
	};

	const handleClick = (direction, e) => {
		e.stopPropagation();
		let newIdx;
		switch (direction) {
			case "next":
				newIdx = idx >= imageUrls.length - 1 ? 0 : idx + 1;
				break;
			case "previous":
				newIdx = idx <= 0 ? imageUrls.length - 1 : idx - 1;
				break;
		}
		selectSlide(newIdx);
	};

	return (
		<Box className={styles.Imageslider}>
			<Hstack className={styles.track} style={{ transform: `translateX(${-idx * width.current}px)` }}>
				{imageUrls.map((url) => (
					<img ref={width} key={url} src={url} alt="" />
				))}
			</Hstack>
			{withHover && (
				<Hstack className={styles.invisiblegrid}>
					{imageUrls.map((url, i) => (
						<Box key={url} className={styles.griditem} onMouseOver={selectSlide.bind(null, i)} />
					))}
				</Hstack>
			)}
			{imageUrls.length > 1 && (
				<Hstack className={styles.indicatorcontainer}>
					{imageUrls.map((url, i) => (
						<Basebutton
							key={url}
							className={styles.indicator}
							onClick={selectSlide.bind(null, i)}
							style={{ backgroundColor: idx === i && "var(--common)" }}
						/>
					))}
				</Hstack>
			)}
			{withControls && (
				<>
					<Basebutton className={styles.prevbutton} onClick={handleClick.bind(null, "previous")}>
						<RiArrowLeftSFill />
					</Basebutton>
					<Basebutton className={styles.nextbutton} onClick={handleClick.bind(null, "next")}>
						<RiArrowRightSFill />
					</Basebutton>
				</>
			)}
		</Box>
	);
};

export default Imageslider;
