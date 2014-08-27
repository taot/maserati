package maserati.data

import maserati.model.Show

object shows {

  val cdas = Show(
    id = "cdas",
    name = "2014成都车展",
    fullname = "2014成都国际汽车展览会",
    desc =
      """
        |8月29日至9月7日，2014年第十七届成都国际汽车展览会盛大开幕，玛莎拉蒂携旗下四款重磅车型强势亮相，
        |包括奢华典雅的Quattroporte总裁轿车、极速激情的GranTurismo跑车、浪漫阳光的GranCabrio敞蓬跑
        |车以及轻盈动感的Ghibli运动轿车。在玛莎拉蒂品牌一百周年之际，重新诠释玛莎拉蒂品牌传承百年的优雅、
        |奢华、运动与激情。
      """.stripMargin,
    schedule = List(
      "时间：",
      "新闻媒体日 8月29日",
      "公众参观日 8月30日-9月7日"
    ),
    location = List(
      "地址：",
      "成都世纪城新国际会展中心",
      "成都市武侯区世纪城路198号"
    ),
    stage = "玛莎拉蒂展台在H9-03",
    d360 = "CDAS Booth_360 Pano/CDAS Booth_360 Pano_HTML5/1.html",
    d360PC = "CDAS Booth_360 Pano/CDAS Booth_360 Pano_HTML5/1.html",
    galleryCount = 5,
    mapLink = "http://j.map.baidu.com/1cORv"
  )

  val szas = Show(
    id = "szas",
    name = "2014深圳车展",
    fullname = "2014深港澳国际汽车博览会",
    desc =
      """
        |在5月29日至6月4日举办的2014年深港澳国际汽车博览会上，玛莎拉蒂携旗下四款
        |重磅车型强势出击本次车展，包括奢华典雅的全新第六代Quattroporte总裁轿车、
        |极速激情的GranTurismo跑车、浪漫阳光的GranCabrio敞蓬跑车以及轻盈动感的全
        |新Ghibli运动轿车，在全新意大利设计的玛莎拉蒂百年元素双层展台上，倾情诠释
        |玛莎拉蒂品牌传承百年的优雅、奢华、运动与激情。
      """.stripMargin,
    schedule = List(
      "时间：",
      "新闻媒体日 5月29日",
      "公众参观日 5月30日-6月4日"
    ),
    location = List(
      "地址：",
      "深圳会展中心 深圳市福田区福华三路"
    ),
    stage = "玛莎拉蒂展台在4-09",
    d360 = "SZAS Booth_360 Pano/SZAS Booth_360 Pano_HTML5/2.html",
    d360PC = "SZAS Booth_360 Pano/SZAS Booth_360 Pano_HTML5/2.html",
    galleryCount = 5,
    mapLink = "http://j.map.baidu.com/pvWev"
  )

  val bjas = Show(
    id = "bjas",
    name = "2014北京车展",
    fullname = "2014北京国际汽车博览会",
    desc =
      """
        |4月20日 北京-玛莎拉蒂Alfieri概念跑车北京国际车展亚洲首发。同时，玛莎拉蒂
        |GT MC Stradale百年庆典特别版，全新玛莎拉蒂Quattroporte总裁轿车杰尼亚限量版，
        |及玛莎拉蒂全系车型亮相北京车展。
      """.stripMargin,
    schedule = List(
      "时间：",
      "新闻媒体日 4月20日",
      "专业观众参观日 4月21-22日",
      "公众参观日 4月23-29日"
    ),
    location = List(
      "地址：",
      "中国国际展览中心（新馆） 北京市顺义区裕祥路88号"
    ),
    stage = "玛莎拉蒂展台在E413",
    d360 = "BJAS Booth_360 Pano/BJAS Booth_360 Pano_HTML/2.html",
    d360PC = "BJAS Booth_360 Pano/BJAS Booth_360 Pano_HTML/2-1.html",
    galleryCount = 4,
    mapLink = "http://j.map.baidu.com/WIkIv"
  )

  val all = List(cdas, szas, bjas)
}
