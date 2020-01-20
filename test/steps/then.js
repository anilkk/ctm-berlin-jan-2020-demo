import { Then } from 'cucumber';
import checkInURLPath from '../support/check/checkInURLPath';

Then(
    /^I expect the url to( not)* contain "([^"]*)?"$/,
    checkInURLPath
);