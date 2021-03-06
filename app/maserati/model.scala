package maserati

import scala.collection.mutable

package object model {

  case class Serie(
    id: String,
    name: String,
    background: String,
    models: mutable.ListBuffer[Model] = mutable.ListBuffer.empty[Model]
  )

  case class ModelDetail(
    lines: List[(String, String)]
  )

  case class Model(
    id: String,
    title: List[String],
    name: String,
    subName: String,
    serie: Serie,
    detail: ModelDetail,
    detailPicCount: Int,
    interior360: String,
    interior360PC: String,
    exterior360: String,
    exterior360PC: String,
    hasExterior360: Boolean,
    hasExterior360PC: Boolean,
    hasTestDrive: Boolean,
    exterior360Count: Int = 24
  ) {

    serie.models.append(this)

    val thumbnail = s"landing/${serie.id}/models_${id}.png"
    val thumbnailDark = s"landing/${serie.id}/models_${id}_onclick.png"
    val detailPics = (1 to detailPicCount).map { i =>
        s"landing/${serie.id}/${id}_details_photo${i}.jpg"
    }
    /*
    val exterior360 = if (hasExterior360) {
      s"/ext360/${id}"
    } else {
      ""
    }
    val exterior360PC = if (id == "alfieri") {
      s"/assets/360PanosPC/Alfieri_Exterior_360 Pano/Alfieri Exterior 360 Pano_HTML/_MG_4986_1.html"
    } else if (hasExterior360PC) {
      s"/ext360/${id}"
    } else ""
    */
  }

  case class Show(
    id: String,
    name: String,
    fullname: String,
    desc: String,
    schedule: List[String],
    location: List[String],
    stage: String,
    d360: String,
    d360PC: String,
    galleryCount: Int,
    mapLink: String
  ) {
    val gallery = (1 to galleryCount).map { i =>
      s"show/${id}/${id}_gallery${i}.jpg"
    }
  }
}
