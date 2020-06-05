Feature: Getting all repositories
  @github
  Scenario:
    Given url githubURL
    Given path "user/repos"
    * header Authorization = call read('basic-auth.js') githubCreds
    When method GET
    * def aa =  response
    * def map = read('filter.js')
    * def data = map(aa)
    * print data
    * def result = call read('repoDelete.feature') data
    * print response
    * print response

