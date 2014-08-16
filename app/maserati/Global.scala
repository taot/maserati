package maserati

import maserati.filter.LoggingFilter
import play.api.Application
import play.api.mvc.WithFilters
import maserati.logging.Logging

object Global extends WithFilters(new LoggingFilter) with Logging {

  override def onStart(app: Application): Unit = {
    super.onStart(app)
    for (m <- maserati.data.models.list_all) {
      logger.info("{}: {}", m.id, m.name)
    }
  }
}