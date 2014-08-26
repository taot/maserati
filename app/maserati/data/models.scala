package maserati.data

import maserati.model.{ModelDetail, Model}

object models {

  /**
   * Quattroporte
   */

  val qpzegna = Model(
    id = "qpzegna",
    title = List("Quattroporte", "杰尼亚限量版"),
    name = "Quattroporte",
    subName = "杰尼亚限量版",
    serie = series.qp,
    detail = ModelDetail(List(
      ("排量", "3798毫升"),
      ("最高车速", "307公里每小时"),
      ("0至100公里每小时加速", "4.7秒")
    )),
    detailPicCount = 5,
    interior360 = "/assets/360Panos/QP Zegna_Interior_360 Pano/QP Zegna_Interior_360 Pano_HTML/7-2.html",
    interior360PC = "/assets/360PanosPC/QP Zegna_Interior_360 Pano/QP Zegna_Interior_360 Pano_HTML/7-2.html",
    hasExterior360 = true,
    hasExterior360PC = true,
    hasTestDrive = false
  )

  val qpv8 = Model(
    id = "qpv8",
    title = List("Quattroporte V8"),
    name = "Quattroporte V8",
    subName = "高性能轿车豪华概念",
    serie = series.qp,
    detail = ModelDetail(List(
      ("排量", "3798毫升"),
      ("最高车速", "307公里每小时"),
      ("0至100公里每小时加速", "4.7秒")
    )),
    detailPicCount = 5,
    interior360 = "/assets/360Panos/QP V8_Interior_360 Pano/QP V8_Interior_360 Pano_HTML/2-4.html",
    interior360PC = "/assets/360PanosPC/QP V8_Interior_360 Pano/QP V8_Interior_360 Pano_HTML/2-4.html",
    hasExterior360 = true,
    hasExterior360PC = true,
    hasTestDrive = true
  )

  val qpv6 = Model(
    id = "qpv6",
    title = List("Quattroporte V6"),
    name = "Quattroporte V6",
    subName = "高性能轿车豪华概念",
    serie = series.qp,
    detail = ModelDetail(List(
      ("排量", "2979毫升"),
      ("最高车速", "263公里每小时"),
      ("0至100公里每小时加速", "5.6秒")
    )),
    detailPicCount = 5,
    interior360 = "/assets/360Panos/QP V6_Interior_360 Pano/QP V6_Interior_360 Pano_HTML/3-3.html",
    interior360PC = "/assets/360PanosPC/QP V6_Interior_360 Pano/QP V6 360 Pano_HTML/3-3.html",
    hasExterior360 = true,
    hasExterior360PC = true,
    hasTestDrive = true
  )

  val list_qp = List(qpzegna, qpv8, qpv6)

  /**
   * Ghibli
   */

  val ghibli = Model(
    id = "ghibli",
    title = List("Ghibli"),
    name = "Ghibli",
    subName = "每日可享的非凡乐趣",
    serie = series.ghibli,
    detail = ModelDetail(List(
      ("排量", "2979毫升"),
      ("最高车速", "263公里每小时"),
      ("0至100公里每小时加速", "5.6秒")
    )),
    detailPicCount = 5,
    interior360 = "/assets/360Panos/Ghibli_Interior_360 Pano/Ghibli_Interior_360 Pano_HTML/4-2.html",
    interior360PC = "/assets/360PanosPC/Ghibli_Interior_360 Pano/Ghibli Interior 360 Pano_HTML/4-2.html",
    hasExterior360 = true,
    hasExterior360PC = true,
    hasTestDrive = true
  )

  val ghiblisq4 = Model(
    id = "ghiblisq4",
    title = List("Ghibli S"),
    name = "Ghibli S",
    subName = "每日可享的非凡乐趣",
    serie = series.ghibli,
    detail = ModelDetail(List(
      ("排量", "2979毫升"),
      ("最高车速", "284公里每小时"),
      ("0至100公里每小时加速", "4.8秒")
    )),
    detailPicCount = 5,
    interior360 = "/assets/360Panos/Ghibli S Q4_Interior_360 Pano/Ghibli S Q4_Interior_360 Pano_HTML/1-2.html",
    interior360PC = "/assets/360PanosPC/Ghibli S Q4_Interior_360 Pano/Ghibli S Q4_Interior_360 Pano_HTML/1-2.html",
    hasExterior360 = true,
    hasExterior360PC = true,
    hasTestDrive = true
  )

