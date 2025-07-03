/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/04/30/shangluo-2023/Aerial_view.jpg","91b8ea664642fe0f562d384bbb5b484a"],["/2023/04/30/shangluo-2023/ceremony_juice.jpg","8df588f46c24e5a9d7278a89edfecc97"],["/2023/04/30/shangluo-2023/ceremony_noodles.jpg","cecefb0ff0f88346ece917e1d9afb2de"],["/2023/04/30/shangluo-2023/index.html","568c53d25fa5dcf798e8e2c720622fca"],["/2023/04/30/shangluo-2023/xinchangjie.jpg","b31ada67488ea0e54b4aba39212464b0"],["/2023/08/15/shanghai-2023/A_cosplayer_casting_Zhongli_and_his_partner_in_Genshin_FES,_Aug_12_2023.jpg","39162762abaee0935dc9bef004c0dfaf"],["/2023/08/15/shanghai-2023/Nahida.png","69dd9af7a96a91571f27be33b4de1cb7"],["/2023/08/15/shanghai-2023/SHM2-11.jpg","1e7e6ab23e4a2b550e1710f0e6670dbb"],["/2023/08/15/shanghai-2023/SHM3-39.jpg","e8aa3e6906c20ceb70a2662af79cec76"],["/2023/08/15/shanghai-2023/SHM5-15.jpg","a96597f913fe0ecee717c6752b9f4b66"],["/2023/08/15/shanghai-2023/SHM6.jpg","c4fd351b38c86fee234f098065dbaf67"],["/2023/08/15/shanghai-2023/Shanghai_Maglev_Train_near_Haitiansan_Road_Station,_Aug_11_2023.jpg","6094a15f0a1ac8b433e9c589aaa6e970"],["/2023/08/15/shanghai-2023/Skyline_of_Shanghai_at_day,_Aug_10_2023.jpg","acd030ff421c254b25af1c00c78f4dd9"],["/2023/08/15/shanghai-2023/Skyline_of_Shanghai_at_night,_Aug_10_2023.jpg","94373812978fbaac51b483b63b5b8be4"],["/2023/08/15/shanghai-2023/The_\"suite_of_3\"_of_Shanghai_at_day,_Aug_10_2023.jpg","276ec86e6dbf6fe36b9e7287fa40db42"],["/2023/08/15/shanghai-2023/index.html","cef108db84b6775e8bc5f5129292f6ee"],["/2023/09/21/xam1-3-2023/Interview.jpg","14d09fdceb13933c4d97ea9e75c6d04f"],["/2023/09/21/xam1-3-2023/MapCheck.png","1bf50555152d9dc188f3047853cbc866"],["/2023/09/21/xam1-3-2023/Momento.jpg","ed6c0e33b303f74db44266d539f8e858"],["/2023/09/21/xam1-3-2023/TicketCheck.jpg","4410dbf06b2adfa6ad9f5c04a81d947a"],["/2023/09/21/xam1-3-2023/index.html","3727524493e076dda80876b33efdfe8f"],["/2024/01/10/last-Z/BDK06.jpg","d9d575950f037565cd3f594b27b05570"],["/2024/01/10/last-Z/DKZ4.jpg","866a980529eeb58e3954b0c83fce6455"],["/2024/01/10/last-Z/Platform_ticket.png","3f5ef0ec0ff3ebe0622e9096ead19f15"],["/2024/01/10/last-Z/Platform_ticket1.jpg","a6c4220c68c05c6f4d7a8dd32f09a6d4"],["/2024/01/10/last-Z/Platform_ticket2.jpg","ede91fd78560b06e1441a179a9813bdd"],["/2024/01/10/last-Z/RW19T-554393_xian.jpg","5a64b1b6b284c12397fd6ccdc71b51b9"],["/2024/01/10/last-Z/Songlindian.png","ed311d289e4c0959f1ad5bf90c0a85e2"],["/2024/01/10/last-Z/Z19_ticket.jpg","8c96bf369b99f4c2017aadf81e4539f6"],["/2024/01/10/last-Z/Z20_start.png","6fe5fbe261ad2d88f8a92234b825f50c"],["/2024/01/10/last-Z/Z20_stopped.png","f2348a19903ac82242f62eef447a5cd3"],["/2024/01/10/last-Z/Z2_shijiazhuang.png","daf85098dfb389c5962bd6d87fcf1d72"],["/2024/01/10/last-Z/Z44_ticket_check.png","1e57ab14e591c803a2066824d806ed71"],["/2024/01/10/last-Z/beijing_west_early_check.png","b3f5a2deeb698bee6068a481c3feb57d"],["/2024/01/10/last-Z/beijing_west_soft_lounge.png","fb1dce51dac90c1b1ba0205431117dfe"],["/2024/01/10/last-Z/dest_board_z19.jpg","806232cf5d8dbcfc39677655202d966e"],["/2024/01/10/last-Z/dest_board_z44.jpg","5e708a1df1ddfef5682e13213a02489e"],["/2024/01/10/last-Z/dest_board_z88.jpg","043639b947f905773b898905a5c0875f"],["/2024/01/10/last-Z/index.html","df55d328211be5298d1b024ef8adcd1c"],["/2024/01/10/last-Z/semi-bed_z44.png","22955d1fb8d62491ac771749816c36c6"],["/2024/01/10/last-Z/waiting.png","dda091f317142678b67c3c452a2cb12d"],["/2024/01/10/last-Z/z19_ticket_check.png","2eed5392b0b9a530e035b5b3c33bd00f"],["/2024/01/24/Baoji-Chengdu-Railway-North/6063_Approaching_Qinling_Railway_Station.jpg","f03ceef558a7cb2b43ce5c101ec4681f"],["/2024/01/24/Baoji-Chengdu-Railway-North/640.png","d01089bd81690b6b2e8dfee1869b46da"],["/2024/01/24/Baoji-Chengdu-Railway-North/Destination_Sign_Board_6063_4.jpg","dacd2b04b600dadc939127ee1fbf4f0d"],["/2024/01/24/Baoji-Chengdu-Railway-North/MeetPoint.jpg","1231102e3da6386325930e410bf97231"],["/2024/01/24/Baoji-Chengdu-Railway-North/Profile1.jpg","be9ef7321eb5313019699f59b3121e1e"],["/2024/01/24/Baoji-Chengdu-Railway-North/Profile2.jpg","baf7a75e6059e96eaa1bb1420b14edfd"],["/2024/01/24/Baoji-Chengdu-Railway-North/Qinling_Great_Tunnel_(47).jpg","385008a57b8c74b769b803a861189f94"],["/2024/01/24/Baoji-Chengdu-Railway-North/Qinling_Station_Southview.jpg","12e778cf80d33d754aca59aa50d72140"],["/2024/01/24/Baoji-Chengdu-Railway-North/dest_board_t7_1.jpg","22d27088aba9a714b147bf7cd444be15"],["/2024/01/24/Baoji-Chengdu-Railway-North/index.html","30049166bbcb516bee30d5a06eadb62e"],["/2024/02/12/lakeblue-double-decker/Seats_upper.png","917a841db872835a66a497e4814e08d5"],["/2024/02/12/lakeblue-double-decker/cover.png","71ba4f21b73332a9a0d2297bbedcf517"],["/2024/02/12/lakeblue-double-decker/dest_board.jpg","9f9c604ec01d633a1eff42248e96902f"],["/2024/02/12/lakeblue-double-decker/double_decker_timetable_2024.png","626958b055c557d6a11fbb9c0bf59f5e"],["/2024/02/12/lakeblue-double-decker/index.html","2b8c27af3a3e36c9808d82f1fe05f53b"],["/2024/02/12/lakeblue-double-decker/k8412_ticket_check.jpg","1782f1b95b7be0ec9828ca2b934bd26d"],["/2024/03/02/original-liveries-2024-spring/YW25G-669449_&_YW25G-669686_Coach_Joint,_Mar_1_2024.jpg","2533f3991a762b6e925773ddff09bd8c"],["/2024/03/02/original-liveries-2024-spring/Zhen'an.jpg","cb635c702d0bf85b36af3f2d74dad25f"],["/2024/03/02/original-liveries-2024-spring/cover.jpg","b3a7375b87f8ef4a25cd827cda2af549"],["/2024/03/02/original-liveries-2024-spring/dest_board_k4080.jpg","84986cc84cac0bcbb60942b00abcb934"],["/2024/03/02/original-liveries-2024-spring/dest_board_k4219.jpg","4e1c483eeb5f4a5d9bac774616ddfaf9"],["/2024/03/02/original-liveries-2024-spring/index.html","c87816490383d14e92a6aca040867ab7"],["/2024/04/04/longhai/920Crowd.jpg","fe18ada0fb497d2d90998a342eef4264"],["/2024/04/04/longhai/DSC06605.jpg","bd7e6b8ea6de27f33c72530196a6283f"],["/2024/04/04/longhai/IMG_6717.png","e9fe8e9832043909857c081b2ba3874e"],["/2024/04/04/longhai/IMG_6721.png","d407b42003cf03e8a499d65e2d44b7a4"],["/2024/04/04/longhai/IMG_6725.png","f7861c40aa8e31cdf68a31b77192d54b"],["/2024/04/04/longhai/IMG_6727.png","6f4585233112020f184b43c5a4ed8116"],["/2024/04/04/longhai/IMG_6728.png","99b68c49e58ecfb7d8a3262042a01b11"],["/2024/04/04/longhai/IMG_6729.png","42f626c58ccccc63b5fde16ff6c0c711"],["/2024/04/04/longhai/IMG_7270.jpg","cf64fdde002c735978d5072f932a608c"],["/2024/04/04/longhai/IMG_7277.jpg","0172e3766e35163bc5a0d4357d9062f7"],["/2024/04/04/longhai/Putaoyuan_Railway_Station,_Apr_4_2024.jpg","3032203b50e18b4451afc22463367782"],["/2024/04/04/longhai/Qingya_Tunnel.jpg","6f2cee166668113613fff9aea409d6d3"],["/2024/04/04/longhai/Wrong_screen_in_Yinzhen1.png","9db936069ba12df45933d5b17bec66fb"],["/2024/04/04/longhai/Wrong_screen_in_Yinzhen2.png","0551b5ece9ac9325572a4c60fb216372"],["/2024/04/04/longhai/Wrong_screen_in_Yinzhen3.png","d613d1ea73454b0dc128e55a933ab08b"],["/2024/04/04/longhai/baojixia3.jpg","6e58c77112c78c1fa558467e506394e7"],["/2024/04/04/longhai/dest_board_k5442.jpg","ecacec059cf31788c64416275e3be481"],["/2024/04/04/longhai/index.html","6916d5c9899c641e573be07293d4ad6c"],["/2024/05/28/Shanghai-Bahn/SHM2-11.jpg","1e7e6ab23e4a2b550e1710f0e6670dbb"],["/2024/05/28/Shanghai-Bahn/SHM3-39.jpg","e8aa3e6906c20ceb70a2662af79cec76"],["/2024/05/28/Shanghai-Bahn/SHM5-15.jpg","a96597f913fe0ecee717c6752b9f4b66"],["/2024/05/28/Shanghai-Bahn/SHM6.jpg","c4fd351b38c86fee234f098065dbaf67"],["/2024/05/28/Shanghai-Bahn/SHM7-11.jpg","9e373000e8763ef4fb93a8ad7766a62d"],["/2024/05/28/Shanghai-Bahn/index.html","7211f074ae2fa798b6ec4b6c08ddd28f"],["/2024/06/02/makeRecord/index.html","e015d394b5b8a83f10318fda8b791a50"],["/2024/06/22/shanghai-2024/D124-railmap.png","0912b59e31573e24d7da3229b8a7827c"],["/2024/06/22/shanghai-2024/D92-railmap.png","46ae4ad5a0c351f363d8a53c47f17298"],["/2024/06/22/shanghai-2024/IMG_7571.jpg","8684d9b739319b1eb11717b45002f673"],["/2024/06/22/shanghai-2024/Xujiahui-in-textbook.png","7c8f7135207af42f70294335d0915f5c"],["/2024/06/22/shanghai-2024/cover2024.jpg","adf8de7cb3f56efcb1db6a08cbbb406a"],["/2024/06/22/shanghai-2024/index.html","27ba1a2e681c66513dceac5e16d66a04"],["/2024/06/24/Kryptographie/CaesarSS.png","05580121608872179e01e7df30bdb775"],["/2024/06/24/Kryptographie/CaesarSS2.png","ec7505adc6a9a007a393ef1f1985ebf6"],["/2024/06/24/Kryptographie/DESSS.png","eeb0b222691c49305107132c70eb7515"],["/2024/06/24/Kryptographie/RSASS.png","3cc6496218232b9fd657e377123cb2b1"],["/2024/06/24/Kryptographie/Silver-Wolf.jpg","97edc92a028b235d2e8626e5e30c5ec4"],["/2024/06/24/Kryptographie/affineSS1.png","22dc6e3c3eccbcf35d0e87837ffb347b"],["/2024/06/24/Kryptographie/affineSS2.png","1c53661d0d0aec59d6274e80c4f4a933"],["/2024/06/24/Kryptographie/fcSS1.png","7ac4c8c8e353d35331e4c61800db1a56"],["/2024/06/24/Kryptographie/fcSS2.png","79cf17cfbb2bdae1a0faccfbc1c46e37"],["/2024/06/24/Kryptographie/fcSS3.png","cfc82926a14fc94035648b712c50650f"],["/2024/06/24/Kryptographie/fcSS4.png","820d43c428d8b8c64d16466f609a6c46"],["/2024/06/24/Kryptographie/fcSS5.png","a203208a00aee81a5bf24a7d1ecb38ea"],["/2024/06/24/Kryptographie/index.html","b2dd8f01d8980f22aa8fd889ea38d78f"],["/2024/06/24/Kryptographie/mdSS1.png","ce3fbfd18db2da773e1437dd42352361"],["/2024/06/24/Kryptographie/mdSS2.png","cedf58b4e81d830f0520a2beb335aeee"],["/2024/06/24/Kryptographie/saSS1.png","4569868280ea73ac8abf8204371628f9"],["/2024/06/24/Kryptographie/saSS2.png","f12b206ebb6e337b099c920b67c565df"],["/2024/07/13/CRH2-series-2024/A_man_with_computer.png","57bc24c638a9409ac7fb7616e642a3a0"],["/2024/07/13/CRH2-series-2024/CRH2B-moisture-in-window.jpg","66f7149e7529b6cee20b31e2703d48f3"],["/2024/07/13/CRH2-series-2024/IMG_7872.gif","740c9d6d6e991ecc96dfeac0cff9da2f"],["/2024/07/13/CRH2-series-2024/ZE211100.jpg","717915da6b6957b9976740707b4296cf"],["/2024/07/13/CRH2-series-2024/index.html","8701429b7f61ccb8df418852c61dad26"],["/2024/08/11/the-last-nd5-nanjing/Guanghuamen.png","76f797b1faa1bfccf24193c36d5b5bc1"],["/2024/08/11/the-last-nd5-nanjing/ND5-0317@Tuchengtou20240823.jpg","059da0da375949b922c5ba87fca0e875"],["/2024/08/11/the-last-nd5-nanjing/Xianhemen.png","205c7fbe72e45d16a36c7a4a362b59b6"],["/2024/08/11/the-last-nd5-nanjing/Xishanqiao.png","844e693bbd161efc1d65737992ababc6"],["/2024/08/11/the-last-nd5-nanjing/Zhongheqiao.png","9d72e4f42c401c6580269d68800df21d"],["/2024/08/11/the-last-nd5-nanjing/ZhongheqiaoBetter.png","fc443621d909b18710cec5fb377b851a"],["/2024/08/11/the-last-nd5-nanjing/ZhongheqiaoCrowd.png","21995325885ff0d90d766952b18435f1"],["/2024/08/11/the-last-nd5-nanjing/cover.jpg","ed01601fed102c69abf4463c17ad2329"],["/2024/08/11/the-last-nd5-nanjing/index.html","4f2e61484d52e03d21aeeaf6ee21bf43"],["/2024/09/22/xiAn-Luftstrassenbahn-2024/Construction_Site_of_Xi'an_Hi-Tech_District_Light-rail,_Jun_15_2023.jpg","1a99d69a72d9faa54cbfce6e5519ee38"],["/2024/09/22/xiAn-Luftstrassenbahn-2024/People_in_a_restaurant_looking_at_Xi'an_Hi-Tech_Tram_EPC,_Jan_28_2024.jpg","ca0a140c902fc7f3cc3cc45afbda1c98"],["/2024/09/22/xiAn-Luftstrassenbahn-2024/index.html","b1e45b5ce9efd4286c0d1a94a40dd144"],["/2024/09/22/xiAn-Luftstrassenbahn-2024/route_map.png","47b27e721e88b33e9517075b3c310d01"],["/2024/09/24/D128-Schlafzuege-1-Klasse-2024/index.html","8ceb77a288162b760023794634b4f02d"],["/2025/06/24/fxxk-xiAn/Fog_in_Xidian_University,_Jan_2022.jpg","c9758a5dcf56077c726e3426174a4126"],["/2025/06/24/fxxk-xiAn/HotspotTrend.png","2bb10d8314700d7164d003f626f7356b"],["/2025/06/24/fxxk-xiAn/Jan-van-Eyck.png","17554043104da60f0ceeb17b70ef0def"],["/2025/06/24/fxxk-xiAn/PinkKeyboard-Mainview.jpg","3e3a09d86e12ad642f64f33e6495e131"],["/2025/06/24/fxxk-xiAn/Prize-1.png","5cf81d1e01a175bcedfc94878be6628d"],["/2025/06/24/fxxk-xiAn/Prize-2.png","0706d0832dc70abfe88522285d9b47f8"],["/2025/06/24/fxxk-xiAn/RankTrend.png","79482d9926298c8eafb4661d86ff5d1a"],["/2025/06/24/fxxk-xiAn/VegeOfHero.png","c3fd3766e6156c165ba7d0c7466c1a86"],["/2025/06/24/fxxk-xiAn/Yan'an-Skyline.png","6f2c732f1528785abbde5b7c988b202c"],["/2025/06/24/fxxk-xiAn/cover.jpg","311c4450432bee2cced8c3c92fec6068"],["/2025/06/24/fxxk-xiAn/cover.png","f9a733ed587724360c0e0b2f7555d63a"],["/2025/06/24/fxxk-xiAn/index.html","dd3d06e376fe3eb29096fbfcc8f53a74"],["/2025/06/24/fxxk-xiAn/oversized-img2021.png","06f580e8225a60536798dc165ece7c56"],["/2025/06/24/fxxk-xiAn/pandemicCall.png","5b54a9edfec0d6ee72a3ea5285a95976"],["/2025/06/24/fxxk-xiAn/toc2021.png","0918421531cedf6b9d8abf4eb6ecef1b"],["/404.html","762235780dda35e9d8047cdf15170fa7"],["/archives/2023/04/index.html","9bd62496fcd901da926310cbb899731e"],["/archives/2023/08/index.html","2e2228d30ed15570d999159f7f459028"],["/archives/2023/09/index.html","a7197092165328d9e3cd41a140fe7fc9"],["/archives/2023/index.html","d0a33e46b6ea2151125ecc36676928fc"],["/archives/2024/01/index.html","9c186c18a30726a37a62e08df1171c77"],["/archives/2024/02/index.html","e8d8c7291ff870b50787e229c504892f"],["/archives/2024/03/index.html","c94775bccb6528dd2a0f77af0386da8d"],["/archives/2024/04/index.html","2754a75e761a965aa10305b201612748"],["/archives/2024/05/index.html","41eb1bcb17cca9a8164d877cf4a38fa9"],["/archives/2024/06/index.html","2795dc2ba196ad6b06b125061a233607"],["/archives/2024/07/index.html","62a77fc03fc77bd440d2d95536402912"],["/archives/2024/08/index.html","f3e1ed1a9f81852f90db324ada1ca065"],["/archives/2024/09/index.html","b522c1367860bd2a1573086e3812c48a"],["/archives/2024/index.html","061feabcbc5791e03f4689aaa89d412a"],["/archives/2024/page/2/index.html","de9856bff35994ba57b88f1b14b010eb"],["/archives/2025/06/index.html","119c00892bf243007551090d86f82f8b"],["/archives/2025/index.html","5fff2230a109a4323bf5709bd453bca6"],["/archives/index.html","e7a483c0c081966e467f726dfa338d37"],["/archives/page/2/index.html","b9a90c55e8e2618ea49f431ea4c40e89"],["/categories/Bibliography/index.html","5ddcf9fa15c673ed3538ecf8a0883ce1"],["/categories/Configuration/index.html","f7f268ee012ab3f78ae4d1bd9a85edb8"],["/categories/Railways/Pushed-by-Anime/index.html","26e7894ed08a0ee3b3a4628459fd0def"],["/categories/Railways/index.html","f5ba85f8cc6be98453e64c9165d1ce5b"],["/categories/Railways/page/2/index.html","ca4e96a104cb4e3c299fccf646cf1d63"],["/categories/Review/index.html","eeeb516390e51cce6895a48ceda3bec7"],["/categories/index.html","dbe37a1e2bff4b0e8e6cc5a5f3492ffd"],["/css/index.css","15bc829a2a7894941a270cf5fe99f122"],["/css/my.css","b8a83adda75244f114d142a6c54fbe71"],["/css/myen.css","a8443a811fcf693161e28aff2de66027"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/RobotoCondensed-Italic-VariableFont_wght.ttf","df70e7fafa15ce9c4670c7d3eca8df5e"],["/fonts/RobotoCondensed-VariableFont_wght.ttf","db98a47617ff4be3def284d81a518149"],["/images/avatar.png","55073bb5477b9dffac185f972490db2b"],["/images/minesweep.png","9a4dc0c08d6121160183a39b70d8d8b4"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","5428d061e3924f7ab3fc26947eca74c6"],["/js/comparison.js","24751a683344fe6dab17a3ef529b3974"],["/js/examples.js","1a321f45a438f7f5c524511a254f64b6"],["/js/footer.js","0a9d0162efc5d074464c1b1218e0848c"],["/js/heif-api.js","b753bccc758b42491f031beb2cf74f2c"],["/js/heif-extension.js","87e7f0bb36d66ac71186d641b73fe076"],["/js/hevc-decoder.js","ab16669cab3fb18240c9a8cbc938c137"],["/js/image-provider.js","dd6b15f221dcbc3970f808dd251b7901"],["/js/libde265-ie.js","0fd0c1ca84a8ff392ed949e231f87608"],["/js/libde265-selector.js","eff46f746b07bf7741f84c55bf0e3c39"],["/js/libde265.min.js","c9cc4063807f81ca1bf754abfbb26827"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","e37f5435ad6295f0802eb4a2f7f36cdc"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/page/2/index.html","58d240c540110d69dc8e084192b4803c"],["/sw-register.js","c88ef6b24a0f08bf876cf1a5afaa0e18"],["/tags/index.html","5fefc2068c2a7539d5c0c3c34156e277"],["/tags/中国铁路/index.html","a61f9c90aa343c2eb7cbd6e3f061e6a5"],["/tags/原色/index.html","a4d69473787c9ecc8e9ae4d2b5153711"],["/tags/命令行/index.html","699ccb0247c2c350c8092eede3f3867f"],["/tags/地铁/index.html","591cc5bc91ac74a2322ea0a839d1d822"],["/tags/复习记/index.html","66e6471c7c62416d904779ab3b5ce319"],["/tags/宝成铁路/index.html","a9495d5f8ce7b1356008614431cb4b42"],["/tags/春运/index.html","f803d128ab3aa497469384a68cbd3c69"],["/tags/游记/index.html","ab0f8914adf5cd949822e987f64d770d"],["/tags/环境配置/index.html","2f1d9ce9760943ac1bddf9c080e91869"],["/tags/自传/index.html","8f737ffa61dc008c293ded3d1bea06af"],["/tags/西康铁路/index.html","d876aa8ccf81e87dee82cfbeb4b4963c"],["/tags/通车日/index.html","dda0d4fe237d7bf9c0b5b61aa4053b6a"],["/tags/铁路/index.html","225ef6dc7407f5eaf33c3122e0713198"],["/tags/陇海铁路/index.html","59178263d4a3d617a334f74aae888952"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
