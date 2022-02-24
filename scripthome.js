var hint=["兩個相同的離子合成後可以相疊，有相疊的離子再合成出的溶液或沉澱物戰力值會大幅度增長。",
"兩個無法合成或相疊的離子若是被合成，則會生產出垃圾，每生產出垃圾則扣自家堡壘的分數200分(訓練場)300分(計分計時排名賽)",
"CH3COOAg微溶於水",
"PbI2溶於熱水",
"Ag+雖是過渡離子但AgI,AgBr不溶於氨水，因此這兩者為一般沉澱物",
"開始第一次遊戲前記得填寫表單",
"遊戲的中間有個燈泡為沉澱表提示",
"氯溴碘呂秀蓮，難溶:汞銅鉛銀鉈共同牽引他",
"此遊戲不含4價以上的離子以及3種以上不同原子組成的化合物",
"若是使用錯誤的士兵去攻擊敵方士兵（例：使用會被溶解的沉澱物攻擊該溶液、用酸打酸等），則我方堡壘會被扣分，每次扣500分"];

var ranksrc=["https://docs.google.com/spreadsheets/d/1wEibC-mIKMBKOD_5WJ-wE1bw-spbw0bb2aaqtvWAKEU/gviz/tq?tqx=out:html&tq&gid=19184554",
"https://docs.google.com/spreadsheets/d/1wEibC-mIKMBKOD_5WJ-wE1bw-spbw0bb2aaqtvWAKEU/gviz/tq?tqx=out:html&tq&gid=1252088812",
"https://docs.google.com/spreadsheets/d/1wEibC-mIKMBKOD_5WJ-wE1bw-spbw0bb2aaqtvWAKEU/gviz/tq?tqx=out:html&tq&gid=1077966690",
"https://docs.google.com/spreadsheets/d/1wEibC-mIKMBKOD_5WJ-wE1bw-spbw0bb2aaqtvWAKEU/gviz/tq?tqx=out:html&tq&gid=1649738774"]
var m=0;
gototest();
function gototest(){
    var n= Math.floor(Math.random()*hint.length);
    document.getElementById("hint").innerHTML="小提示: "+hint[n];
    setTimeout("gototest();",10000); 
    document.getElementById("rank").innerHTML=`<iframe src="${ranksrc[m]}" id="rankiframe" width"100%" height="100%" style="border:none;"></iframe>`
    m=(m+1)%ranksrc.length;
};
function getValues(){
    //先取得網址字串，假設此頁網址為「index.aspx?id=U001&name=GQSM」
    var url = location.href;

    //再來用去尋找網址列中是否有資料傳遞(QueryString)
    if(url.indexOf('?')!=-1)
    {
        //之後去分割字串把分割後的字串放進陣列中
        var ary1 = url.split('?');
        //此時ary1裡的內容為：
        //ary1[0] = 'index.aspx'，ary2[1] = 'id=U001&name=GQSM'
        
        //下一步把後方傳遞的每組資料各自分割
        var ary2 = ary1[1].split('&');
        //此時ary2裡的內容為：
        //ary2[0] = 'id=U001'，ary2[1] = 'name=GQSM'
        
        //最後如果我們要找id的資料就直接取ary[0]下手，name的話就是ary[1]
        var ary3 = ary2[0].split('=');
        //此時ary3裡的內容為：
        //ary3[0] = 'id'，ary3[1] = 'U001'
        
        //取得id值
        if(ary3[0]='number')num = ary3[1];
    }
    
    if(num==""||num==null)firm();
    else{
        document.getElementById('gamebutton').innerHTML=`<tr>
        <td><a href="game1.html?number=${num}"><button id="game1button" class="gamebuttonlevel1 gamebutton" type="button">進階計時排名賽</button></a></td>
        <td><a href="game3.html?number=${num}"><button id="game3button" class="gamebuttonlevel2 gamebutton" type="button">基礎計時排名賽</button></a></td>
    </tr>
    <tr>
        <td><a href="game2.html?number=${num}"><button id="game2button" class="gamebuttonlevel1 gamebutton" type="button">進階計分排名賽</button></a></td>
        <td><a href="game4.html?number=${num}"><button id="game4button" class="gamebuttonlevel2 gamebutton" type="button">基礎計分排名賽</button></a></td>
    </tr>
    <tr>
        <td><a href="game.html?number=${num}"><button id="game0button" class="gamebuttonlevel1 gamebutton" type="button">進階訓練營</button></a></td>
        <td><a href="game5.html?number=${num}"><button id="game5button" class="gamebuttonlevel2 gamebutton" type="button">基礎訓練營</button></a></td>
    </tr>
    <tr>
        <td><a href="introduce.html?number=${num}"><button id="introducebutton" class="gamebutton" type="button">遊戲介紹</button></a></td>
        <td><p id="test"><a href="./gotoform.html"><button id="form" class="gamebuttonlevel2 gamebutton" type="button">化學大戰爭前測</button></a></p></td>
    </tr>`
    }
        console.log(num);
}

var num;
getValues();
function firm(){
    num=prompt("請輸入學號或是email","");
    if(num==""||num==null)firm();
    else{
        document.getElementById('gamebutton').innerHTML=`<tr>
        <td><a href="game1.html?number=${num}"><button id="game1button" class="gamebuttonlevel1 gamebutton" type="button">進階計時排名賽</button></a></td>
        <td><a href="game3.html?number=${num}"><button id="game3button" class="gamebuttonlevel2 gamebutton" type="button">基礎計時排名賽</button></a></td>
    </tr>
    <tr>
        <td><a href="game2.html?number=${num}"><button id="game2button" class="gamebuttonlevel1 gamebutton" type="button">進階計分排名賽</button></a></td>
        <td><a href="game4.html?number=${num}"><button id="game4button" class="gamebuttonlevel2 gamebutton" type="button">基礎計分排名賽</button></a></td>
    </tr>
    <tr>
        <td><a href="game.html?number=${num}"><button id="game0button" class="gamebuttonlevel1 gamebutton" type="button">進階訓練營</button></a></td>
        <td><a href="game5.html?number=${num}"><button id="game5button" class="gamebuttonlevel2 gamebutton" type="button">基礎訓練營</button></a></td>
    </tr>
    <tr>
        <td><a href="introduce.html?number=${num}"><button id="introducebutton" class="gamebutton" type="button">遊戲介紹</button></a></td>
        <td><p id="test"><a href="./gotoform.html"><button id="form" class="gamebuttonlevel2 gamebutton" type="button">化學大戰爭前測</button></a></p></td>
    </tr>`
    }
}
