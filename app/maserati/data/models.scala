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
    //interior360PC = "/assets/360PanosPC/QP Zegna_Interior_360 Pano/QP Zegna_Interior_360 Pano_HTML/7-2.html",
    interior360PC = "/assets/360PanosPC/Maserati revised/QP Zegna.html",

    exterior360 = "/assets/360Ext/qpzegna/mobile/output/QP Zegna.html",
    exterior360PC = "/assets/360Ext/qpzegna/pc/output/QP Zegna.html",

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
    //interior360PC = "/assets/360PanosPC/QP V8_Interior_360 Pano/QP V8_Interior_360 Pano_HTML/2-4.html",
    interior360PC = "/assets/360PanosPC/Maserati revised/QP V8.html",

    exterior360 = "/assets/360Ext/qpv8/mobile/output/Quattroport V8.html",
    exterior360PC = "/assets/360Ext/qpv8/pc/output/Quattroport V8.html",

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
    //wuhuajie: change panos between qpv6 and ghibli
    interior360 = "/assets/360Panos/Ghibli_Interior_360 Pano/Ghibli_Interior_360 Pano_HTML/4-2.html",
    interior360PC = "/assets/360PanosPC/Maserati revised/Ghibli.html",

//    interior360 = "/assets/360Panos/QP V6_Interior_360 Pano/QP V6_Interior_360 Pano_HTML/3-3.html",
//    interior360PC = "/assets/360PanosPC/Maserati revised/QP V6.html",

    exterior360 = "/assets/360Ext/qpv6/mobile/output/Quattroporte V6.html",
    exterior360PC = "/assets/360Ext/qpv6/pc/output/Quattroporte V6.html",
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
    //wuhuajie: change panos between qpv6 and ghibli
//    interior360 = "/assets/360Panos/Ghibli_Interior_360 Pano/Ghibli_Interior_360 Pano_HTML/4-2.html",
//    interior360PC = "/assets/360PanosPC/Maserati revised/Ghibli.html",

    interior360 = "/assets/360Panos/QP V6_Interior_360 Pano/QP V6_Interior_360 Pano_HTML/3-3.html",
    interior360PC = "/assets/360PanosPC/Maserati revised/QP V6.html",

    exterior360 = "/assets/360Ext/ghibli/mobile/output/Ghibli.html",
    exterior360PC = "/assets/360Ext/ghibli/pc/output/Ghibli.html",

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
    //interior360PC = "/assets/360PanosPC/Ghibli S Q4_Interior_360 Pano/Ghibli S Q4_Interior_360 Pano_HTML/1-2.html",
    interior360PC = "/assets/360PanosPC/Maserati revised/Ghibli S.html",
    exterior360 = "/assets/360Ext/ghiblisq4/mobile/output/Ghibli S.html",
    exterior360PC = "/assets/360Ext/ghiblisq4/pc/output/Ghibli S.html",
    hasExterior360 = true,
    hasExterior360PC = true,
    hasTestDrive = true
  )

  val list_ghibli = List(ghibli, ghiblisq4)

  /**
   * GT
   */

  val gtmcce = Model(
    id = "gtmcce",
    title = List("GT MC Centennial Edition"),
    name = "GT MC Centennial Edition",
    subName = " ",
    serie = series.gt,
    detail = ModelDetail(List(
      ("排量", "4691毫升"),
      ("最高车速", "303公里每小时"),
      ("0至100公里每小时加速", "4.5秒")
    )),
    detailPicCount = 5,
    interior360 = "/assets/360Panos/GT_MC_CE_Interior/mobile/5-rui.html",
    //interior360PC = "/assets/360PanosPC/GT MC Stradale_360 Pano/GT MC Stradale 360 Pano_HTML/2-3.html",
    interior360PC = "/assets/360PanosPC/GT_MC_CE_Interior/pc/5-rui.html",
    hasExterior360 = true,
    hasExterior360PC = true,
    exterior360 = "/assets/360Ext/gtmcce/moblie/output/GT STRADALE.html",
    exterior360PC = "/assets/360Ext/gtmcce/pc/output/GT STRADALE.html",
    hasTestDrive = true
  )

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
    //interior360PC = "/assets/360PanosPC/GT MC Stradale_360 Pano/GT MC Stradale 360 Pano_HTML/2-3.html",
    interior360PC = "/assets/360PanosPC/Maserati revised/GT MC Stradale.html",
    hasExterior360 = true,
    hasExterior360PC = true,
    exterior360 = "/assets/360Ext/gtmc/mobile/output/GranTurismo MC Stradale.html",
    exterior360PC = "/assets/360Ext/gtmc/pc/output/GranTurismo MC Stradale.html",
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
//    interior360PC = "/assets/360PanosPC/GT Sport_Interior_360 Pano/GT Sport 360 Pano_HTML/1-2.html",
    interior360PC = "/assets/360PanosPC/Maserati revised/GT Sport.html",

    exterior360 = "/assets/360Ext/gtsport/mobile/output/GranTurismo Sport.html",
    exterior360PC = "/assets/360Ext/gtsport/pc/output/GranTurismo Sport.html",
    hasExterior360 = true,
    hasExterior360PC = true,
    hasTestDrive = true
  )

  val list_gt = List(gtmcce, gtmc, gtsport)

  /**
   * GC
   */

  val gcmcce = Model(
    id = "gcmcce",
    title = List("GC MC Centennial Edition"),
    name = "GC MC Centennial Edition",
    subName = "  ",
    serie = series.gc,
    detail = ModelDetail(List(
      ("排量", "4691毫升"),
      ("最高车速", "289公里每小时"),
      ("0至100公里每小时加速", "4.9秒")
    )),
    detailPicCount = 5,
    interior360 = "/assets/360Panos/GC_MC_CE_Interior/mobile/7-rui.html",
    //interior360PC = "/assets/360PanosPC/GC Sport_Interior_360 Pano/GC Sport_Interior_360 Pano_HTML/3-2.html",
    interior360PC = "/assets/360PanosPC/GC_MC_CE_Interior/pc/Untitled.html",
    hasExterior360 = true,
    hasExterior360PC = true,
    exterior360 = "/assets/360Ext/gcmcce/moblie/output/Grancabrio.html",
    exterior360PC = "/assets/360Ext/gcmcce/pc/output/Grancabrio.html",
    hasTestDrive = true
  )

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
    //interior360PC = "/assets/360PanosPC/GC Sport_Interior_360 Pano/GC Sport_Interior_360 Pano_HTML/3-2.html",
    interior360PC = "/assets/360PanosPC/Maserati revised/GC.html",
    hasExterior360 = true,
    hasExterior360PC = true,
    exterior360 = "/assets/360Ext/gcs/mobile/output/GranCabrio Sport.html",
    exterior360PC = "/assets/360Ext/gcs/pc/output/GranCabrio Sport.html",
    hasTestDrive = true
  )

  val list_gc = List(gcmcce, gcs)

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
    //interior360PC = "/assets/360PanosPC/Alfieri_Interior_360 Pano/Alfieri Interior 360 Pano_HTML/6-4.html",
    interior360PC = "/assets/360PanosPC/Maserati revised/Alfieri.html",
    exterior360 = "/assets/360Ext/alfieri/mobile/output/images.html",
    exterior360PC = "/assets/360Ext/alfieri/pc/output/images.html",
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

  val list_all_mobile = gcmcce :: gtmcce :: list_all.filter { m => m != gcmcce && m != gtmcce }
}
