package github;

import com.intuit.karate.junit5.Karate;

public class Runner {
    @Karate.Test
    Karate testSample() {
        return Karate.run("sample").relativeTo(getClass());
    }
    @Karate.Test
    Karate testTags() {
        return Karate.run("tags").tags("@github").relativeTo(getClass());
    }
    @Karate.Test
    Karate testFullPath() {
        return Karate.run("classpath:../../src/test/java/github/github.feature");
    }
}
