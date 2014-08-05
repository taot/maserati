package maserati.data

import maserati.model.Serie

object series {

  val quattroporte = Serie("quattroporte", "QUATTROPORTE 总裁轿车系列")

  val ghibli = Serie("ghibli", "GHIBLI轿车")

  val all = List(quattroporte, ghibli)
}
