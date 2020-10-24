import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
jest.mock('../src/idgen', () => jest.fn(() => 'mockId'));
global.M = require('materialize-css');
Enzyme.configure({adapter: new Adapter()})