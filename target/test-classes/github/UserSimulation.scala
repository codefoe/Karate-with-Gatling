package github

import com.intuit.karate.gatling.PreDef._
import io.gatling.core.Predef._

import scala.concurrent.duration._

class UserSimulation extends Simulation{
  val getSingleUser = scenario("Create a new respository").exec(karateFeature("classpath:github/githubRepositories.feature"))
  setUp(
    getSingleUser.inject(rampUsers(10).during(10 seconds))
  )

}
