package maserati

import scala.collection.mutable

package object model {

  case class Serie(
    id: String,
    name: String,
    background: String,
    models: mutable.ListBuffer[Model] = mutable.ListBuffer.empty[Model]
  )

  trait ModelDetail
  case class ModelDetail0(
    emission: Int,
    maxSpeed: Int,
    acceleration: Double
  ) extends ModelDetail
  case class ModelDetail2(
    lines: List[(String, String)]
  ) extends ModelDetail

  case class Model(
    id: String,
    name: String,
    subName: String,
    serie: Serie,
    detail: ModelDetail,
    detailPicCount: Int,
    exterior360: String,
    interior360: String,
    hasTestDrive: Boolean
  ) {

    serie.models.append(this)

    val thumbnail = s"landing/${serie.id}/models_${id}.png"
    val thumbnailDark = s"landing/${serie.id}/models_${id}_onclick.png"
    val detailPics = (1 to detailPicCount).map { i =>
        s"landing/${serie.id}/${id}_details_photo_${i}.jpg"
    }
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
    galleryCount: Int
  ) {
    val gallery = (1 to galleryCount).map { i =>
      s"show/${id}/${id}_gallery${i}.jpg"
    }
  }
}
