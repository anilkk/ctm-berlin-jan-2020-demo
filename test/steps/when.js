import { When } from 'cucumber';
import clickElement from '../support/action/clickElement';

When(
    /^I (click|doubleclick) on the (link|button|element) "([^"]*)?"$/,
    clickElement
);