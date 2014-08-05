package filter

import play.api.mvc.{Result, RequestHeader, Filter}
import scala.concurrent.Future

class UserAgentFilter extends Filter {

  override def apply(f: (RequestHeader) => Future[Result])(rh: RequestHeader): Future[Result] = {
    println("Filtered")
    println(rh.headers.get("User-Agent"))
    f(rh)
  }
}
