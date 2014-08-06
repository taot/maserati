import maserati.filter.LoggingFilter
import play.api.mvc.WithFilters

object Global extends WithFilters(new LoggingFilter)