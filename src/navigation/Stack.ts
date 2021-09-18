import { createStackNavigator } from '@react-navigation/stack';
import StackParamList, { AuthParamList } from 'types/ParamLists';

const Stack = createStackNavigator<StackParamList>();
export const AuthStack = createStackNavigator<AuthParamList>();
export default Stack;
