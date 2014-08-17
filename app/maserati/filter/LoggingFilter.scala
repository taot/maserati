package maserati.filter

import play.api.mvc.{Result, RequestHeader, Filter}
import scala.concurrent.Future
import maserati.logging.Logging

class LoggingFilter extends Filter with Logging {

  override def apply(f: (RequestHeader) => Future[Result])(rh: RequestHeader): Future[Result] = {
    logger.info("{} {} from {} {}", rh.method, rh.path, rh.remoteAddress, rh.headers.get("User-Agent"))
    f(rh)
  }
}
