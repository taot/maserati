package controllers

import play.api._
import play.api.mvc._
import maserati.Util.isMobile
import maserati.data

object Application extends Controller {

  def index = Action {
    Redirect(routes.Application.mobiles("qp"))
  }

  def mobiles(pSerie: String) = Action { implicit request =>
    if (isMobile(request)) {
      Ok(views.html.mobile.mobiles("Hello"))
    } else {
      val serie = data.series.all.find(_.id == pSerie).getOrElse(data.series.qp)
      Ok(views.html.classic.mobiles(serie))
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