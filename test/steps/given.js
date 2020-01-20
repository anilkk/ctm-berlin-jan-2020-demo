import { Given } from 'cucumber';
import openWebsite from '../support/action/openWebsite';
Given(
    /^I open the (url|page|site) "([^"]*)?"$/,
    openWebsite
);