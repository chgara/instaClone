import { StackScreenProps } from '@react-navigation/stack';
import StackParamList from 'types/stackParamList';

interface Iscreen {
	componet: React.FC<IscreenComponentProps>;
	name: routeName;
}
type IscreenComponentProps = StackScreenProps<
	StackParamList,
	routeName
>;
export default Iscreen;

export type routeName = keyof StackParamList;