  val list_ghibli = List(ghibli, ghiblisq4)

  /**
   * GT
   */

  val gtmc = Model(
    id = "gtmc",
    title = List("GranTurismo MC Stradale"),
    name = "全新 GranTurismo MC Stradale 跑车",
    subName = "",
    serie = series.gt,
    detail = ModelDetail(List(
      ("排量", "4691毫升"),
      ("最高车速", "303公里每小时"),
      ("0至100公里每小时加速", "4.5秒")
    )),
    detailPicCount = 5,
    interior360 = "/assets/360Panos/GT MC Stradale_360 Pano/GT MC Stradale_360 Pano_HTML/2-3.html",
    interior360PC = "/assets/360PanosPC/GT MC Stradale_360 Pano/GT MC Stradale 360 Pano_HTML/2-3.html",
    hasExterior360 = true,
    hasExterior360PC = true,
    hasTestDrive = true
  )

  val gtsport = Model(
    id = "gtsport",
    title = List("GranTurismo Sport"),
    name = "GranTurismo Sport",
    subName = "沿袭传统，创意进取",
    serie = series.gt,
    detail = ModelDetail(List(
      ("排量", "4691毫升"),
      ("最高车速", "303公里每小时"),
      ("0至100公里每小时加速", "4.8秒")
    )),
    detailPicCount = 5,
    interior360 = "/assets/360Panos/GT Sport_Interior_360 Pano/GT Sport_Interior_360 Pano_HTML/1-2.html",
    interior360PC = "/assets/360PanosPC/GT Sport_Interior_360 Pano/GT Sport 360 Pano_HTML/1-2.html",
    hasExterior360 = true,
    hasExterior360PC = true,
    hasTestDrive = true
  )

  val list_gt = List(gtmc, gtsport)

  /**
   * GC
   */

  val gcs = Model(
    id = "gcs",
    title = List("GranCabrio Sport"),
    name = "GranCabrio Sport",
    subName = "",
    serie = series.gc,
    detail = ModelDetail(List(
      ("排量", "4691毫升"),
      ("最高车速", "284公里每小时"),
      ("0至100公里每小时加速", "5.2秒")
    )),
    detailPicCount = 5,
    interior360 = "/assets/360Panos/GC Sport_Interior_360 Pano/GC Sport_Interior_360 Pano_HTML/3-2.html",
    interior360PC = "/assets/360PanosPC/GC Sport_Interior_360 Pano/GC Sport_Interior_360 Pano_HTML/3-2.html",
    hasExterior360 = true,
    hasExterior360PC = true,
    hasTestDrive = true
  )

  val list_gc = List(gcs)

  /**
   * Concept
   */

  val alfieri = Model(
    id = "alfieri",
    title = List("Alfieri 2+2", "概念跑车"),
    name = "Alfieri 2+2 概念跑车",
    subName = "传承百年经典 引领创新未来",
    serie = series.concept,
    detail = ModelDetail(List(
      ("气缸数量", "V8引擎"),
      ("最大功率", "460马力"),
      ("最大扭矩转速", "4750转/分")
    )),
    detailPicCount = 5,
    interior360 = "/assets/360Panos/Alfieri_Interior_360 Pano/Alfieri_Interior_360 Pano_HTML/6-4.html",
    interior360PC = "/assets/360PanosPC/Alfieri_Interior_360 Pano/Alfieri Interior 360 Pano_HTML/6-4.html",
    hasExterior360 = true,
    hasExterior360PC = true,
    hasTestDrive = false,
    exterior360Count = 60
  )

  val list_concept = List(alfieri)


  /**
   * All
   */
  val list_all = list_qp ++ list_ghibli ++ list_gt ++ list_gc ++ list_concept
}
