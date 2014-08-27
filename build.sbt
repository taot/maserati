//import com.typesafe.sbt.SbtNativePackager._
//import NativePackagerKeys._

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

//doc in Compile <<= target.map(_ / "none")

//packageArchetype.java_server

//packageDescription in Debian := "Maserati 360 Site"

//maintainer in Debian := "Terry Tao"
