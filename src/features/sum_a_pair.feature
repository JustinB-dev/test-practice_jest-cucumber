Feature: Counter
    Displays an incrementing number when button is clicked starting at 0

Scenario: showing 0 initially
    Given mount counter
    When initially
    Then showing 0

  Scenario: clicking button increments
    Given mount counter
    When clicking button
    Then showing +1