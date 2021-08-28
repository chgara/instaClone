import React, { useEffect, useState } from 'react';
import { Image } from 'react-native';
import theme from 'utils/themes/theme';

const PostBody: React.FC<props> = ({
	imageSrc,
	postMeasurements,
}) => {
	const { postWidth, postHeight } = postMeasurements;
	/* const [dimensionsObjs, setDimensionsObj] = useState({ */
	/* 	width: postWidth, */
	/* 	height: postHeight, */
	/* }); */

	/* useEffect(() => { */
	/* 	Image.getSize(imageSrc, (w, h) => { */
	/* 		const newWidth = (w * postHeight) / h; */
	/* 		setDimensionsObj({ width: newWidth, height: postHeight }); */
	/* 	}); */
	/* }, []); */

	return (
		<Image
			source={{ uri: imageSrc }}
			width={postWidth}
			height={postHeight}
			style={{
				width: postWidth,
				height: postHeight,
				borderTopLeftRadius: theme.border.rounded,
				borderTopRightRadius: theme.border.rounded,
			}}
		/>
	);
};
export default PostBody;

interface props {
	imageSrc: string;
	postMeasurements: IpostMeasurements;
}
interface IpostMeasurements {
	postWidth: number;
	postHeight: number;
}
