import filter.UserAgentFilter
import play.api.mvc.WithFilters

object Global extends WithFilters(new UserAgentFilter) {

}
