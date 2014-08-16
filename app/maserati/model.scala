package maserati

package object model {

  case class Serie(
    id: String,
    name: String,
    background: String
  )

  trait MobileDetail
  case class MobileDetail0(
    emission: Int,
    maxSpeed: Int,
    acceleration: Double
  ) extends MobileDetail
  case class MobileDetail2(
    lines: List[(String, String)]
  ) extends MobileDetail

  case class Mobile(
    id: String,
    name: String,
    subName: String,
    serie: Serie,
    detail: MobileDetail,
    detailPicCount: Int,
    exterior360: String,
    interior360: String,
    hasTestDrive: Boolean
  ) {
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
