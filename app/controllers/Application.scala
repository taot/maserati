package controllers

import play.api._
import play.api.mvc._
import maserati.Util.isMobile

object Application extends Controller {

  def index = Action { implicit request =>
    if (isMobile(request)) {
      Ok("Hello mobile")
    } else {
      Ok("Hello")
    }
  }
}