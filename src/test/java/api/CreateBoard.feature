Feature: create a board
Scenario: with a query param "name = <randomName>" using <key>,<token>
    Given url baseUrl
    Given param key = trelloKey
    Given param token = trelloToken
    * def nameFrom = call read('name.js')
    Given param name = nameFrom
    * print nameFrom
    Given path 'boards/'
    And request '{}'
    And method POST
    And print response
    And match response.id == '##regex [0-9a-fA-F]{24,32}'
#    And def file = read("")
#    And def writer =
#    """
#        function (file,fileName) {
#            var String = Java.type("java.lang.String");
#            var byteArray = Java.type("byte[]");
#            var ss = new String(file).getBytes();
#            var str = new String(byteArray,"UTF-8");
#
#            karate.log(str);
#            karate.write(str,"../asdf.zip");
#        }
#    """
#
#    * call karate.write(response,"../<location of your file>.csv")
    #Default karate.write(s,"asdf.zip") places the file in target folder
    #karate.write(s,"../asdf.zip") will place it root folder
    #karate.write(s,"../src/test/java/"asdf.zip") places it under java folder

    Scenario: Integer
        * def str = "Hello There"
        * def str = str.substring(1,4)
        * print str
# * def res = Integer.parseInt("asdf",2)
# * print res  

Scenario: read and write
* def file = read("/Users/ernest/file.zip")
* print file
* def writer = 
    """
        function (file,fileName) {
            
           var String = new Java.type("java.lang.String");
            var str = new String(file,"UTF-8");

            karate.log(str);
            karate.write(str,fileName);
        }
    """
        * call writer(file,"../asdf.csv")

        Scenario: read csv to json
        Given csv c = read('file:src/demo/api/export.txt')
         * def c = c[0];
        Then print c

                
    * def s = "Hello There"
    * print s
    * def t = call send(s)
    * print t







  


    


