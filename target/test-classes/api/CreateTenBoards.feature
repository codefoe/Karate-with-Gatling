Feature: Create Ten Boards
Scenario: Calling CreateBoard.feature file 10 times
* def sdf = read('CreateBoard.feature')
* def s = karate.repeat(10,sdf)
* def result = karate.repeat(10,read('CreateBoard.feature'))