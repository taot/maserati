package maserati

import play.api.mvc.RequestHeader

object Util {

  def isMobile(rh: RequestHeader): Boolean = {
    rh.headers.get("User-Agent") match {
      case Some(s) => s.toLowerCase.contains("android")
      case None => false
    }
  }
}
