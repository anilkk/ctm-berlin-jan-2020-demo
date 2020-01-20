Feature: Test how clicks are handled on a certain element
    As a developer
    I want to be able to test how clicks are handled by certain elements

    Background:
        Given I open the page "catalogue"

    Scenario: Single click on the e2e test list link should navigate to another page
        When  I click on the element "firstProductListItem"
        Then  I expect the url to contain "WebdriverIO"