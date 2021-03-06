var COL_4_LINE = 10;
var IMG_WIDTH = 128;
var NUM_BOLD = 100;

var cast_strthings = [
    [123, "윌<br>윌리엄 바이어스", "Will Byers", "https://vignette.wikia.nocookie.net/strangerthings8338/images/e/e4/Will_Byers.png"],
    [123, "조이스 바이어스", "Joyce Byers", "https://i.pinimg.com/originals/01/2a/c7/012ac7f7e2cc8671d87d79a1236428c2.jpg"],
    [123, "조나단 바이어스", "Jonathan Byers", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS73-qpBgZJBiGt7_eylzTKYCzQCmo6z1TFAIh6zmOmX_ng2Duj"],
    [1, "로니 바이어스", "Lonnie Byers", "https://vignette.wikia.nocookie.net/strangerthings8338/images/e/ef/Lonnie.png/revision/latest?cb=20170701115006"],
    [1, "신시아", "Cynthia", "https://vignette.wikia.nocookie.net/strangerthings8338/images/f/f5/Cynthia.jpg/revision/latest?cb=20161120205628"],
    [0, "", "", ""],
    [123, "짐 호퍼", "Jim Hopper", "https://vignette.wikia.nocookie.net/strangerthings8338/images/b/bc/Jim_Hopper_S2.png/revision/latest/scale-to-width-down/310?cb=20180327084010"],
    [1, "", "Diane Hopper", "https://vignette.wikia.nocookie.net/strangerthings8338/images/b/b3/Diane2.png/revision/latest/scale-to-width-down/310?cb=20170701115837"],
    [1, "", "Sara Hopper", "https://vignette.wikia.nocookie.net/strangerthings8338/images/e/e2/Sarah-Hopper.png/revision/latest?cb=20160815220035"],
    [0, "", "", ""],

    [123, "마이크<br>마이클 윌러", "Mike Wheeler", "https://vignette.wikia.nocookie.net/strangerthings8338/images/4/48/Mike_Wheeler_S1.png/revision/latest/scale-to-width-down/310?cb=20171025205131"],
    [123, "낸시 윌러", "Nancy Wheeler", "https://vignette.wikia.nocookie.net/strangerthings8338/images/5/5d/Nancy_S2.png/revision/latest?cb=20171229091940"],
    [123, "카렌 윌러", "Karen Wheeler", "https://vignette.wikia.nocookie.net/strangerthings8338/images/6/6d/Karen_Wheeler_001.png/revision/latest/scale-to-width-down/310?cb=20160804154504"],
    [123, "테드 윌러", "Ted Wheeler", "https://vignette.wikia.nocookie.net/strangerthings8338/images/b/bf/Ted_Wheeler.png/revision/latest?cb=20171108231928"],
    [123, "할리 윌러", "Holly Wheeler", "https://vignette.wikia.nocookie.net/strangerthings8338/images/2/2e/Holly-wheeler.png/revision/latest?cb=20160811155321"],
    [0, "", "", ""],
    [123, "파웰", "Calvin Powell", "http://www.postavy.cz/foto/calvin-powell-foto.jpg"],
    [123, "필", "Phil Callahan", "https://vignette.wikia.nocookie.net/strangerthings8338/images/f/fb/Officer_Callahan.png/revision/latest?cb=20170524082332"],
    [123, "플로", "Florence", "https://vignette.wikia.nocookie.net/strangerthings8338/images/d/d9/Florence.png/revision/latest?cb=20170303104046"],
    [0, "", "", ""],

    [123, "엘<br>일레븐", "Eleven", "https://upload.wikimedia.org/wikipedia/en/thumb/5/52/Eleven_%28Stranger_Things%29.jpg/220px-Eleven_%28Stranger_Things%29.jpg"],
    [0, "", "", ""],
    [123, "더스틴 핸더슨", "Dustin Henderson", "https://vignette.wikia.nocookie.net/strangerthings8338/images/1/18/Dustin_S2.png/revision/latest?cb=20180319174421"],
    [23, "", "Claudia Henderson", "https://vignette.wikia.nocookie.net/strangerthings8338/images/6/6b/Claudia_Henderson_Family_tree_icon_001.png/revision/latest?cb=20171028225902"],
    [0, "", "", ""],
    [123, "루카스 싱클레어", "Lucas Sinclair", "https://vignette.wikia.nocookie.net/strangerthings8338/images/0/03/Lucas_S2.png/revision/latest?cb=20180107171723"],
    [23, "", "Erica Sinclair", "https://vignette.wikia.nocookie.net/strangerthings8338/images/6/6f/Erica_Sinclair_001.png/revision/latest?cb=20171027183047"],
    [2, "", "Mr. Sinclair", "https://static.tvmaze.com/uploads/images/medium_portrait/134/335461.jpg"],
    [2, "", "Mrs. Sinclair", "https://static.tvmaze.com/uploads/images/medium_portrait/134/335460.jpg"],
    [0, "", "", ""],

    [123, "스티브 해링턴", "Steve Harrington", "https://vignette.wikia.nocookie.net/strangerthings8338/images/3/3c/Steve_Harrington_portrait.jpg"],
    [12, "토미 H", "Tommy H", "https://vignette.wikia.nocookie.net/strangerthings8338/images/3/3b/Tommy_H_-_The_Bathtub.png/revision/latest?cb=20170307153350"],
    [12, "캐롤", "Carol", "https://vignette.wikia.nocookie.net/strangerthings8338/images/e/ef/Carol_-_Weirdo_on_Maple_Street.png/revision/latest?cb=20170307153321"],
    [1, "", "Nicole", "https://vignette.wikia.nocookie.net/strangerthings8338/images/a/af/Nicole3.png/revision/latest?cb=20170701105315"],
    [0, "", "", ""],
    [123, "스콧 클라크", "Scott Clarke", "https://static.tvmaze.com/uploads/images/medium_portrait/134/335211.jpg"],
    [12, "", "Russell Coleman", "https://vignette.wikia.nocookie.net/strangerthings8338/images/f/f0/Russell_Coleman.png/revision/latest?cb=20170227163230"],
    [1, "트로이", "Troy", "https://vignette.wikia.nocookie.net/strangerthings8338/images/0/08/Troy-0.png/revision/latest?cb=20171006085218"],
    [1, "제임스", "James", "https://vignette.wikia.nocookie.net/strangerthings8338/images/0/00/James.png/revision/latest?cb=20170228152919"],
    [0, "", "", ""],

    [1, "밥<br>바바라 홀랜드", "Barb Holland", "https://vignette.wikia.nocookie.net/strangerthings8338/images/2/25/Barbara_Holland.jpg"],
    [12, "", "Marsha Holland", "https://vignette.wikia.nocookie.net/tvdatabase/images/f/f3/Stranger_Things_2x01_003.jpg/revision/latest?cb=20180104133028"],
    [2, "", "Mr. Holland", "https://vignette.wikia.nocookie.net/strangerthings8338/images/7/70/MrHolland.png/revision/latest?cb=20171117233732"],
    [0, "", "", ""],
    [0, "", "", ""],
    [12, "", "Donald Melvald", "https://vignette.wikia.nocookie.net/strangerthings8338/images/6/6e/Donald_Melvald.jpg/revision/latest?cb=20160918105219"],
    [1, "베니 해몬드", "Benny Hammond", "https://vignette.wikia.nocookie.net/strangerthings8338/images/5/51/Benny_Hammond.png/revision/latest?cb=20170701120630"],
    [0, "", "", ""],
    [0, "", "", ""],
    [0, "", "", ""],

    [12, "마틴 브래너", "Martin Brenner", "https://vignette.wikia.nocookie.net/strangerthings8338/images/0/06/Dr_Martin_Brenner_version_3.png"],
    [1, "코니 프레지어", "Connie Frazier", "https://vignette.wikia.nocookie.net/strangerthings8338/images/1/13/Connie_Frazier_%28Chapter_Seven%29.png"],
    [1, "리드 요원", "Lead Agent", "https://vignette.wikia.nocookie.net/strangerthings8338/images/d/d8/Lead_Agent.png"],
    [23, "닥터 오웬", "Sam Owens", "https://vignette.wikia.nocookie.net/strangerthings8338/images/7/7e/Dr_Owens_S2.png"],
    [0, "", "", ""],
    [123, "데모고르곤", "The Demogorgon", "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/71844540983951.5794e60fc069a.jpg"],
    [0, "", "데모도그", ""],
    [0, "", "달타냥", ""],
    [0, "", "마인드 플레이어", ""],
    [0, "", "", ""],

    [12, "", "Terry Ives", "https://vignette.wikia.nocookie.net/strangerthings8338/images/3/3e/Terry_Ives.png/revision/latest?cb=20170425225053"],
    [12, "", "Becky Ives", "https://vignette.wikia.nocookie.net/strangerpedia/images/a/a6/333753.jpg/revision/latest?cb=20181114132612"],
    [0, "", "", ""],
    [0, "", "", ""],
    [0, "", "", ""],
    [23, "맥스 하그로브", "Maxine Mayfield", "https://vignette.wikia.nocookie.net/strangerthings8338/images/3/32/Max.png/revision/latest?cb=20170213160116"],
    [23, "", "Billy Hargrove", "https://vignette.wikia.nocookie.net/strangerthings8338/images/6/65/Billy_Hargrove.png/revision/latest?cb=20180513024343"],
    [2, "", "Neil Hargrove", "http://pm1.narvii.com/6698/4ae89ce380bdb69f0a70c827cc21b613fb5c5902_00.jpg"],
    [2, "", "Susan Hargrove", "https://static.tvmaze.com/uploads/images/medium_portrait/134/335718.jpg"],
    [2, "", "", ""],

    [2, "", "Kali<br>Eight", "https://vignette.wikia.nocookie.net/strangerthings8338/images/9/9e/Kali.png/revision/latest?cb=20171028095030"],
    [2, "", "Funshine", "https://static.tvmaze.com/uploads/images/medium_portrait/133/333752.jpg"],
    [2, "", "Axel", "https://static.tvmaze.com/uploads/images/medium_portrait/133/333755.jpg"],
    [2, "", "Dottie", "https://i.pinimg.com/736x/e2/0b/32/e20b32d4a3db84cf72647247a29febf9.jpg"],
    [2, "", "Mick", "https://vignette.wikia.nocookie.net/strangerthings8338/images/b/b6/Mick_S2.png/revision/latest?cb=20180322054012"],
    [0, "", "", ""],
    [23, "", "Keith", "https://vignette.wikia.nocookie.net/strangerthings8338/images/6/63/Screenshot_2017-10-29_at_7.45.35_PM.png/revision/latest?cb=20171030010108"],
    [23, "", "Murray Bauman", "https://vignette.wikia.nocookie.net/strangerthings8338/images/d/de/Murray_Bauman.png/revision/latest?cb=20171118142040"],
    [23, "", "Bob Newby", "https://vignette.wikia.nocookie.net/strangerthings8338/images/d/d0/Bob_Newby_S2.png/revision/latest?cb=20180327083407"],
    [2, "", "Ray", "https://vignette.wikia.nocookie.net/strangerthings8338/images/3/3c/Screen_Shot_2017-11-13_at_6.15.01_PM.png/revision/latest?cb=20171114001537"],

    [3, "", "Robin Buckley", "https://vignette.wikia.nocookie.net/strangerthings8338/images/f/fc/Robin_S3.png/revision/latest?cb=20190409051202"],
    [3, "", "Grigori", "https://vignette.wikia.nocookie.net/strangerthings8338/images/0/08/Grigori_ava.jpg/revision/latest?cb=20190709045740"],
    [3, "", "Doris Driscoll", "https://vignette.wikia.nocookie.net/strangerthings8338/images/a/ae/Doris_Driscoll.png/revision/latest?cb=20190705065355"],
    [3, "", "Heather Holloway", "https://static.tvmaze.com/uploads/images/medium_portrait/204/511196.jpg"],
    [3, "", "Tom Holloway", "https://vignette.wikia.nocookie.net/strangerthings8338/images/6/6a/Tom_Holloway.jpeg/revision/latest/scale-to-width-down/185?cb=20190718022015"],
    [3, "", "Bruce Lowe", "https://vignette.wikia.nocookie.net/strangerthings8338/images/1/17/ST3_Bruce_Lowe.jpg/revision/latest?cb=20190709173832"],

    [3, "", "Larry Kline", "https://vignette.wikia.nocookie.net/strangerthings8338/images/4/40/ST3-Mayor-Kline.png/revision/latest?cb=20190321064347"],
    [3, "", "Alexei", "https://vignette.wikia.nocookie.net/strangerthings8338/images/a/ad/Alexei.JPG/revision/latest?cb=20190705023926"],
    [3, "", "Suzie", "https://66.media.tumblr.com/7f03e8e16e012e45286912276d2de60e/tumblr_pu90luYXd01y7eb2fo1_250.jpg"],
    [0, "", "", ""]
];

var cast_arrow = [
    [138, "올리버 퀸", "Oliver Queen<br>Green Arrow", "https://s-media-cache-ak0.pinimg.com/236x/f2/41/dc/f241dc94a737788ea383df120a4d64b7.jpg"],
    [115, "테아 퀸", "Thea Queen<br>Speedy", "https://s-media-cache-ak0.pinimg.com/236x/b4/54/93/b4549397b7347785f9686fe3838ee357.jpg"],
    [47, "모이라 퀸", "Moira Queen", "https://s-media-cache-ak0.pinimg.com/236x/b4/a5/fc/b4a5fc0a044297b56e966c5a03a8c61b.jpg"],
    [7, "로버트 퀸", "Robert Queen", "https://static.tvmaze.com/uploads/images/medium_portrait/37/93617.jpg"],
    [14, "월터 스틸", "Walter Steele", "https://s-media-cache-ak0.pinimg.com/236x/1c/5b/ac/1c5bac8e15e92cfa9b809f62fab9089b.jpg"],

    [115, "존 디글", "John Diggle", "https://s-media-cache-ak0.pinimg.com/564x/f8/eb/0e/f8eb0e47e970b1749c0ba66fe7f7ab5e.jpg"],
    [53, "로이 하퍼", "Roy Harper", "https://s-media-cache-ak0.pinimg.com/236x/52/c9/a5/52c9a540131bbf997f5d29591365f868.jpg"],
    [109, "펠리시티 스모크", "Felicity Smoak", "https://s-media-cache-ak0.pinimg.com/236x/b9/62/7b/b9627bdf25f029c7524b2c9a42483ba6.jpg"],
    [10, "도나 스모크", "Donna Smoak", "https://s-media-cache-ak0.pinimg.com/564x/39/8b/0c/398b0cd7e1a584e4993903238f4380eb.jpg"],
    [0, "", "", ""],

    [115, "퀜틴 랜스", "Quentin Lance", "https://s-media-cache-ak0.pinimg.com/236x/0f/2c/ea/0f2cea1f2127a717713c3eb94dfa8cd0.jpg"],
    [98, "로럴 랜스", "Laurel Lance", "https://s-media-cache-ak0.pinimg.com/236x/3c/c3/df/3cc3df5879f0d37c4997f70da48dd228.jpg"],
    [31, "사라 랜스", "Sara Lance", "https://s-media-cache-ak0.pinimg.com/236x/74/c0/a5/74c0a5f9d49706caf11511a5134f8392.jpg"],
    [0, "", "", ""],
    [0, "", "", ""],

    [65, "말콤 멀린", "Malcolm Merlyn", "https://s-media-cache-ak0.pinimg.com/236x/10/19/ab/1019abba5b5e22759b8f1345b613e659.jpg"],
    [28, "토미 멀린", "Tommy Merlyn", "https://s-media-cache-ak0.pinimg.com/236x/88/3f/cd/883fcdb1f83be78bef9d4ad888f96447.jpg"],
    [21, "샤도", "Shado", "https://s-media-cache-ak0.pinimg.com/564x/df/6f/09/df6f09b4bf8fcf115bbfadfe119bffca.jpg"],
    [10, "야오 페이", "Yao Fei", "https://s-media-cache-ak0.pinimg.com/236x/51/b2/c9/51b2c9e77d5fece689c80324932de351.jpg"],
    [20, "레이 파머", "Ray Palmer", "https://s-media-cache-ak0.pinimg.com/236x/e8/5b/fe/e85bfeec2940356f69d6a37ef9377f27.jpg"],

    [36, "슬레이드 윌슨", "Slade Wilson", "https://s-media-cache-ak0.pinimg.com/236x/15/86/03/158603b75b0680d3aa7c98ec3ee79033.jpg"],
    [12, "세바스찬 블러드", "Sebastian Blood", "http://ww1.prweb.com/prfiles/2013/07/21/10949050/Kevin%20Alejandro.jpg"],
    [10, "첸 나 웨이", "China White", "https://s-media-cache-ak0.pinimg.com/236x/c2/7c/59/c27c59e887920b215eb79907c7f69dbe.jpg"],
    [4, "헬레나 버티넬리", "Helena Bertinelli", "https://s-media-cache-ak0.pinimg.com/236x/a4/c1/05/a4c1057a8515bf39f066b67aa7ec1eea.jpg"],
    [0, "", "", ""],

    [34, "커티스 홀트", "Curtis Holt", "https://s-media-cache-ak0.pinimg.com/564x/15/c1/ce/15c1ce44d106055263bf092cd7bcbdf1.jpg"],
    [24, "라일라", "Lyla Michaels", "https://s-media-cache-ak0.pinimg.com/236x/8c/b9/59/8cb959b0b55533249731cb33ffdd748d.jpg"],
    [17, "아만다 윌러", "Amanda Waller", "https://s-media-cache-ak0.pinimg.com/236x/f5/ec/f4/f5ecf4291cfe8b829cfea3f8b42a5e89.jpg"],
    [10, "플로이드 로튼", "Deadshot", "https://s-media-cache-ak0.pinimg.com/236x/e6/58/68/e65868c438ba2ccbcbdcb9109fc903c0.jpg"],
    [0, "", "", ""],

    [16, "닛사 알 굴", "Nyssa al Ghul", "https://s-media-cache-ak0.pinimg.com/236x/12/6e/f0/126ef043d001e2ec35149bf8067874cc.jpg"],
    [10, "라스 알 굴", "Ra's al Ghul", "https://comicvine1.cbsistatic.com/uploads/scale_medium/11127/111274365/6116272-11.jpg"],
    [5, "탈리아 알 굴", "", "http://mblogthumb1.phinf.naver.net/MjAxNzAzMDVfMjMx/MDAxNDg4NzEzNjM3OTg2.3apm-8G-QyC-lq2v2OQDz80n00QfvFNjWgJ-YRctUrIg.3qH5vOJeSh2SZEPUwwRz2UZ2ezRwAGZ6dTni1BysKd0g.JPEG.yomygirlmon/MV5BNmI1YWE3ZDgtNGJhYy00MjNiLWI0ODUtMTZkMzI3MTBiYjIxL2ltYWdlXkEyXkFqcGdeQXVyNjc5Mjg0NjU._V1_SY1000_CR0%2C0%2C666%2C1000_AL_.jpg?type=w800"],
    [0, "", "", ""],
    [0, "", "", ""],

    [19, "야마시로 마세오", "Maseo Yamashiro", "https://s-media-cache-ak0.pinimg.com/236x/45/6f/6f/456f6f418420cad86752459a3be83f49.jpg"],
    [15, "야마시로 타츠", "Tatsu Yamashiro", "https://s-media-cache-ak0.pinimg.com/236x/66/b1/48/66b1484f2cf33ad712a6d5d2686d1f38.jpg"],
    [13, "야마시로 아키오", "Akio Yamashiro", "https://assets.mycast.io/actor_images/actor-brandon-nomura-52155_large.jpeg?1582650981"],
    [0, "", "", ""],
    [0, "", "", ""],

    [5, "캐리 커터", "Carrie Cutter", "https://s-media-cache-ak0.pinimg.com/236x/0d/cb/a3/0dcba3c05bf3c153fad3487e5647d489.jpg"],
    [4, "테드 그랜트", "Ted Grant", "https://s-media-cache-ak0.pinimg.com/236x/32/a5/4f/32a54f5d3986ec784bbae6cbe15b9c08.jpg"],
    [1, "윌리엄 토크먼", "Clock King", "https://s-media-cache-ak0.pinimg.com/564x/e6/a6/7e/e6a67e3d374f1eea38a9aa4733dc7cd9.jpg"],
    [1, "데미안 다크", "Damien Darhk", "https://i.pinimg.com/originals/61/42/ff/6142ff538f9e4602809ee180f6e3523f.jpg"],
    [1, "미나 파이야드", "Mina Fayad", "https://vignette.wikia.nocookie.net/antagonisten/images/c/c4/Mina_Fayad.png/revision/latest?cb=20190418005928&path-prefix=de"],
    [0, "제레미 텔<br>더블다운", "Jeremy Tell<br>Doubledown", "https://i.pinimg.com/originals/76/ab/7c/76ab7c1ae77b397e4a099dd1e80129ff.jpg"],
    [0, "", "", ""],
    [0, "", "", ""],
    [0, "", "", ""],
    [0, "", "", ""],
    [0, "알렉스 데이비스", "Alex Davis", "https://static.tvmaze.com/uploads/images/medium_portrait/94/237169.jpg"],
    [26, "스노우", "Bethany Snow", ""],
    [22, "키냐제프", "Anatoly Knyazev", ""],
    [10, "앤서니 아이보", "Anthony Ivo", ""],
    [0, "와일드독", "", ""],
    [0, "로리 레간", "", ""],
    [0, "애블린 샤프", "", ""],
    [0, "이사벨 로셰프", "", ""],
    [0, "매튜 슈리브", "", ""],
    [0, "빅슨", "", ""],
    [0, "빌리 말론", "", ""],
    [0, "에이드리안 체이스", "", ""],
    [0, "티나 볼랜드", "", ""],
    [0, "에드워드 파이어스", "", ""],
    [0, "카운트", "", ""],
    [0, "사이러스 골드", "", ""],
    [0, "브라더 블러드", "", ""],
    [0, "가필드 린스", "", ""],
    [0, "미스터 블랭크", "", ""],
    [0, "바튼 매티스", "", ""],
    [0, "벤 터너", "", ""],
    [0, "제이비어 리드", "", ""],
    [0, "알 오왈", "", ""],
    [0, "다저", "", ""],
    [0, "사이먼 라크로이", "", ""],
    [0, "캐리 커터", "", ""],
    [0, "디거 하크니스", "", ""],
    [0, "대니엘 브릭웰", "", ""],
    [0, "앤디 디글", "", ""],
    [0, "토비아스 처치", "", ""],
    [0, "프로메테우스", "", ""],
    [0, "쿠퍼", "Cooper Seldon", ""],
    [0, "마이론", "Cooper Seldon", ""],
    [0, "", "", ""],
    [0, "", "", ""]
];

var cast_flash = [
    [91, "배리 앨런<br>플래시", "Barry Allen<br>Flash", "https://s-media-cache-ak0.pinimg.com/236x/04/1f/82/041f82a5079535dc954690e492ddd017.jpg"],
    [19, "헨리 앨런", "Henry Allen", "https://s-media-cache-ak0.pinimg.com/564x/e9/c2/d8/e9c2d8dd0681758c5537d80358c742e9.jpg"],
    [12, "노라 앨런", "Nora Allen", ""],
    [69, "케이틀린 스노우", "Caitlin Snow", "https://s-media-cache-ak0.pinimg.com/236x/b1/22/6a/b1226a2e50ec3bfe632eea73da1e8c05.jpg"],
    [69, "시스코 라몬<br>바이브", "Cisco Ramon<br>Vibe", "https://s-media-cache-ak0.pinimg.com/564x/cc/c1/e8/ccc1e82c789259d5cf367f758bffb918.jpg"],
    [69, "해리슨 '해리' 웰스", "Harrison 'Harry' Wells", "https://s-media-cache-ak0.pinimg.com/564x/c6/4b/aa/c64baac49c0a44ccce7238eb3a43d3e3.jpg"],
    [19, "제시 웰스", "Jesse Wells", "https://static.tvmaze.com/uploads/images/medium_portrait/95/239400.jpg"],
    [10, "로니 레이먼드<br>파이어스톰", "Ronnie Raymond<br>Firestorm", "https://s-media-cache-ak0.pinimg.com/236x/d5/03/0a/d5030aeaaaed669439598487f7739436.jpg"],
    [10, "마틴 스타인<br>파이어스톰", "Martin Stein<br>Firestorm", "https://i.pinimg.com/originals/5e/b3/d0/5eb3d00090f11ad26672016319bbd857.jpg"],
    [1, "제퍼슨 잭슨<br>파이어스톰", "Jefferson 'Jax' Jackson<br>Firestorm", "https://vignette.wikia.nocookie.net/theflash/images/9/9e/Firestorm_Franz_Drameh.jpg"],

    [69, "조 웨스트", "Joe West", "https://s-media-cache-ak0.pinimg.com/236x/ae/49/2b/ae492b512c211d733cb7fbac49886f27.jpg"],
    [69, "아이리스 웨스트", "Iris West", "https://vignette.wikia.nocookie.net/marvel_dc/images/7/78/Iris_West_Arrow_0003.jpg/revision/latest/top-crop/width/360/height/450"],
    [2, "프랜신 웨스트", "Francine West", "https://static.tvmaze.com/uploads/images/medium_portrait/26/66534.jpg"],
    [38, "월리 웨스트<br>월라스", "Wally West", "http://40.media.tumblr.com/9017b0e1a574b027bb9ad233da570c9b/tumblr_nsmt0et1iW1u496xso2_250.jpg"],
    [24, "데이비드 싱", "David Singh", "https://vignette.wikia.nocookie.net/marvel_dc/images/6/6a/David_Singh_%28Arrowverse%29_002.jpg/revision/latest/top-crop/width/360/height/450"],
    [27, "에드워드 쏜", "Eddie Thawne", "https://s-media-cache-ak0.pinimg.com/236x/a4/61/84/a4618472649d3c6c39b579cda647c35f.jpg"],
    [5, "", "Eobard Thawne", ""],
    [10, "패티 스피봇", "Patty Spivot", "https://vignette.wikia.nocookie.net/toonultra/images/d/db/Patty_Spivot.png/revision/latest/top-crop/width/360/height/450"],
    [19, "제이 개릭<br>플래시", "Jay Garrick<br>Flash", "https://vignette.wikia.nocookie.net/arrow/images/d/dc/Jay_Garrick_Teddy_Sears.png/revision/latest/top-crop/width/360/height/450"],

    [10, "레너드 스나트<br>캡틴 콜드", "Leonard Snart<br>Captain Cold", "https://s-media-cache-ak0.pinimg.com/236x/5c/95/a9/5c95a9f7335c1875cdbd5bbda828152c.jpg"],
    [1, "리사 스나트<br>골든 글라이더", "Lisa Snart<br>Golden Glider", "https://vignette.wikia.nocookie.net/theflash/images/1/15/Lisa_Snart_Peyton_List-1.jpg/revision/latest/scale-to-width-down/250"],
    [1, "루이스 스나트", "Lewis Snart", "https://cdn1.thr.com/sites/default/files/imagecache/NFE_portrait/2015/07/mi-pic.jpg"],
    [5, "믹 로리", "Mick Rory", "https://i.pinimg.com/564x/e8/39/27/e83927a7fc75ad8b1795febe57547a90.jpg"],
    [4, "웨이드 아일링", "Wade Eiling", "http://vignette4.wikia.nocookie.net/marvelcrossroads/images/8/83/Wade_Eiling_%28Earth-9822%29.png/revision/latest?cb=20160330233435"],
    [3, "토니", "Tony Woodward", "https://s-media-cache-ak0.pinimg.com/564x/06/82/d1/0682d1d7fc71714a05dd947c7ca7b32c.jpg"],
    [2, "벳 샌 수시", " Bette Sans Souci", "https://s-media-cache-ak0.pinimg.com/564x/c2/a1/a0/c2a1a05c02ec31b32fbbbbd1e3c047fd.jpg"],
    [1, "윌리엄 토크먼", "Clock King", "https://s-media-cache-ak0.pinimg.com/564x/e6/a6/7e/e6a67e3d374f1eea38a9aa4733dc7cd9.jpg"],
    [1, "클라이드 마든", "Clyde Mardon", "https://vignette.wikia.nocookie.net/marvel_dc/images/a/a6/Clyde_Mardon_%28Arrowverse%29_001.jpg/revision/latest/top-crop/width/360/height/450"],
    [1, "마크 마든<br>웨더위저드", "Mark Mardon<br>Weather Wizard", "https://i.pinimg.com/originals/2a/17/83/2a178395a2ffc8aeb81611dea66de389.jpg"],
    [1, "줌", "Zoom", "https://vignette.wikia.nocookie.net/villains/images/f/fb/Zoom_001.jpg/revision/latest/top-crop/width/360/height/450"],
    [1, "아톰 스매셔", "", "https://beckett-www.s3.amazonaws.com/news/news-content/uploads/2017/06/2017-Cryptozoic-The-Flash-Season-2-Metas-Atom-Smasher.jpg"],
    [1, "헨리 휴윗", "Henry Hewitt<br>Tokamak", "https://vignette.wikia.nocookie.net/marvel_dc/images/6/66/Henry_Hewitt_%28Arrowverse%29_001.png/revision/latest/top-crop/width/360/height/450"],
    [7, "린다 박", "Linda Park<br>Dr. Light", "https://vignette.wikia.nocookie.net/arrow/images/7/7b/Linda_Park.png/revision/latest/top-crop/width/360/height/450"],
    [1, "그로드", "Grodd", "https://vignette.wikia.nocookie.net/arrow/images/3/3c/Grodd_watching_Flash_vs_Solovar.png/revision/latest/top-crop/width/360/height/450"],
    [, "반달 새비지", "Vandal Savage", "https://upload.wikimedia.org/wikipedia/en/f/f4/Vandal_Savage_%28Casper_Crump%29.png?1592757458284"],
    [1, "캔드라 손더스<br>호크걸", "Kendra Saunders<br>Hawkgirl", "https://vignette.wikia.nocookie.net/arrow/images/e/e3/Kendra_Saunders.png/revision/latest/top-crop/width/360/height/450"],
    [, "", "Carter Hall<br>Khufu", "https://vignette.wikia.nocookie.net/kingsfan-characters/images/f/f0/Hall%2C_carter.jpg/revision/latest/top-crop/width/360/height/450"],
    [, "", "Samantha Clayton", "https://i.pinimg.com/originals/ee/66/8a/ee668aa4d2ee45017cd42008c6ecee97.jpg"],
    [, "제임스 제시", "James Jesse", "https://vignette.wikia.nocookie.net/marvel_dc/images/5/55/James_Jesse_Arrow_002.png/revision/latest/top-crop/width/360/height/450"],
    [, "트릭스터", "The Trickster", "https://vignette.wikia.nocookie.net/marvel_dc/images/5/55/James_Jesse_Arrow_002.png/revision/latest/top-crop/width/360/height/450"],
    [13, "줄리안 알버트", "Julian Albert", ""],
    [10, "세실 호톤", "Cecile Horton", ""],
    [7, "", "Iron Mask", ""],
    [6, "", "Savitar", ""],
    [5, "", "Gypsy", ""],
    [5, "", "Christina McGee", ""],
    [5, "", "Francine West", ""],
    [, "", "", ""],
    [0, "제퍼슨 잭슨", "", ""],
    [0, "스피드 포스", "", ""],
    [0, "솔로바", "", ""],
    [0, "뮤직 마이스터", "", ""],
    [0, "댄튼 블랙", "", ""],
    [0, "카일 님부스", "", ""],
    [0, "하틀리 래서웨이", "", ""],
    [0, "", "", ""],
    [0, "악셀 워커", "", ""],
    [0, "", "", ""]
];

var cast_constantine = [
    [13, "존 콘스탄틴", "John Constantine", "https://s-media-cache-ak0.pinimg.com/564x/5c/53/34/5c533483b313a8cc8b4830aeb9f73ec3.jpg"],
    [10, "채즈", "Chas Chandler", "https://whoswhoincomicbookmovies.files.wordpress.com/2014/09/chas_chandler_f2.jpg"],
    [12, "제드", "Zed Martin", "https://s-media-cache-ak0.pinimg.com/236x/28/f0/ab/28f0ab15935dca51fcfa85f35224bcf3.jpg"],
    [12, "매니", "Manny", "https://s-media-cache-ak0.pinimg.com/236x/f3/c4/ae/f3c4aeb1b0f2b1be040f9a6627c4e796.jpg"],
    [0, "", "", ""],

    [3, "파파 미드나잇", "Papa Midnite", "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTOhHWWEagNCGcQvCVRgDd5dkHxTj3MVrm6rh_5m8_Ctq_ki7uR"],
    [3, "", "Michael", ""],
    [3, "", "Gary Lester", ""],
    [2, "짐 코리건", "Jim Corrigan", "https://vignette2.wikia.nocookie.net/constantine/images/9/99/Jim_Corrigan.png/revision/latest/scale-to-width-down/250"],
    [0, "", "", ""],

    [0, "", "", ""]
];

var cast_runaways = [
    [, "알렉스 와일더", "Alex Wilder", "https://vignette.wikia.nocookie.net/runaways/images/f/fd/Alex_Wilder-S1.png/revision/latest?cb=20171219203158"],
    [, "", "", ""],
    [, "체이스 스타인", "Chase Stein", "https://vignette.wikia.nocookie.net/runaways/images/a/ae/Chase_Stein-S1.png/revision/latest?cb=20180104031638"],
    [, "", "", ""],
    [, "몰리 에르난데스", "Molly Hernandez", "https://vignette.wikia.nocookie.net/runaways/images/9/91/Molly_Hernandez-S1.png/revision/latest?cb=20171226224430"],
    [, "", "", ""],
    [, "", "", ""],
    [, "데스티니 곤잘레스", "Destiny Gonzalez", "https://vignette.wikia.nocookie.net/runaways/images/7/73/Destiny_Gonzalez-S1.png/revision/latest?cb=20171125051710"],
    [, "다리우스 데이비스", "Darius Davis", "https://vignette.wikia.nocookie.net/runaways/images/2/2f/Darius_Davis-S1.png/revision/latest?cb=20171204135453"],
    [, "", "Kincaid", "https://vignette.wikia.nocookie.net/runaways/images/8/82/Kincaid-S1.png/revision/latest?cb=20180111031455"],

    [, "제프리 와일더", "Geoffrey Wilder", "https://vignette.wikia.nocookie.net/runaways/images/7/7c/Geoffrey_Wilder-S1.png/revision/latest?cb=20171115170300"],
    [, "캐서린 와일더", "Catherine Wilder", "https://vignette.wikia.nocookie.net/runaways/images/3/31/Catherine_Wilder-S1.png/revision/latest?cb=20171211034502"],
    [, "빅터 스타인", "Victor Stein", "https://vignette.wikia.nocookie.net/runaways/images/d/d1/Victor_Stein-S1.png/revision/latest?cb=20171211035107"],
    [, "자넷 스타인", "Janet Stein", "https://vignette.wikia.nocookie.net/runaways/images/4/4a/Janet_Stein-S1.png/revision/latest?cb=20171219203533"],
    [, "진 에르난데스", "Gene Hernandez", "https://vignette.wikia.nocookie.net/runaways/images/7/76/Gene_Hernandez-S1.png/revision/latest?cb=20180108023440"],
    [, "엘리스 에르난데스", "Alice Hernandez", "https://vignette.wikia.nocookie.net/runaways/images/f/f8/Alice_Hernandez-S1.png/revision/latest?cb=20180108023423"],
    [, "", "", ""],
    [, "조나", "Jonah", "https://vignette.wikia.nocookie.net/runaways/images/9/9a/Jonah-S1.png/revision/latest?cb=20180104031443"],
    [, "올드 레이스", "", ""],
    [, "", "", ""],

    [, "니코 미노루", "Nico Minoru", "https://vignette.wikia.nocookie.net/runaways/images/5/58/Nico_Minoru-S1.png/revision/latest?cb=20171219203242"],
    [, "에이미 미노루", "Amy Minoru", "https://vignette.wikia.nocookie.net/runaways/images/1/18/Amy_Minoru-S1.png/revision/latest?cb=20180105010447"],
    [, "캐롤리나 딘", "Karolina Dean", "https://vignette.wikia.nocookie.net/runaways/images/a/a9/Karolina_Dean-S1.png/revision/latest?cb=20180104171240"],
    [, "", "", ""],
    [, "거트 요크스", "Gertrude Yorkes", "https://vignette.wikia.nocookie.net/runaways/images/e/ea/Gert_Yorkes-S1.png/revision/latest?cb=20180104170133"],
    [, "", "", ""],
    [, "", "", ""],
    [, "", "", ""],
    [, "", "", ""],
    [, "", "", ""],

    [, "티나 미노루", "Tina Minoru", "https://vignette.wikia.nocookie.net/runaways/images/1/15/Tina_Minoru-S1.png/revision/latest?cb=20180104031405"],
    [, "로버트 미노루", "Robert Minoru", "https://vignette.wikia.nocookie.net/runaways/images/f/fb/Robert_Minoru-S1.png/revision/latest?cb=20180104031510"],
    [, "프랭크 딘", "Frank Dean", "https://vignette.wikia.nocookie.net/runaways/images/6/64/Frank_Dean-S1.png/revision/latest?cb=20171115170515"],
    [, "레슬리 딘", "Leslie Dean", "https://vignette.wikia.nocookie.net/runaways/images/0/0c/Leslie_Dean-S1.png/revision/latest?cb=20171115170802"],
    [, "데일 요크스", "Dale Yorkes", "https://vignette.wikia.nocookie.net/runaways/images/e/ec/Dale_Yorkes-S1.png/revision/latest?cb=20180104031550"],
    [, "스테이시 요크스", "Stacey Yorkes", "https://vignette.wikia.nocookie.net/runaways/images/4/4e/Stacey_Yorkes-S1.png/revision/latest?cb=20180104171837"],
    [, "", "", ""],
    [, "", "", ""],
    [, "", "", ""],
    [, "", "", ""]
];

var cast_supergirl = [
    [1, "카라 댄버스", "Kara Danvers", "https://66.media.tumblr.com/f38ee0485ade97c1a6cbc49c1b5ef5c7/tumblr_orrno6fU5c1w9jjzno6_1280.png"],
    [, "카라 조엘<br>슈퍼걸", "Kara Zor-el<br>Supergirl", "https://vignette.wikia.nocookie.net/shipping/images/4/43/Kara.jpeg"],
    [1, "알렉스 댄버스", "Alex Danvers", "https://img.sharetv.com/shows/characters/large/supergirl.alexandra_danvers.jpg"],
    [, "엘리자 댄버스", "Eliza Danvers", "https://comicvine1.cbsistatic.com/uploads/original/1/18154/5430833-4285299868-latest"],
    [, "제레미아 댄버스", "Jeremiah Danvers", "https://vignette.wikia.nocookie.net/headhuntersholosuite/images/0/04/Supergirl_1x01_002.jpg/revision/latest/top-crop/width/360/height/450"],
    [1, "윈 스콧", "Winn Schott", "https://vignette.wikia.nocookie.net/p__/images/a/af/Winn2.jpg/revision/latest?cb=20151110220250&path-prefix=protagonist"],
    [1, "캣 그랜트", "Cat Grant", "https://i.pinimg.com/564x/22/77/7c/22777cb8bbdd3b452a2de0cef1759363.jpg"],
    [, "", "Katherine Grant", "https://static.tvmaze.com/uploads/images/medium_portrait/32/81997.jpg"],
    [1, "지미 올슨", "James 'Jimmy' Olsen", "http://tib.cjcs.com/files/2017/12/SGS3JO001-600.jpg"],
    [1, "행크 핸쇼", "Hank Henshaw", "https://i.pinimg.com/564x/b4/5f/fa/b45ffa8d564d8da339809b321182868a.jpg"],
    [, "존 존스", "J'onn J'onzz", "https://pm1.narvii.com/7023/33088261f2963f138fd762160bf025810038765dr1-1433-2048v2_hq.jpg"],
    [1, "", "Hartmann", "https://vignette.wikia.nocookie.net/arrow/images/a/aa/Hartmann.png/revision/latest/top-crop/width/360/height/450"],

    [, "알룰라 조엘", "Alura Zor-El", "https://pbs.twimg.com/profile_images/749002341072900096/X4xInAaN_400x400.jpg"],
    [1, "아스트라", "Astra", "https://vignette.wikia.nocookie.net/arrow/images/4/4b/Astra.png/revision/latest/top-crop/width/360/height/450"],
    [1, "", "Gor", "https://vignette.wikia.nocookie.net/arrow/images/5/5d/Gor.png/revision/latest/top-crop/width/360/height/450"],
    [, "", "Hellgrammite", "https://vignette.wikia.nocookie.net/arrow/images/e/e5/Hellgrammite.png/revision/latest/top-crop/width/360/height/450"],
    [, "<br>리액트론", "Ben Krull<br>Reactron", "https://vignette.wikia.nocookie.net/villains/images/6/64/Reactron-0.png"],
    [, "에단 녹스", "Ethan Knox", "https://vignette.wikia.nocookie.net/tvdatabase/images/9/98/Supergirl_1x05_004.jpg"],
    [, "레슬리<br>라이브와이어", "Leslie Willis<br>Livewire", "https://vignette.wikia.nocookie.net/arrow/images/5/53/Leslie_Willis.png/revision/latest/top-crop/width/360/height/450"],
    [, "레드 토네이도", "Red Tornado", "https://vignette.wikia.nocookie.net/villains/images/5/5d/RedTornado.png/revision/latest/top-crop/width/360/height/450"],
    [, "", "", ""],

    [1, "맥스웰 로드", "Maxwell Lord", "https://media.aintitcool.com/media/uploads/2015/herc/facinelli_medium.jpg"],
    [, "루시 레인", "Lucy Lane", "https://pbs.twimg.com/profile_images/786146816626614272/oIJrV5rI_400x400.jpg"],
    [, "", "Sam Lane", "https://vignette.wikia.nocookie.net/marvel_dc/images/4/43/Sam_Lane_Supergirl_TV_Series_0001.jpg/revision/latest/top-crop/width/360/height/450"],
    [, "", "", ""],
    [, "", "", ""],
    [, "", "", ""],
    [, "", "", ""],
    [, "", "", ""],
    [, "", "", ""],
    [, "", "", ""]
];

function CastList() {
    var cast;
    var BoldOnOpen = new Array();
    var BoldOnClose = new Array();
    var BoldIndex;

    var TitleTag = location.href.split("?");
    switch (TitleTag[1]) {
        case "flash":
            cast = cast_flash;
            BoldIndex = 1;
            break;
        case "supergirl":
            cast = cast_supergirl;
            BoldIndex = 2;
            break;
        case "constantine":
            cast = cast_constantine;
            BoldIndex = 3;
            break;
        case "runaways":
            cast = cast_runaways;
            BoldIndex = 4;
            break;
        case "strthings":
            cast = cast_strthings;
            BoldIndex = 5;
            break;
        default:
            cast = cast_arrow;
            BoldIndex = 0;
            break;
    }

    for (var i = 0; i < cast.length; i++) {
        BoldOnOpen[i] = "";
        BoldOnClose[i] = "";
    }
    BoldOnOpen[BoldIndex] = "<B>[";
    BoldOnClose[BoldIndex] = "]</B>";

    document.write("<TABLE ALIGN=CENTER>");
    for (var total = 0; total < cast.length; total += COL_4_LINE) {
        document.write("<TR ALIGN=CENTER>");
        document.write("<TD COLSPAN=" + COL_4_LINE + " BGCOLOR=#d0d0f0>");
        document.write("	<a href=JavaScript:location.href='index.html?arrow'>"			+ BoldOnOpen[0] + "[ ARROW ]"			+ BoldOnClose[0] + "</a>&nbsp;&nbsp;");
        document.write("	<a href=JavaScript:location.href='index.html?flash'>"			+ BoldOnOpen[1] + "[ FLASH ]"			+ BoldOnClose[1] + "</a>&nbsp;&nbsp;");
        document.write("	<a href=JavaScript:location.href='index.html?supergirl'>"		+ BoldOnOpen[2] + "[ SUPER GIRL ]"		+ BoldOnClose[2] + "</a>&nbsp;&nbsp;");
        document.write("	<a href=JavaScript:location.href='index.html?constantine'>"	+ BoldOnOpen[3] + "[ CONSTANTINE ]"		+ BoldOnClose[3] + "</a>&nbsp;&nbsp;");
        document.write("	<a href=JavaScript:location.href='index.html?runaways'>"		+ BoldOnOpen[4] + "[ RUNAWAYS ]"		+ BoldOnClose[4] + "</a>&nbsp;&nbsp;");
        document.write("	<a href=JavaScript:location.href='index.html?strthings'>"		+ BoldOnOpen[5] + "[ STRANGER THINGS ]"	+ BoldOnClose[5] + "</a>");
        document.write("</TD>");
        document.write("</TR>");

        document.write("<TR ALIGN=CENTER VALIGN=TOP>");
        for (var i = 0; i < COL_4_LINE; i++) {

            var cnt = "";
            if (cast[total + i][0] > 0) {
                cnt = "(" + cast[total + i][0] + ")";
            }

            var BoldNameOpen = "";
            var BoldNameClose = "";
            if (cast[total + i][0] >= NUM_BOLD) {
                BoldNameOpen = "<B>";
                BoldNameClose = "</B>"
            }

            document.write("<TD>" + BoldNameOpen + cnt + "<BR>" + cast[total + i][1] + "<BR>" + cast[total + i][2] + BoldNameClose + "</TD>");
        }
        document.write("</TR>");

        document.write("<TR ALIGN=CENTER VALIGN=TOP>");
        for (var j = 0; j < COL_4_LINE; j++) {
            document.write("<TD><IMG WIDTH=" + IMG_WIDTH + " SRC=" + cast[total + j][3] + "><BR><BR></TD>");
        }
        document.write("</TR>");
    }
    document.write("</TABLE>");
}
