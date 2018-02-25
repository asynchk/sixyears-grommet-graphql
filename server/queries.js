query FETCH_USER{
      allUsers{
        name,
        dateOfBirth
      }
    }
mutation CREATE_USER{
  createUser(
    dateOfBirth: "1994-04-17"
    name: "brentleung"
  ) {
    id
  }
}

query FETCH_ISSUE{
  allIssues {
    id,
    issue,
    title,
    sections {
      id
    }
  }
}

mutation CREATE_ISSUE{
  createIssue(
    issue:3
    title: "The Six Years Issue 3"
  ) {
    id
  }
}

mutation CREATE_CHAIRMAN_SPEECH_SECTION{
  createSection(
    header: "主席的話"
    background: {
      title: "chairman_speech_section_bg.jpg"
      bigSrc: "img/issue3/chairmanspeech.jpg"
    }
    issueId: "cjdsjj8pb19nb0186oz4bg1rn"
  )
   {
    id
  }
}

mutation CREATE_A_SECTION{
  createSection(
    header: "活動回顧"
    subheader:"Activity Review"
    description: "Activity Review"
    background: {
      title: "activity_review.jpg"
      src: "img/issue3/activity_review.jpg"
      bigSrc: "img/issue3/activity_review.jpg"
    }
    posts:[
      {
        title: "九月十七 三六九聚會"
        content: "踏入新年度，第一次班會活動於九月十七日於灣仔三六九飯店舉行，共有十六位男同學出席。不能否認，這次飯聚搞得不太理想，同學們對於三六九都較為負面。三六九的座位安排、食物質素和價錢、店員服務都不能接受。雖然主席事前已訂座，但同學們在店外足足等了30分鐘，而店內根本沒有任何留座。店內空間太小，同學連轉身都非常艱難。食物質素不是十分出色，但十分昂貴。最令人憤怒的是，店員竟然「手起筆落」自動「推薦」了幾味十分昂貴的小菜，但我們為免尷尬而沒有拒絕。安排甚差，主席感到十分抱歉並承諾同樣事件不會再發生。委員會在此提醒同學不要過份相信OPENRICE，因為網上充斥著打手，他們最愛用hashtag (#)，最常見例子有#NINJAWIFI。"
      	background: {
          src: "img/issue3/activity_review913.jpg"
        }
      }
      {
        title: "十二月廿七日 大圍踢波"
        content: "主席本來邀請E班同學搞一場友誼賽，但鄰班動員能力不太理想，最後只有本班男同學參加。後來，黃同學便推薦我們到一間大排檔。黃同學果然是大圍的地頭蟲，大排檔的小菜很不錯，而當中原隻手撕雞最具特色。"
      	background: {
          src: "img/issue3/activity_review1227.jpg"
        }
      }
      {
        title: "二月十六 中央飯店團年飯"
        content: "又是中央飯店，一行13人，試了新菜式，無所不談，上至天文，下至地理，有政治議題，有陳年舊事。主席高興過度，發表了「反中亂港」的新年賀詞，並透過BRENT同學的手機在6D WHATSAPP GROUP散播，希望身在中國的鄭同學沒有因此而被公安問話。/n 飯後當然是甜品時間，同學到附近的糖水鋪開餐。"
      	background: {
          src: "img/issue3/activity_review0216.jpg"
        }
      }
      {
        title: "四月十七日 觀中BBQ"
        content: "雖然不是正式活動，但每年BBQ總會聚集到一班同學，在校園中閒聊，而最重要的就當然是「痴餐」。雖然人很多，但食物更多，而食剩的往往會送去堆填區。長遠來說，此舉會加快堆填區的飽和速度，而浪費食物正正就是浪費地球資源。可幸的是，6D同學願意為地球出一分力，幫助觀中減少垃圾量。另一重頭戲便是回到那時熟識的班房，黑板、枱、椅，一一如舊，而不同的是壁報更有心思。現附上一張圖片，好好緬懷一下吧!"
      	background: {
          src: "img/issue3/activity_review0417.jpg"
        }
      }
      {
        title: "八月三十日 6D 女仔聚"
        content: "今年去觀塘沙嗲王，點了藍咖哩比卡超飯，可惜只得少數同學青睞，實屬可惜。大家似乎比較鍾情白咖哩，整碟白咖哩豬扒一掃而空。/n闊別一年，大家都有不同變化。美鳯女仔咗以及cute 咗、嬈嬈皮膚好咗、麗菁和家彤漂亮咗又淑女咗、鄧穎欣清爽咗以及健談咗、陳聰穎… 去完泰國苗條咗。/n在感情生活方面，幾位女同學正處於蜜運當中。陳同學以及梁同學重新出pool，相信他們的泰國之旅過得相當甜蜜。林同學跟中大男友感情平穩發展，幸福美滿。譚同學在澳洲跟一屋的男housemates 朝夕相處。在外國旅遊時，一名法國男士更數度親吻她的手。/n在學術及工作方面，恭喜美鳯同學在實驗室不用再洗倉鼠籠（因為根據實驗需要，倉鼠們已經被處理掉）。家彤在Ctrip facebook page 撰文，歡迎到下列連結欣賞以及讚好：https://www.facebook.com/ctrip.hk。聰穎暑假到泰國教緬甸難民英語，生活相當健康。鄧穎欣正跟assignments搏鬥。另外祝Kelly的 Café 生意蒸蒸日上！/n在個人興趣方面，從今次女仔聚得知，原來除了美鳯外，嬈嬈也是廚神！有機會一定要試試她的釀雞翼。LOL/n轉眼就三年，今年女仔聚再見不少同學，真的很高興。希望大家身體健康、生活快樂！"
      	background: {
          src: "img/issue3/activity_review0830.jpg"
        }
      }
    ]
    issueId: "cjdsjj8pb19nb0186oz4bg1rn"
  )
   {
    id
  }
}

