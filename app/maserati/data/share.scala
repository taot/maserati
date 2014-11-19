package maserati.data

import java.net.URLEncoder

object share {

  val weiboUrl = {
    val sinaShareLink = "http://service.weibo.com/share/share.php?"
    val site = "http://360.iuseipad.com.cn"
    val title = "#玛莎拉蒂# 传承意大利经典设计和手工定制传统，诠释优雅、奢华、运动和激情，玛莎拉蒂带您体验无与伦比的驾驶体验。"
    val queryStrings = Map(
      "appkey" -> "",
      "title" -> title
//      "url" -> site
    )
    sinaShareLink + queryStrings.map { case (k, v) => k + "=" + URLEncoder.encode(v, "UTF-8") }.mkString("&")
  }

//  val email = "support@maserati.com"
}
