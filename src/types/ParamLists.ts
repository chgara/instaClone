type StackParamList = {
	Home: undefined;
	Search: undefined;
	Plus: undefined;
	Heart: undefined;
	Profile: undefined;
	post: { postId: string };
};
export type AuthParamList = {
	Initial: undefined;
	Auth: { register?: boolean };
};

export default StackParamList;
