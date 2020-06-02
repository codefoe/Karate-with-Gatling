Feature: Deleting a board
Scenario: delete all boards
Given param token = trelloToken
Given param key = trelloKey
Given url baseUrl
Given path "boards/"
And path id
And method DELETE
And print response

