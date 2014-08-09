package controllers

import play.api._
import play.api.mvc._
import maserati.Util.isMobile

object Application extends Controller {

/*  def favicon = Action {
    Ok(Assets.at("/public", "images/favicon.ico", true))
  }*/

  def mobiles = Action { implicit request =>
    if (isMobile(request)) {
      Ok(views.html.classic.mobiles("Hello"))
    } else {
      Ok(views.html.classic.mobiles("Hello"))
    }
  }
}