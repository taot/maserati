package maserati.data

import maserati.model.Serie

object series {

  val qp = Serie(
    id = "qp",
    name = "QUATTROPORTE 总裁轿车系列",
    background = "landing/qp/Quattroporte_19.jpg"
  )

  val ghibli = Serie(
    id = "ghibli",
    name = "GHIBLI轿车",
    background = "landing/ghibli/Ghibli.jpg"
  )

  val gt = Serie(
    id = "gt",
    name = "GranTurismo跑车系列",
    background = "landing/gt/GranTurismo_Sport.jpg"
  )

  val gc = Serie(
    id = "gc",
    name = "GranCabrio敞蓬跑车系列",
    background = "landing/gc/Grancabrio_Sport.jpg"
  )

  val concept = Serie(
    id = "concept",
    name = "概念车",
    background = "Alfieri.jpg"
  )

  val all = List(qp, ghibli, gt, gc, concept)
}
