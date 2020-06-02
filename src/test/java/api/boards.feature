Feature:Get By Board Id

  Background:
    Given param key = "100264120d57c1e669ee014c58832665"
    Given param token = "1258ec5dcb906112513e9b27cd029033a03b139276ee36db530596ea9e843f14"


  Scenario Outline: Verifying status 200 for /<pathParams>
    * def boardId = "5d61d24ea2a2804c16ca965c"
    Given url baseUrl
    And path boardId
    And path "<pathParams>"
    And method GET
    And status <expectedStatus>
    And print response

    Examples:
      | pathParams       | queryParams | queryValue | expectedStatus |
      |                  |             |            | 201            |
      | closed           |             |            | 200            |
      | dateLastActivity |             |            | 200            |
      | dateLastView     |             |            | 200            |
      | desc             |             |            | 200            |
      | descData         |             |            | 200            |
      | idOrganization   |             |            | 200            |
      | invitations      |             |            | 200            |
      | invited          |             |            | 200            |
      | labelNames       |             |            | 200            |
      | memberships      |             |            | 200            |
      | name             |             |            | 200            |
      | pinned           |             |            | 200            |
      | powerUps         |             |            | 200            |
      | prefs            |             |            | 200            |
      | shortLink        |             |            | 200            |
      | shortUrl         |             |            | 200            |
      | starred          |             |            | 200            |
      | subscribed       |             |            | 200            |
      | url              |             |            | 200            |
      | actions          |             |            | 200            |
      | boardPlugins     |             |            | 200            |
      | boardStars       |             |            | 200            |
      | cards/           |             |            | 200            |
      | cards/           | id          |            | 200            |
      | cards/all        |             |            | 200            |
      | cards/closed     |             |            | 200            |
      | cards/none       |             |            | 200            |
      | cards/open       |             |            | 200            |
      | cards/visible    |             |            | 200            |
      | checklists       | id          | wrongid    | 400            |
      | checklists       | idBoard     | boardId    | 200            |
      | checklists       | idCard      | wrongid    | 400            |
      | customFields     |             |            | 200            |

  Scenario: All Boards By member Id
    Given url baseUrl
    Given path "member/ernestkojokmatov"
    And param boards = "all"
    And method GET
    And status 200
    #  And print response
    And def allBoards = response.boards
    And print allBoards
    * def data = karate.map(allBoards, function(x){ return { name: x.name , id : x.id } })
    * print data
    * def res = call read('deleteAllBoards.feature') data
    #This feature is absolutely important if dealing with dynamic data
    #above 'data' contains a json with a name, id of all 
    #boards that are currently linked to the member = 'ernestkojokmatov'.
    #karate.map(allBoards,function(x)) { return { name:x.name,id:x.id}}) creates a
    #json array.
    #Alternative to above karate.map we could also use
    #* def alternativeData = []
    #* set alternativeData = allBoards[*].id
    * print res
    

  Scenario: set via table, since blanks are skipped, this is cleaner than the above
    approach of using a scenario outline and examples

    * set search
      | path       | 0       | 1      | 2       |
      | name.first | 'John'  | 'Jane' |         |
      | name.last  | 'Smith' | 'Doe'  | 'Waldo' |
      | age        | 20      |        |         |

    * match search[0] == { name: { first: 'John', last: 'Smith' }, age: 20 }
    * match search[1] == { name: { first: 'Jane', last: 'Doe' } }
    * match search[2] == { name: { last: 'Waldo' } }
Scenario Outline: Create a board with a name "<boardName>"
  Given url baseUrl
  And param name = "<boardName>"
  And request ""
  And method POST
  And status 200
  Then print response
  Then def boardName = response.name
  Then match boardName == "<boardName>"
Examples:
|boardName|
|Random Board|

Scenario: Delete a board
* table words
|name|last|
|"ernest"|"koz"|
|"esat"|"bolot"|
|"akber"|"murato"|
* print name
* print last

Scenario: Random Name
* def someFunction = read('classpath:src/demo/api/name.js')
* def someCallResult = call someFunction
* print someCallResult
* print name
Scenario: Hello maker
* def jv = 
"""
  function() {
    var jv =Java.type('utily.Utily');
    var sh = new jv;
    return sh.hello();
  }
"""
* def s = call jv
* print s


if(user[userType] | user.role[userType]) return user;

  



