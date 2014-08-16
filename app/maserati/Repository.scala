package maserati

import scala.collection.mutable
import maserati.model.{Model, Serie}

object Repository {

  val series = mutable.ListBuffer.empty[Serie]

  val mobiles = mutable.ListBuffer.empty[Model]

  def findSerieById(id: String): Serie = series.find(_.id == id).getOrElse {
    throw new RuntimeException("Cannot find serie by id " + id)
  }

  def load(): Unit = {

  }
}