mutation CREATE_A_SECTION_WORLD{
  createSection(
    header: "向世界出發"
    subheader:"To The World"
    description: "最近你有出國嗎？看見同學都有不同外遊經歷，旅遊，交流團，義工團，工作，6D年報想藉此匯聚各人既經歷，跟大家分享一下在當地的所見所聞嗎，任何相關的看法也可以分享，正如每個人只有一雙眼，一個人見聞都有限，6D年報希望能集合不同的眼睛，擴闊大家視野，互相學習。"
    background: {
      title: "to_the_World"
      src: "img/issue3/to_the_world_bg.jpg"
      bigSrc: "img/issue3/to_the_world_bg.jpg"
    }
    posts:[
      {
        author: "Danny Kung"
        title: "日本"
        content: "日本啲食肆好正，佢大多數都有吧台位，自己一個毒撚去食嘢，都唔洗怕一個人坐二人台咁淒涼。"
        background: {
          src: "img/issue3/world/danny.jpg"
        }
      }
      {
        author: "衡少"
        title: "德國"
        content: "話説小弟今年年頭去南德行左個圈, 睇下啲小鎮。無咩特別, 係啤酒好飲左啲, 人又 nice啲, 環境又舒服啲, 建築又靚啲咁啦。反正都係鄰國窮幾生都無嘅野, 仲話咩大國勃起, 打少啲J啦屌。好彩嗰度仲未見大媽同支那狗嘅蹤影, 岩架喇企開啲啦, 死番去你個強國啦柒頭。/nBTW, 日本個澡堂真係一定要試下, hehe"
        background: {
          src: "img/issue3/world/henry.jpg"
        }
      }
      {
        author: "大師"
        title: "德國"
        content: "過左應該係人生中最開心既時間，學識左要珍惜現在既時間"
        background: {
          src: "img/issue3/world/master.jpg"
        }
      }
      {
        author: "譚艾妮"
        title: "世界之中"
        content: "自一次撞鬼時隻鬼在我耳邊輕聲說了句uluru後，我一直都想去。於是機會來了，我就來了。我都不明白為甚麼我會出現在沙漠的盛夏。四五十度猛烈陽光之下，我緩慢地踩着紅土，手臂夾住超市牌兩公升水的包裝紙都融在我的皮膚上，混着汗水防曬一塌糊塗管不了。本來期待(並幻想)了幾年於神聖大石下進行的哲學TIME，就在我雙眼放空WTF地行屍走肉下過去了。/n我不知道我在幹甚麼，然後那晚我們在國家公園的草地上躺平瞓swag，一倒下去我仰頭，萬千星輝在我眼前炸開。我試着拍照，可是搞一大輪還是瞎忙一場。我累了，大噴一口氣決定把相機塞回去，然後我呆呆地望着星海，就這樣望看。/n因為Alice Spring這個小城太舒服的關係我放縱地住下。然後在Australia Day那一天清晨，我突然醒起，頂為甚麼我現在會混入鄉民的國慶RUN，喘着大氣圍住市中心跑呀跑?體能廢如我一早被家人們(aka同旅館的朋友)拋離了。我到底都幹甚麼啊。都被人推着BB車超過我了。/n站岡的伯伯對我大叫加油啊快到了，然後我突然像打了雞血一樣喪跑，然後我看見了終點，然後 -- 大家在歡呼，大家為所有人歡呼。家人們笑着，然後我們跟所有來賽跑的鄉民一起狼吞虎嚥地在公園掃早餐。那天一起去跑的四個人，到現在依舊是我其中最愛的人。/n我期待紅色沙漠帶給我甚麼，它甚麼也不給。它說，我就在這裏，shut your fucking brain feel me.然後我明白了。"
        background: {
          src: "img/issue3/world/eileen.jpg"
        }
      }
      {
        author: "Kenny Yip"
        title: "Geneva"
        content:"I have been to the European Organization for Nuclear Research (CERN) in Geneva for a summer exchange. CERN is not a university, but a laboratory focused on particle research. It is the home to the 27-kilometer long circular proton storage ring for proton-proton collision. The latest record of collision energy is 6.5 TeV per proton, equivalent to the speed of 0.99999999 c (precisely eight '9's), where c denotes the speed of light in vacuum./nThe CERN summer student programme is an once-in-a-lifetime experience for my personal and professional development. I have learnt a great deal of high-energy physics and programming skills, from the combination of the summer project and the six-week summer lectures series. Moreover, the international working atmosphere at CERN has allowed me to interact with people from diversified cultures. I have learnt to be a team player and a culturally sensitive person. More importantly, I have developed my culinary skills, given the expensive and shockingly bad food at the restaurant on the campus. "
        background: {
          src: "img/issue3/world/kenny.jpg"
        }
      }
      {
        author: "黃俊榮"
        title: "加拿大"
        content:"2015 嘅上半年去咗加拿大嘅滑鐵盧大學exchange，第一次置身零度以下，亦第一次見到雪。途中去過黃刀鎮睇極光，又係跌跌撞撞之下勉強學識溜冰、skiing 同 snowboarding，總之試咗好多冰天雪地要做嘅事。/n後來去咗美國旅行，最深刻嘅體驗係嚟自唔同嘅歷史古蹟，感受到佢地點樣傳承追求平等自由嘅精神。美國人知道平等自由並唔係一兩代人嘅努力就可以手到拿來，而可能係好幾十代嘅事。為左令呢個追逐過程唔會突然中斷，佢地會將上一代嘅精神寄存係博物館、紀念碑，例如費城嘅獨立廳同自由鐘、華盛頓嘅林肯紀念堂。當下一代人走訪呢啲地方時，就會繼承追求平等自由嘅精神，而當中只要出現一個天才領袖，時代就會改變，馬丁路德金或者就係一個例子。"
        background: {
          src: "img/issue3/world/michael.jpg"
        }
      }
      {
        author: "Homing Wong"
        title: "冇"
        content:"小弟冇去外遊，實在冇乜野可以分享。不過，好多謝各位同學外遊期間都不忘喺Facebook post 吓相分享生活：有日本環島之旅暨WIFI宣傳商嘅相；有肥仔喺日本又行跛咗隻腳嘅相；有意大利米八黑超型男嘅相；有動物嘅GPA屈哂美國佬機又變得好Yo嘅相；有乖女喺澳洲蛻變成潮童嘅相；有超速男喺德國做型棍結果比人開罰單嘅相；亦有人唔帶埋精算男去德國交流嘅相；咁精算男自己都走咗去加拿大玩吓雪嘅相；仲有個喺泰國嘅女仔望遠啲都幾似泰國人嘅相……/n你地每一張相同每一段文字，喺我生活上增添咗好多樂趣，感謝同學不吝嘅分享，帶我見識世界，亦希望將來會有更多新鮮事物喺你地到分享出黎。當然，我下次亦都希望可以分享到我嘅見聞。"
        background: {
          src: "img/issue3/world/homing.jpg"
        }
      }
      {
        author: "肥成"
        title: "日本"
        content:"先註明日本,抒發關西靚女比關東較多./n然後註明,關西消費比關東便宜/n再註明,關東地區生活比關西生活的節奏要快/n最後註明,見聞人人感受不同,自己去感受一下最實際/n"
        background: {
          src: "img/issue3/world/fatson.jpg"
        }
        images: [
          {
            src: "img/issue3/world/fatson2.jpg"
          }
          {
            src: "img/issue3/world/fatson3.jpg"
          }
        ]
      }
      {
        author: "曾麗菁"
        title: "桂林"
        content:"到過桂林，風景很美，遇到的人更美，感覺窮遊更能讓人體驗旅行的意義/nPS 桂林的背包客棧真是又靚又抵的"
        background: {
          src: "img/issue3/world/laiching.jpg"
        }
      }
      {
        author: "莊嶢灃"
        title: "越南"
        content:"今年六月尾時去左越南做義工，幫當地啲小朋友驗眼，其實環境同大陸差唔多，空氣麻麻，車又多(尤其係電單車)，馬路好危險，同當地同學仔傾過計，佢話越南貧富懸殊好勁，叫救護車都未必有車會到，要比錢疏通之類，可能發展中既城市都係咁既樣。/n有一個景點係古芝地道，係越戰時期用既地道，你去完之後就會知道美軍點解會輸左，佢地根本就生活係地底，個地底通道只可以容納一個人屈住個身行，佢地set既陷阱完全出奇不意。/n越南既野食係會食唔飽，成日都淨係食\"Pho\"，我返黎之後都唔係好想再食越南野，去既話記住帶多啲野食。"
        background: {
          src: "img/issue3/world/frank.jpg"
        }
      }
      {
        author: "陳聰穎"
        title: "Geneva"
        content:"暑假去了泰國兩個月，教緬甸難民英文，倒不是自己多有善心。本來只是希望感受另類生活打發時間，而誤打誤撞參加了的這個活動，最後卻對我啟發甚多。/n我教的學生是一群叫Karen的緬甸小數族裔。Karen長年被軍政府打壓，所以有很多人逃亡到鄰近的泰國。雖說他們是我的學生，但其實年紀跟我差不多，要他們叫我做老師實在別扭。而我教得如何?嗯，呵呵，忘掉吧。基本上他們都聽不懂我說的話/英語。(還有我覺得英文堂本來就是最沒有用的課吧)/n他們有很多人都說將來想當醫生護士老師翻譯員，有一少部分人會去美國澳洲。原來他們只要被UN登記為難民，就很容易移民到外國。聽到之後，我自然地感到可惜。醫生護士老師是我們幼稚園小學所知道的翏翏可數的幾種職業，但是十多二十歲的他們，因着生活的落後，到這個年紀思想空間還是很狹隘，平時聊天能聊的話題不多，到空閒的時候只能睡睡覺。這樣令我反思到我自己在一個如此物質豐盛資訊流通的地方，到底有沒有好好善用自己所擁有的資源。他們是因為環境所限而無法好好發揮潛能，但我在香港這個富足的地方，能有這麼多的選擇，其實都不見得有多好。自己都只是想着要順從讀書工作結婚買樓生仔退休這最最安穩的流程過活，眼白白看着握在手裏的選擇流逝，留下無奈。/n至於會去美國澳洲的學生，開頭我覺得他們挺幸運。但轉過頭來想，他們的英文不好，學歷不高，到底去到那邊會有什麼待遇？而更深層的問題，是為什麼要靠外國呢？Karen 這個少數族裔，當年與Burmese(相等於中國的漢族)交惡，很大程度是因為外國干預。而如今，法國在背後提供軍事支援予Karen。緬甸軍政府固然可恥，但外國勢力也不見得好心。而戰爭亦令Karen需要不停地索取支援，依賴外國，打下崇洋的基礎。/n這又讓我想起旅途中遇到了一個叫Fawn的美國女人，當着我面說她覺得non-native people不應該教學生，說會害了學生。言詞之間感到她為自己能說一口好英語而自豪。我固之然覺得她狗眼看人低，而另一方面亦感受到English as another colonization。 Fawn只不過是能說好自己的母語，本來不值一提，但因為她的母語是英語，她出生在美國，便好像能突然高級了。思及此，我感到無奈，唉，香港也是個崇洋的地方阿。/n但畢竟我也沒有住在那邊很久，對他們的局勢未算十分了解，以上這番話可能對他們不公。但無論如何，這個旅程對我實在意義很大 。不僅僅令我思考更多，更令我對昆蟲的恐懼大大減低，亦讓我瘦了兩公斤! 很值得去呀！(基本上去的人都瘦了，同行有個男生更瘦了七公斤!好過吃減肥藥呀！)至於我是不是很高興?不是，因為每天準備和教書很花心神，我又是一個天生爛教師。(不過倒很慶幸自己不是讀education，將來不用誤人子弟)但能夠認識到很多可愛的人和文化，嗯，其實還是很好。"
        background: {
          src: "img/issue3/world/sally.jpg"
        }
      }
      {
        author: "吳卓霖"
        title: "好想"
        content:"無出國，但好想去巴塞隆拿/n好想感受加泰隆尼亞既文化同去camp nou 睇波/n想去馬爾代夫/n親佢未陸沉之前去感受陽光與海灘"
      	background: {
          src: "img/issue3/world/eddy.jpg"
        }
      }
      {
        author: "鄭耀峰"
        title: "山西，江西"
        content:"係廣州讀書冇出國，係國內山西省江西省玩左2個禮拜。/n一路行一路玩，其實中國人冇咁壞，世界各地都有好多人渣，只係自己目光放在係邊度姐(大陸有d地方\"大媽\"ge行為粗魯冇禮貌仲要插隊就真係見識過不過老老豆豆香港都有呢d人，但係d偏僻少少ge農村人我就真係冇見過話對我唔好，好樸實令我好鐘意佢地)/n中國風景真係好靚，而中國產品進入緊大規模捨劣取優ge倒計時，中國野已經冇以前咁cheap，香港人有優勢但都冇以前咁有優勢，所以希望同學們提高自己個人能力，想旅遊時多d為自己地區同國家加強經濟增長，中國經濟黎緊呢2年我相信會出現至少半年大洗牌，希望自己人ge錢可以去返自己人手上，好多時候唔係話外國先至係最好。/n香港人，贏在專業可靠，而非一味打價格戰。/n期待有一日會聽到我地班有同學可以突圍而出，我愛妳們…"
        background: {
          src: "img/issue3/world/cutecute.jpg"
        }
      }
      {
        author: "阿檸"
        title: "新加坡"
        content:"係新加坡發現呢度既人洗腦程度俾大陸更甚，可幸既係佢地有一個相對好好既政府。/n新加坡未試過落雨超過3個鐘, 食野好平但細碟, 我維持一日三餐無宵夜運動瘦左5kg。/n呢度既人英文真係好叻, 雖然singlish係好難聽, 但啲人讀書好勤力自律, 人既品質素養都好高, 係飲酒貴左啲。/n呢度既男仔要當兵, 個個都好大隻, 有時我覺得軍訓真係必須, 至少學識點保護人, 又好鬼gentleman, 上籃球班成日幫人練波教人點打, 呢點同香港好唔同。/numm 打住咁多先 有咩班聚再講"
        background: {
          src: "img/issue3/world/ling.jpg"
        }
      }
      {
        author: "Kelly"
        title: "德國"
        content:"去德國，第一次落Pub跳舞(亂跳)飲酒，跳左成晚冇停過朝早返屋企周身骨痛! !"
        background: {
          src: "img/issue3/world/kelly.jpg"
        }
      }
      {
        author: "葉美鳳"
        title: "台灣"
        content:"上年暑假去左台灣打工換宿，認識左很多朋友，都體驗左台灣當地人既生活。"
        background: {
          src: "img/issue3/world/emma.jpg"
        }
      }
      {
        author: "陳啟彥"
        title: "日本"
        content:"雖然是關於cosplay/n但是最近也因為受邀請或是有各種活動而免費或半費到日本、深圳一些動漫活動/n見識到雖然語言不通，不過在喜歡的事物前，任何人都是一樣的"
        background: {
          src: "img/issue3/world/shiro.jpg"
        }
      }
      {
        author: "Julio"
        title: "美國"
        content:"見聞好難講得出 唯一想講嘅係有機會就出外走走 係會有得著 係會為自己帶來改變"
        background: {
          src: "img/issue3/world/julio.jpg"
        }
      }
      {
        author: "Chuen"
        title: "柬甫寨"
        content:"柬甫寨的面包車如同去路佈滿塵埃，準時停靠在旅館入口。我徑自踏上車門，由暹粒陸路過境到曼谷的旅程隨即展開。/n眼內二三層高樓的市井街道，逐漸轉至田野風景，風塵甚囂令我回想起前日同樣的光景。一月的吳哥天朗氣清，我慵懶地敞在tuk tuk車的後椅，越過幾千個晴空萬里的草原。/n吳哥窟的美，是那麼原始。人類的智慧讓人嘆服。司機Siv在襲面的風聲中講解，是少有會英語的司機。只見他鐵黑的後頸，雙手抓緊車軚。說起自己也是位教師。在柬甫寨，小孩甚至成人能接受英語教育的機會非常有限，他不但用自學的英語在工餘時義務教授英語，而且辦了一所學校。我感到佩服。然後他開始喃喃說著需要金錢來添置書桌，晴空中開始冒起疑雲，幸好剛到達目的地。/n在林蔭道中走著，身後是女皇宮荒廢的水池，兩三個小孩在他們先祖建造的偉大遺址裹嬉戲打鬧。幼小的赤腳，有的穿涼鞋，把玩著樹枝就能樂透的小孩向著你微笑 。她們的手上帶著一疊疊的明信片，怕怕醜醜的。我只好會以笑容說不。希望她們的笑容永遠這樣天真迷人。/n「一 (いち i chi）、二（ に ni）、三（さん san）、四 （よん yon）、五（ごgo）⋯⋯」/n女孩走過來，由一數到十，朗朗上口地用日本語一張一張地展示明信片。 我用了十多年才扚起心肝學了一個月的單詞，竟由乖巧的小女孩說出。她賺得了我心甘情願的一美金。我不禁讚她，真懂事！/n往泰國的通關處，通關處是一條長條的道路，道路的兩端有兩國各自的通關口。落車時司機說過，過關後會有泰國當地的 Shuttle bus 接頭。走在泥沆上搭起的木橋，一個細小的身影佈滿泥濘。沒有明信片可賣，沒有笑容，只能雙手合十 ， 男孩凝視著走過的路人，深䆳眼中的黑瞳透著迫切，看來只有四，五歲。真不識趣，小朋友應裝可愛。/n走過一天的路，回到這城市的商業中心。熱鬧的酒吧傳出的音樂節拍更顯這巷樓傳統餐廳的清靜，對面桌上沈默的一個家庭瞪著對面的燈紅酒綠。沒錯，這條酒吧街就是商業中心。沒有高樓，只有二三層樓高相交築成的井字街，霓虹燈牌橫跨兩邊。路邊市集的對面，斜面突出的藥房沿至內街，有女孩或打扮成女孩的人以一美金按摩作招徠。/n這次旅程，我穿越了嚴石巨壁， 登上過高山平原，在荔枝山下的瀑布游泳，在田中央駕駛四輪車奔馳，也在無垠的公路上遇大雨，看過田園的野牛⋯⋯/n一個城市，對遊客來說是一本歷史書，一個忘憂地。/n這也是一處現代人脫離勞碌平庸，在非日常中尋找自我的地方。有食店提供用合法大麻製作的「開心pizza」，有隨街可見的Tuk tuk 司機豎起大母指叫喊想帶你去boomboom 的地方。/n對於成長的小孩，這個地方是他們的未來。/n然而那裏的赤腳的小孩好像跟遺蹟一樣被保留下來，沒有改變。觀光是賴以為生的產業，過去千年文化就是延續現在的資本。服務和旅游業佔柬埔寨國內生產總值60%，不少家庭是靠服待旅客的收入來養活。遊客著迷風景而駐足不前，而當地人民亦同，看守著舊石故土，保持那生鏽而逐漸消逝的模樣。/n回想起那湖邊的女孩，當我用日本語讚道「日本語はいいですね。」她並沒有明白，只向我露出燦爛的笑容。同樣的戲碼不斷上演，小孩在你眼前一張張數著明信片。在他們眼中，有這麼一個觀念早已根深蒂固，從觀光客荷包裏賺取豐厚的生活所需，是比讀書，接受文明的教育還更重要。/n襲面的霓虹燈令人一覺醒來，一行人從面包車走下，經過逾十二小時，終來到背包客天堂。這裏就是被稱為「微笑之都」的泰國。/n 後記：一班學生成立組織，組團義教Siv的學生，並為Siv的學校Generosity School設立網頁及發起網上眾籌，獲得更多人關注及支持。"
        background: {
          src: "img/issue3/world/chuen.jpg"
        }
        images:[
          {
            src: "img/issue3/world/chuen1.jpg"
          }
          {
            src: "img/issue3/world/chuen2.jpg"
          }
          {
            src: "img/issue3/world/chuen3.jpg"
          }
          {
            src: "img/issue3/world/chuen4.jpg"
          }
          {
            src: "img/issue3/world/chuen5.jpg"
          }
        ]
      }
    ]
    issueId: "cjdsjj8pb19nb0186oz4bg1rn"
  )
   {
    id
  }
}
mutation UPDATE_CHAIRMAN_SPEECH_SECTION{
	updateSection(
    id: "cjdsljqy01bw00186t4562r08"
    subheader:"Chairman's Speech"
    description: "Chairman's Speech"
    backgroundId: "cjdsljqy01bw10186jear5flr"
  ) {
	  id
    header
    subheader
    description
    background {
      title
    }
    posts {
      id
    }
    issue {
      id
    }
	}
}

