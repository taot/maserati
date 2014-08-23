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
    exterior360: String,
    exterior360Phone: String,
    interior360: String,
    hasTestDrive: Boolean
  ) {

    serie.models.append(this)

    val thumbnail = s"landing/${serie.id}/models_${id}.png"
    val thumbnailDark = s"landing/${serie.id}/models_${id}_onclick.png"
    val detailPics = (1 to detailPicCount).map { i =>
        s"landing/${serie.id}/${id}_details_photo${i}.jpg"
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
    galleryCount: Int,
    mapLink: String
  ) {
    val gallery = (1 to galleryCount).map { i =>
      s"show/${id}/${id}_gallery${i}.jpg"
    }
  }
}
