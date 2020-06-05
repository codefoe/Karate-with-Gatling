Feature: Deleting a single repo this feature file is designed to be
  only single scenario. It is designed to be called in a different feature file.
  Can be used to delete multiple repositories.
  Scenario: delete one repo {name}
    Given url githubURL
    * header Authorization = call read('basic-auth.js') githubCreds
    Given path 'repos'
    Given path owner.login
    Given path name
    When method DELETE
    * print response