query FETCH_ALL_SECTIONS {
  allSections(filter: {issue:{issue: 3}}){
    id
    header
    issue {
      id
      issue
    }
    subheader
    description
    background {
      id
      src
      title
    }
  }
}
query FETCH_SECTION_AND_ITS_POSTS {
  Section(id:"cjdsljqy01bw00186t4562r08") 
  {
    id
    background {
      id
      title
      src
    }
    description
    header
    subheader
    posts {
      id
      author
      title
      description
      background {
        id
        src
      }
      
      
    }
  }
}

mutation UPDATE_SECTION_BACKGROUND {
  updateThumbnailBackgroundImage(
    id: "cjdsljqy01bw10186jear5flr"
    src: "img/chairman_speech_section_bg.jpg"
    bigSrc: "img/chairman_speech_section_bg.jpg"
  ) {
    id
    title
    src
    bigSrc
  }
}

mutation UPDATE_SECTION_INFO {
  updateSection(
    id: "cjdykj78urw1r0159zxmmhs5n"
    layout: 2,
  ){
    id
  }
}

query FETCH_POSTS_BY_SECTION {
  allPosts(filter: {section:{ id: "cjdsljqy01bw00186t4562r08"} })
{
  id
  author
  isPublished,
  title
}
}

mutation CREATE_A_POST_IN_A_SECTION {
  createPost(
    author: "Eddy"
    background:{
      title:"chairman\"s sppech",
      src: "img/chairman_speech_section_bg.jpg"
    }
    content: "年報終於來到第三個年頭，委員會和我都感到十分鼓舞。「三年」很有意義，因為這正是我們高中的時光。委員和我經常回想高中那些年，每每令人發笑。那些年，往事歷歷在目，而對我而言最深刻的應該是班房換PE衫。最記得在recess時，突然有人提議在班房換PE衫，然後紛紛和應。當然，同學的決定是經過慎重考慮各方面的因素包括走廊的人數，換衫的時間，女同學的人數等，決定可算是是心血來潮與心思熟慮的完美結合。「拍板」後的舉動我就不詳談，因為你懂的。如果同學有與趣，請繼續閱讀今期年報的「那些年」，細閱其他同學的高中樂事。<br/> 高中後的「三年」變得不同，離開了中學的保護，同學對社會認識深了，閱歷廣了，體驗多了，亦對社會多了份公民責任。三年間的社會時事彷彿幫助我們重溫LS的Rule of Law and Social Participation，想不到當年牢牢緊記的定義在雨傘革命/雨傘運動/佔領行動/佔領中環時會大派用場，Rule of law、Civil disobedience、Social justice，多不勝數，活學活用。委員會和我都十分相信同學在這三年間對香港、對中國都有另一番的認識。<br/>最後便是老套話，希望日後同學多多參與班會活動，互相交流。(附加一句，屌撚死D死差佬同支那人，區議會同立法會選舉記住投票!)多謝各位同學!<br/>主席<br/>吳卓霖<br/>2015年8月16日"
    isPublished: true
    images:[
        {
          title:"Eddt\"s photo"
          src: "img/eddy_holding_tee.jpg"
        }
    ]
    title: "主席的話"
    sectionId: "cjdsljqy01bw00186t4562r08"
  ) {
    id
  }
}

