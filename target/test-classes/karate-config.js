function fn() {   
    var env = karate.env; // get java system property 'karate.env'
    karate.log('karate.env system property was:', env);
    if (!env) {
      env = 'dev'; // a custom 'intelligent' default
    }
    
    var config = { // base config JSON
      githubURL : 'https://api.github.com/',
      githubCreds: { username: 'ernestea@gmail.com', password: 'qAtbas-0maqbi-cyntah' },
      baseUrl : 'https://api.trello.com/1/',
      trelloToken : '1258ec5dcb906112513e9b27cd029033a03b139276ee36db530596ea9e843f14',
      trelloKey: '100264120d57c1e669ee014c58832665'
    };
    

    
    if (env == 'stage') {
      // over-ride only those that need to be
      config.someUrlBase = 'https://stage-host/v1/auth';
    } else if (env == 'e2e') {
      config.someUrlBase = 'https://e2e-host/v1/auth';
    }
    // don't waste time waiting for a connection or if servers don't respond within 5 seconds
    karate.configure('connectTimeout', 5000);
    karate.configure('readTimeout', 5000);
    return config;
  }