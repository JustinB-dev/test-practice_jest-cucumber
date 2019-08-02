Feature: Counter
    Displays an incrementing number when button is clicked starting at 0

Scenario: showing 0 initially
    Given mount counter
    When initial load
    Then show 0

  Scenario: clicking button increments
    Given mount counter
    When clicking button
    Then show +1

  Scenario: counter resets to 0 after 10
    Given counter is equal to 10
    | counter |
    | 1 |
    | 2 |
    | 3 |
    | 4 |
    | 5 |
    | 6 |
    | 7 |
    | 8 |
    | 9 |
    When clicking button
    Then alert
    And counter resets
