package controllers

import play.api._
import play.api.mvc._
import maserati.Util.isMobile

object Application extends Controller {

  def mobiles = Action { implicit request =>
    if (isMobile(request)) {
      Ok(views.html.mobile.mobiles("Hello"))
    } else {
      Ok(views.html.classic.mobiles("Hello"))
    }
  }

  def autoshows = Action { implicit request =>
    if (isMobile(request)) {
      Ok(views.html.mobile.show("Hello"))
    } else {
      Ok(views.html.classic.show("Hello"))
    }
  }
}