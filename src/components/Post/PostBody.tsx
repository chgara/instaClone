import React, { useEffect, useState } from 'react';
import { Image } from 'react-native';
import { height, width } from 'utils/constants/dimensions';

const postHeight = height / 2;
const PostBody: React.FC<props> = ({ imageSrc }) => {
	const [dimensionsObjs, setDimensionsObj] = useState({
		width: width,
		height: postHeight / 2,
	});
	useEffect(() => {
		Image.getSize(imageSrc, (w, h) => {
			const newHeight = (width * h) / w;
			setDimensionsObj({ width: width, height: newHeight });
		});
	}, []);
	return (
		<Image
			source={{ uri: imageSrc }}
			width={dimensionsObjs.width}
			height={dimensionsObjs.height}
			style={{
				width: dimensionsObjs.width,
				height: dimensionsObjs.height,
			}}
		/>
	);
};
export default PostBody;

interface props {
	imageSrc: string;
}
