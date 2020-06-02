Feature: Read and pass
Scenario:
Given def ss =
"""
    function(str) {
        return Java.type('Binary').sendMeString(str);
    }
"""
* def tttt = call ss('Hi')
* print tttt
* karate.write()
