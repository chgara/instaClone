import React, { useEffect, useState } from 'react';
import { Image } from 'react-native';
import { width } from 'utils/constants/dimensions';
import theme from 'utils/themes/theme';

const PostBody: React.FC<props> = ({ imageSrc, postHeight }) => {
	const [dimensionsObjs, setDimensionsObj] = useState({
		width: width,
		height: postHeight,
	});

	/* useEffect(() => { */
	/* 	Image.getSize(imageSrc, (w, h) => { */
	/* 		const newWidth = (w * postHeight) / h; */
	/* 		setDimensionsObj({ width: newWidth, height: postHeight }); */
	/* 	}); */
	/* }, []); */

	return (
		<Image
			source={{ uri: imageSrc }}
			width={dimensionsObjs.width}
			height={dimensionsObjs.height}
			style={{
				width: dimensionsObjs.width,
				height: dimensionsObjs.height,
				borderTopLeftRadius: theme.border.rounded,
				borderTopRightRadius: theme.border.rounded,
			}}
		/>
	);
};
export default PostBody;

interface props {
	imageSrc: string;
	postHeight: number;
}