query FETCH_A_POST_BY_ID {
  Post(id: "cjdvs6htg91u70159hxjdxg99") {
    id
    author
    title
    subheader
    description
    content
    isPublished
    background {
      id
      src
    }
    images {
      id
      title
      src
      description
    }
  }
}

mutation UPDATE_A_POST_BY_ID {
  updatePost(id:"cjdvs6htg91u70159hxjdxg99"
    content: "年報終於來到第三個年頭，委員會和我都感到十分鼓舞。「三年」很有意義，因為這正是我們高中的時光。委員和我經常回想高中那些年，每每令人發笑。那些年，往事歷歷在目，而對我而言最深刻的應該是班房換PE衫。最記得在recess時，突然有人提議在班房換PE衫，然後紛紛和應。當然，同學的決定是經過慎重考慮各方面的因素包括走廊的人數，換衫的時間，女同學的人數等，決定可算是是心血來潮與心思熟慮的完美結合。「拍板」後的舉動我就不詳談，因為你懂的。如果同學有與趣，請繼續閱讀今期年報的「那些年」，細閱其他同學的高中樂事。/n高中後的「三年」變得不同，離開了中學的保護，同學對社會認識深了，閱歷廣了，體驗多了，亦對社會多了份公民責任。三年間的社會時事彷彿幫助我們重溫LS的Rule of Law and Social Participation，想不到當年牢牢緊記的定義在雨傘革命/雨傘運動/佔領行動/佔領中環時會大派用場，Rule of law、Civil disobedience、Social justice，多不勝數，活學活用。委員會和我都十分相信同學在這三年間對香港、對中國都有另一番的認識。/n最後便是老套話，希望日後同學多多參與班會活動，互相交流。(附加一句，區議會同立法會選舉記住投票!)多謝各位同學!/n主席/n吳卓霖/n2015年8月16日"
  ) {
    id
  }
}