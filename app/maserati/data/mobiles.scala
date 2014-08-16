package maserati.data

import maserati.model.{MobileDetail2, MobileDetail0, Mobile}

object mobiles {

  val list_all = list_qp ++ list_ghibli ++ list_gt ++ list_gc ++ list_concept

  /**
   * Quattroporte
   */

  val qpzegna = Mobile(
    id = "qpzegna",
    name = "Quattroporte 杰尼亚限量版",
    subName = "",
    serie = series.qp,
    detail = MobileDetail0(
      emission = 3798,
      maxSpeed = 307,
      acceleration = 4.7
    ),
    detailPicCount = 5,
    exterior360 = "",
    interior360 = "QP Zegna_Interior_360 Pano/QP Zegna_Interior_360 Pano_HTML/7-2.html",
    hasTestDrive = true
  )

  val qpv8 = Mobile(
    id = "qpv8",
    name = "Quattroporte V8",
    subName = "高性能轿车豪华概念",
    serie = series.qp,
    detail = MobileDetail0(
      emission = 3798,
      maxSpeed = 307,
      acceleration = 4.7
    ),
    detailPicCount = 5,
    exterior360 = "",
    interior360 = "QP V8_Interior_360 Pano/QP V8_Interior_360 Pano_HTML/2-4.html",
    hasTestDrive = true
  )

  val qpv6 = Mobile(
    id = "qpv6",
    name = "Quattroporte V6",
    subName = "高性能轿车豪华概念",
    serie = series.qp,
    detail = MobileDetail0(
      emission = 2979,
      maxSpeed = 263,
      acceleration = 5.6
    ),
    detailPicCount = 5,
    exterior360 = "",
    interior360 = "QP V6_Interior_360 Pano/QP V6 360 Pano_HTML/3-3.html",
    hasTestDrive = true
  )

  val list_qp = List(qpzegna, qpv8, qpv6)

  /**
   * Ghibli
   */

  val ghibli = Mobile(
    id = "ghibli",
    name = "Ghibli",
    subName = "每日可享的非凡乐趣",
    serie = series.ghibli,
    detail = MobileDetail0(
      emission = 2979,
      maxSpeed = 263,
      acceleration = 5.6
    ),
    detailPicCount = 5,
    exterior360 = "",
    interior360 = "Ghibli_Interior_360 Pano/Ghibli Interior 360 Pano_HTML/4-2.html",
    hasTestDrive = true
  )

  val ghiblisq4 = Mobile(
    id = "ghiblisq4",
    name = "Ghibli S Q4",
    subName = "每日可享的非凡乐趣",
    serie = series.ghibli,
    detail = MobileDetail0(
      emission = 2979,
      maxSpeed = 284,
      acceleration = 4.8
    ),
    detailPicCount = 5,
    exterior360 = "",
    interior360 = "Ghibli S Q4_Interior_360 Pano/Ghibli S Q4_Interior_360 Pano_HTML/1-2.html",
    hasTestDrive = true
  )

  val list_ghibli = List(ghibli, ghiblisq4)

  /**
   * GT
   */

  val gtmc = Mobile(
    id = "gtmc",
    name = "全新 GranTurismo MC Stradale 跑车",
    subName = "",
    serie = series.gt,
    detail = MobileDetail0(
      emission = 4691,
      maxSpeed = 303,
      acceleration = 4.5
    ),
    detailPicCount = 5,
    exterior360 = "",
    interior360 = "GT MC Stradale_360 Pano/GT MC Stradale 360 Pano_HTML/2-3.html",
    hasTestDrive = true
  )

  val gtsport = Mobile(
    id = "gtsport",
    name = "GranTurismo Sport",
    subName = "沿袭传统，创意进取",
    serie = series.gt,
    detail = MobileDetail0(
      emission = 4691,
      maxSpeed = 303,
      acceleration = 4.8
    ),
    detailPicCount = 5,
    exterior360 = "",
    interior360 = "GT Sport_Interior_360 Pano/GT Sport 360 Pano_HTML/1-2.html",
    hasTestDrive = true
  )

  val list_gt = List(gtmc, gtsport)

  /**
   * GC
   */

  val gcs = Mobile(
    id = "gts",
    name = "GranCabrio Sport",
    subName = "",
    serie = series.gc,
    detail = MobileDetail0(
      emission = 4691,
      maxSpeed = 284,
      acceleration = 5.2
    ),
    detailPicCount = 5,
    exterior360 = "",
    interior360 = "GC Sport_Interior_360 Pano/GC Sport_Interior_360 Pano_HTML/3-2.html",
    hasTestDrive = true
  )

  val list_gc = List(gcs)

  /**
   * Concept
   */

  val alfieri = Mobile(
    id = "alfieri",
    name = "Alfieri 2+2 概念跑车",
    subName = "传承百年经典 引领创新未来",
    serie = series.concept,
    detail = MobileDetail2(List(
      ("气缸数量", "V8引擎"),
      ("最大功率", "460马力"),
      ("最大扭矩转速", "4750转/分")
    )),
    detailPicCount = 5,
    exterior360 = "Alfieri_Exterior_360 Pano/Alfieri Exterior 360 Pano_HTML/_MG_4986_1.html",
    interior360 = "Alfieri_Interior_360 Pano/Alfieri Interior 360 Pano_HTML/6-4.html",
    hasTestDrive = true
  )

  val list_concept = List(alfieri)

}
