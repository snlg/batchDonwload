// const url = require('url')
// const path = require('path')
// const pictureDownloader = require('./pictureDownloader')

// let imgUrls = [
//   "//img3.dian.so/lhc/2018/12/24/1125w_969h_DF55C1545643524.png",
//   "//img3.dian.so/lhc/2018/12/04/1125w_1014h_CEC981543893007.png",
//   "//img3.dian.so/lhc/2018/12/24/1125w_969h_08D2B1545643574.png",
//   "//img3.dian.so/lhc/2018/12/04/1125w_1014h_BF4551543893658.png",
//   "//img3.dian.so/lhc/2018/12/24/1125w_969h_E38331545643600.png",
//   "//img3.dian.so/lhc/2018/12/04/1125w_1014h_388541543893675.png",
//   "//img3.dian.so/lhc/2018/12/24/1125w_969h_DAA8C1545643680.png",
//   "//img3.dian.so/lhc/2018/12/04/1125w_1014h_388541543893675.png",
//   "//img3.dian.so/lhc/2018/11/22/300w_300h_C08D41542869345.gif",
//   "//img3.dian.so/lhc/2018/10/26/124w_124h_C8DA81540523941.gif",
//   "//img3.dian.so/lhc/2018/12/23/18w_34h_E06AC1545550263.png",
//   "//img3.dian.so/lhc/2018/12/23/195w_73h_DA7671545550304.png",
//   '//img3.dian.so/lhc/2018/11/19/786w_384h_410B81542611361.png',
//   '//img3.dian.so/lhc/2018/11/19/786w_384h_848BB1542611396.gif',
//   '//img3.dian.so/lhc/2018/11/19/786w_384h_3EB941542611409.gif',
//   '//img3.dian.so/lhc/2018/11/19/786w_384h_DC3C51542611424.gif',
//   '//img3.dian.so/lhc/2018/11/19/786w_384h_C93401542611443.gif',
//   '//img3.dian.so/lhc/2018/11/19/786w_384h_6C9471542611458.gif',
//   '//img3.dian.so/lhc/2018/11/19/786w_384h_254581542611475.gif',
//   '//img3.dian.so/lhc/2018/11/19/786w_384h_F7D071542611487.gif',
//   '//img3.dian.so/lhc/2018/11/15/786w_384h_F695B1542263959.png',
//   '//img3.dian.so/lhc/2018/11/15/786w_384h_1BC8F1542263971.gif',
//   '//img3.dian.so/lhc/2018/11/15/786w_384h_B541B1542263985.gif',
//   '//img3.dian.so/lhc/2018/11/15/786w_384h_265951542263997.gif',
//   '//img3.dian.so/lhc/2018/11/15/786w_384h_CF0961542264010.gif',
//   '//img3.dian.so/lhc/2018/11/15/786w_384h_DD6111542264022.gif',
//   '//img3.dian.so/lhc/2018/11/15/786w_384h_866A91542264034.gif',
//   '//img3.dian.so/lhc/2018/11/15/786w_384h_8F7381542264052.gif',
//   '//img3.dian.so/lhc/2018/11/15/786w_384h_5DB541542264063.gif',
//   '//img3.dian.so/lhc/2018/12/05/117w_138h_EB9B11544003438.png',
//   '//img3.dian.so/lhc/2018/12/05/186w_207h_E758C1544003426.png',
//   '//img3.dian.so/lhc/2018/12/23/117w_138h_8392A1545550002.png',
//   '//img3.dian.so/lhc/2018/12/23/186w_207h_EC8A91545550018.png',
//   "//img3.dian.so/lhc/2018/12/19/66w_60h_642F01545191019.png",
//   "//img3.dian.so/lhc/2018/12/19/510w_480h_A766E1545188574.png",
//   "//img3.dian.so/lhc/2018/12/19/72w_72h_760AD1545189110.png",
//   "//img3.dian.so/lhc/2018/12/19/72w_72h_B3F8A1545189675.png",
//   '//img3.dian.so/lhc/2018/07/02/873w_873h_67FBE1530519596.png',
//   '//img3.dian.so/lhc/2018/11/22/705w_705h_986221542869913.png',
//   '//img3.dian.so/lhc/2018/12/26/470w_470h_861671545816150.gif',
//   '//img3.dian.so/lhc/2018/12/26/470w_470h_861671545816150.gif',
//   "//img3.dian.so/lhc/2018/12/04/1125w_1014h_703F71543910576.png",
//   "//img3.dian.so/lhc/2018/12/27/1125w_846h_0029E1545896760.png",
//   "//img3.dian.so/lhc/2018/11/22/1125w_846h_692FA1542874116.png",
//   "//img3.dian.so/lhc/2018/12/05/627w_312h_730661544000523.png",
//   "//img3.dian.so/lhc/2018/12/05/762w_369h_D856B1544000545.png",
//   "//img3.dian.so/lhc/2018/12/24/693w_342h_C945F1545657177.png",
//   "//img3.dian.so/lhc/2018/12/05/500w_200h_214791543993877.gif",
//   "http://img3.dian.so/lhc/2018/11/16/54w_360h_F4C561542340366.gif",
//   "//img3.dian.so/lhc/2018/12/05/54w_360h_EF04B1543990816.gif",
//   "//img3.dian.so/lhc/2018/11/15/516w_339h_325BC1542253497.png",
//   "//img3.dian.so/lhc/2018/12/05/696w_339h_EEA131543990896.png",
//   '//img3.dian.so/lhc/2018/11/05/132w_132h_AD5EF1541399527.png',
//   '//img3.dian.so/lhc/2018/11/05/132w_132h_AD5EF1541399527.png',
//   "//img3.dian.so/lhc/2018/12/26/135w_135h_5D2C71545808415.png",
//   "//img3.dian.so/lhc/2018/11/05/51w_51h_9BD3B1541410431.png",
//   "//img3.dian.so/lhc/2018/12/26/135w_135h_ABC991545808490.png",
//   "//img3.dian.so/lhc/2018/11/05/51w_51h_F64371541410612.png",
//   "//img3.dian.so/lhc/2018/12/26/135w_135h_FEBA01545808554.png",
//   "//img3.dian.so/lhc/2018/11/05/51w_51h_28D401541410629.png",
//   "//img3.dian.so/lhc/2018/12/26/135w_135h_6FD031545808577.png",
//   "//img3.dian.so/lhc/2018/11/05/51w_51h_3FFAE1541410645.png",
//   "//img3.dian.so/lhc/2018/11/20/891w_531h_D3BFF1542700897.png",
//   "//img3.dian.so/lhc/2018/12/23/900w_540h_96F081545557865.png",
//   "//lhc-image.oss-cn-beijing.aliyuncs.com/lhc/2017/06/15/300w_300h_802781497510185.gif",
//   "//lhc-image.oss-cn-beijing.aliyuncs.com/lhc/2017/07/26/345w_345h_FFB141501051371.png",
//   "//lhc-image.oss-cn-beijing.aliyuncs.com/lhc/2017/06/16/330w_330h_0026E1497600461.png",
//   "//lhc-image.oss-cn-beijing.aliyuncs.com/lhc/2017/11/23/222w_252h_604D31511420899.png"
// ]

// let imgUrl = [
//   "http://img3.dian.so/lhc/2018/12/24/1125w_969h_DF55C1545643524.png",
//   "http://img3.dian.so/lhc/2018/12/04/1125w_1014h_CEC981543893007.png",
// ]
// imgUrl.map((imgUrl,i) => {
//   console.log(imgUrl)
//   console.log(url.parse(imgUrl))
//   console.log(url.parse(imgUrl).pathname)
//   //文件路径
//   let filePath = url.parse(imgUrl).pathname
//   //获取最后一个.的位置
//   let index= filePath.lastIndexOf(".");
//   //获取后缀
//   let ext = filePath.substr(index+1);
//   //输出结果
//   console.log(ext);
//   // let filename = path.parse(url.parse(imgUrl).pathname).base
//   pictureDownloader(imgUrl, path.resolve(`/${i}.${ext}`))
// })