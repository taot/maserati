package maserati

import play.api.mvc.RequestHeader

object Util {

  def isMobile(rh: RequestHeader): Boolean = {
    return true;
    rh.headers.get("User-Agent") match {
      case Some(s) =>
        val s1 = s.toLowerCase()
        s1.contains("android") || s1.contains("ios")
      case None => false
    }
  }
}
