package controllers

import play.api._
import play.api.mvc._
import maserati.Util.isMobile
import maserati.data

object Application extends Controller {

  def index = Action {
    Redirect(routes.Application.mobiles("qp"))
  }

  def mobiles0 = Action {
    Redirect(routes.Application.mobiles("qp"))
  }

  def mobiles(id: String) = Action { implicit request =>
    if (isMobile(request)) {
      Ok(views.html.mobile.mobiles("Hello"))
    } else {
      val serie = data.series.all.find(_.id == id).getOrElse(data.series.qp)
      Ok(views.html.classic.mobiles(serie))
    }
  }

  def shows0 = Action { implicit request =>
    Redirect(routes.Application.shows("szas"))
  }

  def shows(id: String) = Action { implicit request =>
    if (isMobile(request)) {
      Ok(views.html.mobile.mobiles("Hello"))
    } else {
      val show = data.shows.all.find(_.id == id).getOrElse(data.shows.szas)
      Ok(views.html.classic.show(show))
    }
  }
}