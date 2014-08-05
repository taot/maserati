package maserati

package object model {

  case class Serie(id: String, name: String)

  case class Mobile(id: String, name: String, serie: Serie)
}
