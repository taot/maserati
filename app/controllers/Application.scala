package controllers

import play.api._
import play.api.mvc._
import maserati.data

object Application extends Controller {

  def index = Action { implicit request =>
    if (isMobile(request)) {
      Ok(views.html.mobile.mobiles())
    } else {
      Ok(views.html.classic.mobiles())
    }
  }

  def mobileDetail(id: String) = Action { implicit request =>
    data.models.list_all.find(_.id == id) match {
      case Some(m) =>
        Ok(views.html.classic.mobile_detail(m))
      case None =>
        NotFound
    }
  }

  def ext360(id: String) = Action { implicit request =>
    data.models.list_all.find(_.id == id) match {
      case Some(m) =>
        val device = if (isMobile(request)) {
          "phone"
        } else {
          "pc"
        }
        val imagePath = s"/assets/3dEyeExterior/${m.id}/${device}/images/"
        Ok(views.html.exterior360(m, imagePath))
      case None =>
        NotFound
    }
  }

  def shows0 = Action { implicit request =>
    Redirect(routes.Application.shows(data.shows.all.head.id))
  }

  def shows(id: String) = Action { implicit request =>
    val show = data.shows.all.find(_.id == id).getOrElse(data.shows.szas)
    if (isMobile(request)) {
      Ok(views.html.mobile.show(show))
    } else {
      Ok(views.html.classic.show(show))
    }
  }

  private def isMobile(rh: RequestHeader): Boolean = {
//   return true;
    rh.headers.get("User-Agent") match {
      case Some(s) =>
        val s1 = s.toLowerCase()
        s1.contains("android") || s1.contains("iphone") || s1.contains("ios")
      case None => false
    }
  }
}
