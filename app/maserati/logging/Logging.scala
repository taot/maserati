package maserati.logging

trait Logging {
  
  protected val logger = new Logger(this.getClass)
}
