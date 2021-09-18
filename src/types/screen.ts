import { ParamListBase } from '@react-navigation/native';
import { StackNavigationOptions } from '@react-navigation/stack';

interface Iscreen<T extends ParamListBase> {
	componet: React.FC;
	name: routeName<T>;
	options?: StackNavigationOptions;
}
export default Iscreen;

export type routeName<T extends ParamListBase> = keyof T;
