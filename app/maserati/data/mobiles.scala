package maserati.data

import maserati.data.series._
import maserati.model.Mobile

object mobiles {

  val quattroporte_limited = Mobile("quattroporte_limited", "Quattroporte 杰尼亚限量版", quattroporte)

  val quattroporte_v8 = Mobile("quattroporte_v8", "Quattroporte V8", quattroporte)

  val all = List(quattroporte_limited, quattroporte_v8)
}
