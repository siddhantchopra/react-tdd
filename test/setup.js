import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
global.M = require('materialize-css'); // here was error during unit test M is not defined
Enzyme.configure({adapter: new Adapter()})