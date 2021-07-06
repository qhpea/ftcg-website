import {ReactComponent as component} from '../logo.svg';
import logo from '../logo.svg';

import Icon from '@ant-design/icons';

export const Image =  () => <img src={logo} />;

export default () => <Icon component={component} />;