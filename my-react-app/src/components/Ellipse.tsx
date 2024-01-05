import React, { RefObject, useEffect, useRef, useState } from "react";
import { Point } from "../model/types";

type EllipseProps = {
	id: string;
	point: Point;
	width: number;
	height: number;
	angleRotate: number;
	color: string;
	borderThickness: number;
	colorBorder: string;
	opacity: number;
	radius: number;
	centre: Point;
};

const EllipseView = (props: EllipseProps) => {
	const {
		id,
		angleRotate,
		color,
		borderThickness,
		colorBorder,
		opacity,
		radius,
		centre,
	} = props;
	const [width] = useState<number>(radius * 2 + 10);
	const [height] = useState<number>(radius * 2 + 10);
	const [xPoint] = useState<number>(centre.x - radius);
	const [yPoint] = useState<number>(centre.y - radius);

	props.point.x = xPoint;
	props.point.y = yPoint;
	const { point } = props;

	return (
		<svg
			style={{
				width: width,
				height: height,
				opacity: opacity,
			}}
		>
			<circle
				cx={centre.x}
				cy={centre.y}
				r={radius}
				style={{
					fill: color,
					strokeWidth: borderThickness,
					stroke: colorBorder,
				}}
			></circle>
		</svg>
	);
};

export { EllipseView };
