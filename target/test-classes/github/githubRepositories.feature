Feature: Repositories for a given user
Scenario: List all repositories
Given url githubURL
Given path "user/repos"
* header Authorization = call read('basic-auth.js') githubCreds
When method GET

Scenario: Create a new respository
Given url githubURL
# Given header Accept = "application/vnd.github.nebula-preview+json"
Given path "user/repos"
* header Authorization = call read('basic-auth.js') githubCreds
* def name = call read('../api/name.js')
* def description = call read('../api/name.js')
* print name;
* def repo = {name: #(name), description: #(description)}
* print repo
When request repo
When method POST
  Then status 201
  * print response
# * json schema = read('schemaGithub.json');
#* print schema
#Then match response ==
#"""
#    {   id :'#number',
#    node_id : '#string',
#    name : '#string',
#    full_name : '#string/#string'
#}
#"""



