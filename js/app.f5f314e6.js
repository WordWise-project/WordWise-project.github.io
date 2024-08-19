(function(){"use strict";var n={4672:function(n,e,o){var t=o(5130),r=o(6768);const i={key:1};function s(n,e,o,t,s,a){const l=(0,r.g2)("MainPage"),c=(0,r.g2)("SetPage");return(0,r.uX)(),(0,r.CE)(r.FK,null,["mainpage"==s.page?((0,r.uX)(),(0,r.Wv)(l,{key:0,onTurnToClass:a.turnToClass,onTurnToSet:a.turnToSet,onTurnToMenu:a.turnToMenu},null,8,["onTurnToClass","onTurnToSet","onTurnToMenu"])):(0,r.Q3)("",!0),"classpage"==s.page?((0,r.uX)(),(0,r.CE)("h1",i,"클래스 페이지")):(0,r.Q3)("",!0),"setpage"==s.page?((0,r.uX)(),(0,r.Wv)(c,{key:2})):(0,r.Q3)("",!0)],64)}const a={class:"backgroundImg"},l=(0,r.Lk)("h1",{class:"WordWiseLogo"},"WORDWISE",-1),c=(0,r.Lk)("div",{class:"sepLine"},null,-1),d=(0,r.Lk)("div",{class:"sepLineUnder"},null,-1),u={class:"menuDiv"},w=(0,r.Lk)("a",{href:"https://github.com/WordWise-project/WordWise-project.github.io/issues",class:"menuText5"},[(0,r.Lk)("h1",{class:"menuText menuText5"},"버그제보")],-1);function g(n,e,o,t,i,s){const g=(0,r.g2)("SchoolBar"),h=(0,r.g2)("PlusBar");return(0,r.uX)(),(0,r.CE)("div",a,[l,c,(0,r.bF)(g,{schoolName:"대전느리울중학교",teacherName:"이지현",barName:"[2024 2학기] 1학년 6반",onClick:e[0]||(e[0]=e=>n.$emit("turnToClass"))}),(0,r.bF)(h),d,(0,r.Lk)("div",u,[(0,r.Lk)("h1",{class:"menuText menuText1",onClick:e[1]||(e[1]=e=>n.$emit("turnToClass"))}," 클래스 "),(0,r.Lk)("h1",{class:"menuText menuText2",onClick:e[2]||(e[2]=e=>n.$emit("turnToSet"))},"세트"),(0,r.Lk)("h1",{class:"menuText menuText3",onClick:e[3]||(e[3]=e=>n.$emit("turnToSet"))},"퀴즈배틀"),(0,r.Lk)("h1",{class:"menuText menuText4",onClick:e[4]||(e[4]=e=>n.$emit("turnToMenu"))},"메뉴"),w])])}var h=o(4232);const m={class:"schoolBar"},p=(0,r.Lk)("div",{class:"sepBarInBar"},null,-1),f={class:"barNameString"},k={class:"schoolTeacher"};function v(n,e,o,t,i,s){return(0,r.uX)(),(0,r.CE)("div",m,[p,(0,r.Lk)("h1",f,[(0,r.Lk)("b",null,(0,h.v_)(this.barName),1)]),(0,r.Lk)("h1",k,(0,h.v_)(this.schoolName)+" | "+(0,h.v_)(this.teacherName),1)])}
//! 이거에 폰트 적용하기
var L={name:"SchoolBar",components:{},props:{schoolName:String,teacherName:String,barName:String}},T=o(1241);const C=(0,T.A)(L,[["render",v]]);var W=C;const b={class:"plusBar"},x=(0,r.Lk)("h1",{className:"plusBarText"},[(0,r.Lk)("b",null,"+")],-1),y=(0,r.Lk)("h1",{className:"plusBarText asdText"},[(0,r.Lk)("b",null,"새로운 클래스를 추가하세요")],-1),B=[x,y];function M(n,e,o,t,i,s){return(0,r.uX)(),(0,r.CE)("div",b,B)}
//! 이거에 폰트 적용하기
var P={name:"PlusBar",components:{}};const F=(0,T.A)(P,[["render",M]]);var S=F,N={name:"MainPage",components:{SchoolBar:W,PlusBar:S},methods:{changePage:function(n){this.page=n}}};const O=(0,T.A)(N,[["render",g]]);var A=O;const E={class:"backgroundImg"},X={key:0,class:"setMain"},_=(0,r.Lk)("h1",{class:"setMainTex"},[(0,r.Lk)("b",null,[(0,r.eW)("[2024 2학기] 1학년"),(0,r.Lk)("br"),(0,r.eW)("단어선택 리스트")])],-1),I=(0,r.Lk)("p",{class:"setText"},"세트",-1),J={class:"setListItem"},Q=(0,r.Lk)("div",{class:"setListWord"},[(0,r.Lk)("h3",{class:"setListWordText"},[(0,r.Lk)("b",null,"단어")])],-1),R=["onClick"],j={key:1,class:"setWords"},$={class:"upperBg"},D=(0,r.Lk)("div",{class:"wordDiv"},[(0,r.Lk)("p",{class:"wordDivText"},"단어")],-1),G={class:"fileNameText"},K=(0,r.Lk)("div",{class:"middleBg"},null,-1),U={class:"wordMean"},q={class:"wordMeanText"},z={class:"wordMeanTextWord"},V=(0,r.Lk)("br",null,null,-1),H={class:"wordMeanTextDiv",style:{width:"fit-content"}},Y={class:"wordMeanTextMeaning",style:{display:"inline-block"}},Z={class:"wordMenuBar"},nn={class:"wordMenuButton"},en={class:"wordMenuButton"},on={class:"wordMenuButton"},tn={key:2,class:"word1Page"},rn=(0,r.Lk)("div",{class:"word1PageMiddle"},null,-1),sn={class:"quiz1Word"},an={class:"word1PageProbText"},ln={class:"word1PageProbText"},cn={class:"word1PageProbText"},dn={key:3,class:"word2Page"},un={class:"middleDivForW2"},wn={class:"MiddleTextForW2"},gn={class:"InputTools"},hn={key:4,class:"word3Page"},mn=(0,r.Lk)("div",{class:"w3Top"},[(0,r.Lk)("div",{class:"JulieT"},[(0,r.Lk)("p",{class:"JText"},[(0,r.Lk)("b",null,"T")])]),(0,r.Lk)("p",{class:"w3TopText"}," 영어 선생님과의 대화 ")],-1),pn={class:"w3Middle"},fn=(0,r.Lk)("div",{class:"chat chatLeft"},[(0,r.Lk)("div",{class:"profileT"}," T "),(0,r.Lk)("div",{class:"chatText"}," 문제 보냈어! 한번 풀어볼까? ")],-1),kn={class:"chat"},vn={key:0,class:"chat chatLeft"},Ln=(0,r.Lk)("div",{class:"profileT"},"T",-1),Tn=(0,r.Lk)("div",{class:"chatText"},"잘했어! 다음 문제도 풀어볼까?",-1),Cn=[Ln,Tn],Wn={key:1,class:"chat chatLeft"},bn=(0,r.Lk)("div",{class:"profileT"},"T",-1),xn=(0,r.Lk)("div",{class:"chatText"},"아쉽네.. 다음 문제는 꼭 맞추자!",-1),yn=[bn,xn],Bn={key:2,class:"chat chatRight"},Mn=(0,r.Lk)("div",{class:"chatText"}," 정답을 제출했어요. ",-1),Pn=(0,r.Lk)("div",{class:"profileS"},"S",-1),Fn=[Mn,Pn],Sn={class:"w3Bottom"},Nn={class:"w3BotText"},On={class:"HintText"};function An(n,e,o,i,s,a){return(0,r.uX)(),(0,r.CE)("div",E,["main"==s.Wsetpage?((0,r.uX)(),(0,r.CE)("div",X,[_,I,((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(s.files,(n=>((0,r.uX)(),(0,r.CE)("div",J,[Q,(0,r.Lk)("h3",{class:"setListText",onClick:e=>a.changePageWords(n.name)},(0,h.v_)(n.name),9,R)])))),256))])):(0,r.Q3)("",!0),"words"==s.Wsetpage?((0,r.uX)(),(0,r.CE)("div",j,[(0,r.Lk)("div",$,[D,(0,r.Lk)("p",G,[(0,r.Lk)("b",null,(0,h.v_)(this.fileNameFor),1)])]),K,((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(s.fileForWord,(n=>((0,r.uX)(),(0,r.CE)("div",U,[(0,r.Lk)("p",q,[(0,r.eW)(" ◼ "),(0,r.Lk)("span",z,(0,h.v_)(n.word),1),V,(0,r.Lk)("div",H,[(0,r.Lk)("p",Y,(0,h.v_)(n.meaning),1)])])])))),256)),(0,r.Lk)("div",Z,[(0,r.Lk)("div",nn,[(0,r.Lk)("h2",{class:"wordMenuButtonText",onClick:e[0]||(e[0]=(...n)=>a.toAm&&a.toAm(...n))},"암기")]),(0,r.Lk)("div",en,[(0,r.Lk)("h2",{class:"wordMenuButtonText",onClick:e[1]||(e[1]=n=>s.Wsetpage="word2")},"리콜")]),(0,r.Lk)("div",on,[(0,r.Lk)("h2",{class:"wordMenuButtonText",onClick:e[2]||(e[2]=n=>s.Wsetpage="word3")},"테스트")])])])):(0,r.Q3)("",!0),"word1"==s.Wsetpage?((0,r.uX)(),(0,r.CE)("div",tn,[rn,(0,r.Lk)("p",sn,(0,h.v_)(s.fileForWord[this.probCount].word),1),(0,r.Lk)("div",{class:"word1PageProb",onClick:e[3]||(e[3]=n=>a.changeWordProbT2(0))},[(0,r.Lk)("p",an,(0,h.v_)(this.arr[0]),1)]),(0,r.Lk)("div",{class:"word1PageProb",onClick:e[4]||(e[4]=n=>a.changeWordProbT2(1))},[(0,r.Lk)("p",ln,(0,h.v_)(this.arr[1]),1)]),(0,r.Lk)("div",{class:"word1PageProb",onClick:e[5]||(e[5]=n=>a.changeWordProbT2(2))},[(0,r.Lk)("p",cn,(0,h.v_)(this.arr[2]),1)])])):(0,r.Q3)("",!0),"word2"==s.Wsetpage?((0,r.uX)(),(0,r.CE)("div",dn,[(0,r.Lk)("div",un,[(0,r.Lk)("p",wn,(0,h.v_)(this.fileForWord[s.w2count].word),1)]),(0,r.Lk)("div",gn,[(0,r.bo)((0,r.Lk)("input",{"onUpdate:modelValue":e[6]||(e[6]=n=>s.w2ans=n),class:"InputField",placeholder:"정답을 입력하세요!",type:"text"},null,512),[[t.Jo,s.w2ans]]),(0,r.Lk)("button",{class:"InputButton",onClick:e[7]||(e[7]=(...n)=>a.inputAnswerW2&&a.inputAnswerW2(...n))},"←")])])):(0,r.Q3)("",!0),"word3"==s.Wsetpage?((0,r.uX)(),(0,r.CE)("div",hn,[mn,(0,r.Lk)("div",pn,[fn,((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(s.chats,(n=>((0,r.uX)(),(0,r.CE)("div",kn,["LeftRight"==n?((0,r.uX)(),(0,r.CE)("div",vn,Cn)):(0,r.Q3)("",!0),"LeftWrong"==n?((0,r.uX)(),(0,r.CE)("div",Wn,yn)):(0,r.Q3)("",!0),"Right"==n?((0,r.uX)(),(0,r.CE)("div",Bn,Fn)):(0,r.Q3)("",!0)])))),256))]),(0,r.Lk)("div",Sn,[(0,r.Lk)("h1",Nn," Quiz."+(0,h.v_)(this.w3count+1),1),(0,r.bo)((0,r.Lk)("input",{"onUpdate:modelValue":e[8]||(e[8]=e=>n.w3ans=e),class:"w3Input",type:"text",placeholder:"답을 입력하세요"},null,512),[[t.Jo,n.w3ans]]),(0,r.Lk)("button",{class:"w3InputButton",onClick:e[9]||(e[9]=(...n)=>a.inputAnswerW3&&a.inputAnswerW3(...n))},"←"),(0,r.Lk)("p",On,[(0,r.Lk)("b",null," ⚫ 힌트 : "+(0,h.v_)(this.fileForWord[this.w3count].meaning),1)])])])):(0,r.Q3)("",!0)])}o(4114);var En=JSON.parse('[{"name":"중1 비상 5단원","filePath":"FirstJSON"},{"name":"중1 비상 6단원","filePath":null},{"name":"중1 비상 7단원","filePath":null}]'),Xn=JSON.parse('[{"word":"add","meaning":"더하다"},{"word":"add up to","meaning":"합계 ~가 되다"},{"word":"ahead of","meaning":"~앞에"},{"word":"begin","meaning":"시작되다"},{"word":"carefully","meaning":"주의 깊게"},{"word":"chase","meaning":"추적"},{"word":"cheap","meaning":"싼"},{"word":"clue","meaning":"단서"},{"word":"correct","meaning":"맞는"},{"word":"enter","meaning":"들어가다"},{"word":"find out","meaning":"발견하다"},{"word":"following","meaning":"다음에 나오는"},{"word":"have to","meaning":"~해야 한다"},{"word":"heavy","meaning":"무거운"},{"word":"information desk","meaning":"안내소"},{"word":"line up","meaning":"한 줄로 배열하다"},{"word":"lock","meaning":"자물쇠"},{"word":"maze","meaning":"미로"},{"word":"part","meaning":"부분"},{"word":"popular","meaning":"인기 있는"},{"word":"quickly","meaning":"빨리"},{"word":"record","meaning":"기록"},{"word":"second","meaning":"초"},{"word":"shape","meaning":"모양"},{"word":"solve","meaning":"풀다"},{"word":"treasure","meaning":"보물"},{"word":"triangle","meaning":"삼각형"},{"word":"use up","meaning":"다 써버리다"},{"word":"wait for","meaning":"~을 기다리다"},{"word":"way","meaning":"방법"},{"word":"answer","meaning":"답"},{"word":"cap","meaning":"모자"},{"word":"doll","meaning":"인형"},{"word":"end","meaning":"끝"},{"word":"field trip","meaning":"현장 학습"},{"word":"important","meaning":"중요한"},{"word":"math","meaning":"수학"},{"word":"money","meaning":"돈"},{"word":"note","meaning":"메모"},{"word":"number","meaning":"숫자"},{"word":"question","meaning":"질문"},{"word":"watermelon","meaning":"수박"},{"word":"win","meaning":"쟁취하다"}]'),_n=JSON.parse('[{"word":"a kind of","meaning":"일종의"},{"word":"ago","meaning":"~전에"},{"word":"beef","meaning":"소고기"},{"word":"be made of","meaning":"~로 만들다"},{"word":"boil","meaning":"끓이다"},{"word":"breakfast","meaning":"아침 식사"},{"word":"Chinese","meaning":"중국의"},{"word":"cook","meaning":"요리하다"},{"word":"cool down","meaning":"~을 식히다"},{"word":"curry","meaning":"카레"},{"word":"dish","meaning":"요리"},{"word":"drink","meaning":"마시다"},{"word":"fried","meaning":"기름에 튀긴"},{"word":"Italian","meaning":"이탈리아의"},{"word":"lunch box","meaning":"도시락"},{"word":"meal","meaning":"식사"},{"word":"mix","meaning":"섞다"},{"word":"noodle","meaning":"국수"},{"word":"order","meaning":"주문하다"},{"word":"porridge","meaning":"죽"},{"word":"recipe","meaning":"요리법"},{"word":"rice","meaning":"쌀"},{"word":"Russian","meaning":"러시아인"},{"word":"sauce","meaning":"소스"},{"word":"seafood","meaning":"해산물"},{"word":"share","meaning":"나누다"},{"word":"spaghetti","meaning":"스파게티"},{"word":"still","meaning":"여전히"},{"word":"tasty","meaning":"맛있는"},{"word":"vegetable","meaning":"채소"}]'),In=JSON.parse('[{"word":"all day long","meaning":"하루 종일"},{"word":"catch","meaning":"잡다"},{"word":"easily","meaning":"쉽게"},{"word":"east","meaning":"동쪽"},{"word":"empty","meaning":"비어 있는"},{"word":"feel funny","meaning":"몸이 좋지 않다"},{"word":"float around","meaning":"떠다니다"},{"word":"funny-looking","meaning":"괴상하게 생긴"},{"word":"have a bad cold","meaning":"독감에 걸리다"},{"word":"human being","meaning":"인간"},{"word":"hunt","meaning":"사냥하다"},{"word":"melt","meaning":"녹다"},{"word":"ocean","meaning":"대양"},{"word":"own","meaning":"자기 자신의"},{"word":"polar bear","meaning":"북극곰"},{"word":"post","meaning":"게시하다"},{"word":"recycle","meaning":"재활용하다"},{"word":"result","meaning":"결과"},{"word":"round","meaning":"둥근"},{"word":"shark","meaning":"상어"},{"word":"shiny","meaning":"빛나는"},{"word":"spread","meaning":"퍼뜨리다"},{"word":"stomach","meaning":"위"},{"word":"terrible","meaning":"지독한"},{"word":"throw away","meaning":"~을 버리다"},{"word":"trash","meaning":"쓰레기"},{"word":"turn off","meaning":"~을 끄다"},{"word":"worried","meaning":"걱정하는"},{"word":"x-ray","meaning":"엑스레이"},{"word":"yellow dust","meaning":"황사"}]'),Jn=o(4874),Qn=o.n(Jn);const Rn=En,jn=Xn;let $n,Dn,Gn,Kn,Un,qn,zn=jn,Vn="중1 비상 테스트 단원",Hn=new Array,Yn=new Array,Zn=new Array,ne=zn.length-1,ee=0,oe=0,te=new Array,re=0,ie=0,se=_n,ae=In;Kn="asdf",Un=0,qn=0;const le=Qn().mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:1500,timerProgressBar:!0});var ce={name:"SetPage",components:{},data(){return{files:Rn,Wsetpage:"main",firstJSON:jn,firJSON:Xn,fileForWord:zn,fileNameFor:Vn,randNum:$n,wordList:Hn,wordMeanings:Dn,wordWords:Yn,probCount:ne,clickCount:ee,correctAnswer:oe,w2ans:Gn,w2word:Kn,w2count:Un,w2cor:qn,chats:te,w3count:re,w3cor:ie,visang6:se,visang7:ae,arr:["시작하기","시작하기","시작하기"],rdwords:["시작하기","시작하기","시작하기"],pages:["중1 비상 8단원","중1 비상 9단원","중1 비상 10단원"]}},methods:{changePageWords:function(n){console.log(typeof Xn),console.log(Xn[0].word),console.log(Xn.length),console.log(n),"main"==this.Wsetpage?this.Wsetpage="words":"words"==this.Wsetpage&&(this.Wsetpage="main"),"중1 비상 5단원"==n?(this.fileForWord=this.firstJSON,console.log(zn.length)):"중1 비상 6단원"==n?this.fileForWord=this.visang6:"중1 비상 7단원"==n&&(this.fileForWord=this.visang7),this.fileNameFor=n,"words"==this.Wsetpage&&Qn().fire({icon:"info",title:"안내",text:"퀴즈에서는 정확한 단어를 입력해야 합니다! 컴퓨터는 융통성이 없어요!",showCancelButton:!1,confirmButtonText:"예",confirmButtonColor:"#429f50"})},toAm(){le.fire({icon:"info",title:"정답 개수를 보여주는 기능은 개발중입니다!",text:"양해해주세요"}),this.Wsetpage="word1"},endFunc(n){Qn().fire({icon:"success",title:"암기 학습을 완료했습니다!",text:n+"개 맞추셨습니다! 메인 메뉴로 돌아가기 위해 새로고침을 눌러 주세요",showCancelButton:!1,showConfirmButton:!1,allowOutsideClick:!1})},changeWordProbT2(n){let e,o;new Array;0!=this.clickCount?this.probCount==this.fileForWord.length-1?this.endFunc(this.correctAnswer):this.probCount=this.probCount+1:0===this.clickCount&&(this.clickCount=1,this.probCount=0),e=Math.floor(Math.random()*this.fileForWord.length),o=Math.floor(Math.random()*this.fileForWord.length),console.log(e);while(e==this.probCount)e=Math.floor(Math.random()*zn.length),console.log(`re: ${e} `);while(o==this.probCount||o==e)o=Math.floor(Math.random()*zn.length),console.log(`re: ${o} `);this.arr.splice(0,this.arr.length),this.arr.push(zn[this.probCount].meaning),this.arr.push(zn[e].meaning),this.arr.push(zn[o].meaning),this.arr.sort((()=>Math.random()-.5)),console.log(this.arr),console.log(`probCount : ${ne} `),n-1==Zn.indexOf(zn[this.probCount].meaning)&&(this.correctAnswer=this.correctAnswer+1,console.log("정답!")),console.log(this.correctAnswer)},inputAnswerW2(){console.log(this.w2ans),this.w2ans===this.fileForWord[this.w2count].meaning?(console.log("GREAT!"),le.fire({icon:"success",title:"정답!",text:"정답입니다🎉🎉"}),this.w2cor=this.w2cor+1):(console.log("WRONG :("),le.fire({icon:"error",title:"오답입니다.",text:"아쉽네요😥"})),this.w2count==this.fileForWord.length-1&&(this.w2count=0,Qn().fire({icon:"success",title:"암기 학습을 완료했습니다!",text:this.w2cor+"개 맞추셨습니다! 메인 메뉴로 돌아가기 위해 새로고침을 눌러 주세요",showCancelButton:!1,showConfirmButton:!1,allowOutsideClick:!1})),this.w2count=this.w2count+1,this.w2ans=""},inputAnswerW3(){this.w3ans===this.fileForWord[this.w3count].word?(console.log("GREAT!"),le.fire({icon:"success",title:"정답!",text:"정답입니다🎉🎉"}),this.w3cor=this.w3cor+1):(console.log("WRONG :("),le.fire({icon:"error",title:"오답입니다.",text:"아쉽네요😥"})),this.w3count==this.fileForWord.length-1&&(this.w3count=0,Qn().fire({icon:"success",title:"테스트를 완료했습니다!",text:this.w3cor+"개 맞추셨습니다! 메인 메뉴로 돌아가기 위해 새로고침을 눌러 주세요",showCancelButton:!1,showConfirmButton:!1,allowOutsideClick:!1})),this.chats.push("Right"),this.w3ans===this.fileForWord[this.w3count].word?this.chats.push("LeftRight"):this.chats.push("LeftWrong"),this.w3count=this.w3count+1,this.w3ans=""}}};const de=(0,T.A)(ce,[["render",An]]);var ue=de;
//! This thing is made for 360x780 window, but use vh and vw value instead of px value to ensure flexiblity
const we=En,ge=Xn,he=Qn().mixin({toast:!0,position:"top-end",showConfirmButton:!0,timerProgressBar:!0}),me=Qn().mixin({toast:!0,position:"top-end",showConfirmButton:!0,timerProgressBar:!0});Qn().fire({icon:"info",title:"WordWise에 오신 걸 환영합니다!",text:"WordWise는 아직 버그가 있을 수 있습니다! 버그는 Github에서 WordWise-project로 제보해주세요!",showCancelButton:!1,allowOutsideClick:!1}).then((n=>{n.isConfirmed&&me.fire({icon:"success",title:"안내합니다!",text:"WordWise는 휴대전화로 접속하시길 권장드립니다. 화면 크기가 올바르지 않을 시 UI에 오류가 생길 수 있습니다.",showConfirmButton:"true"})}));var pe={name:"App",components:{MainPage:A,SetPage:ue},data(){return{page:"mainpage",publicPath:"/",fileList:we,firstJSON:ge}},methods:{turnToClass:function(){this.page="mainpage",he.fire({icon:"success",title:"Successfully entered Class Menu!"})},turnToSet:function(){this.page="setpage",he.fire({icon:"success",title:"Successfully entered Set Menu!",text:"단어장 내에서 끝까지 스크롤을 내리면 메뉴바가 있습니다! 귀찮으신 건.. 아니죠?"})},turnToMenu:function(){this.page="mainpage",he.fire({icon:"success",title:"Successfully entered Main Menu!"})}}};const fe=(0,T.A)(pe,[["render",s]]);var ke=fe;(0,t.Ef)(ke).mount("#app")}},e={};function o(t){var r=e[t];if(void 0!==r)return r.exports;var i=e[t]={exports:{}};return n[t].call(i.exports,i,i.exports,o),i.exports}o.m=n,function(){var n=[];o.O=function(e,t,r,i){if(!t){var s=1/0;for(d=0;d<n.length;d++){t=n[d][0],r=n[d][1],i=n[d][2];for(var a=!0,l=0;l<t.length;l++)(!1&i||s>=i)&&Object.keys(o.O).every((function(n){return o.O[n](t[l])}))?t.splice(l--,1):(a=!1,i<s&&(s=i));if(a){n.splice(d--,1);var c=r();void 0!==c&&(e=c)}}return e}i=i||0;for(var d=n.length;d>0&&n[d-1][2]>i;d--)n[d]=n[d-1];n[d]=[t,r,i]}}(),function(){o.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return o.d(e,{a:e}),e}}(),function(){o.d=function(n,e){for(var t in e)o.o(e,t)&&!o.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){o.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){var n={524:0};o.O.j=function(e){return 0===n[e]};var e=function(e,t){var r,i,s=t[0],a=t[1],l=t[2],c=0;if(s.some((function(e){return 0!==n[e]}))){for(r in a)o.o(a,r)&&(o.m[r]=a[r]);if(l)var d=l(o)}for(e&&e(t);c<s.length;c++)i=s[c],o.o(n,i)&&n[i]&&n[i][0](),n[i]=0;return o.O(d)},t=self["webpackChunkwordwise"]=self["webpackChunkwordwise"]||[];t.forEach(e.bind(null,0)),t.push=e.bind(null,t.push.bind(t))}();var t=o.O(void 0,[504],(function(){return o(4672)}));t=o.O(t)})();
//# sourceMappingURL=app.f5f314e6.js.map