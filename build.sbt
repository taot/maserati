name := """maserati"""

version := "1.0-SNAPSHOT"

lazy val root = (project in file(".")).enablePlugins(PlayScala)

scalaVersion := "2.11.1"

libraryDependencies ++= Seq(
//  filters
  // jdbc,
  // anorm,
  // cache,
  // ws
)
