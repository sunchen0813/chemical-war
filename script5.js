class Element {
    constructor(number,serialnumber, pick,compound, plusminus,atomicnumber, src, ion, ClminusBrminusIminus, SO42minus, CrO42minus, S2minus, OHminus, Cr2O42minus, CO32minusSO38minusPO43minus, transition, twonature){
        this.number=number;
        this.serialnumber=serialnumber;
        this.produce=0;
        this.pick=pick;
        this.compound=compound;
        this.plusminus=plusminus;
        this.atomicnumber=atomicnumber;
        this.src=src;
        this.ion=ion;
        this.ClminusBrminusIminus=ClminusBrminusIminus;
        this.SO42minus=SO42minus;
        this.CrO42minus=CrO42minus;
        this.S2minus=S2minus;
        this.OHminus=OHminus;
        this.CrO42minus=Cr2O42minus;
        this.CO32minusSO38minusPO43minus=CO32minusSO38minusPO43minus;
        this.transition=transition;
        this.twonature=twonature;
    } 
    show_element(n,m){//n為陣列第幾個的元素 m為第幾個礦區
        //document.write('<img src="'+this.src+'">');
        //document.write("<script language=javascript src=var.js></script>");
        if(minerspace<9){

            document.getElementById('box'+(m+1)).innerHTML='<button type="button" id="minerbutton'+(m+1)+'" class="minerbutton" onclick="getElement('+m+','+n+');"> <img src="'+ele[n].src+'" class="minerimage"></button>';
            miner[m].space=true;
            miner[m].ion=ele[n];
            minerspace++;
        }

        //document.write(b);
    }
    
} 

class Mode{
    constructor(number,state,compound,attackaction){//state 1=s, 2=l;
        this.number=number;
        this.state=state;
        this.compound=compound;
        this.attackaction=attackaction;
    }
}

class Miner{
    constructor(ion, space){
        this.ion=ion;
        this.space=space;
    }
}

class Backpack{
    constructor(ion,space){
        this.ion=ion;
        this.space=space;
    }
}

class Compound{
    constructor(ion,space){
        this.ion=ion;
        this.space=space;
    }

}

class Product{
    constructor(element1,element2,product,space,mode){//mode-1 ion mode0 trash mode1 SA mode2 SB mode3 WA mode4 WB mode5 rock mode6 twonaturerock mode7 transitionrock mode8 doublerock mode9 water mode10 NH3
        this.element1=element1;
        this.element2=element2;
        this.product=product;
        this.space=space;
        this.mode=mode;
    }
}

class Fight{
    constructor(mode,space,blood){
        this.mode=mode;
        this.space=space;
        this.blood=blood;
    }
}

function getElement(m,n){
    if(m>=0){
        if(backpackspace<10){
            var cc=0;
            backpacklocation=0;
            while(backpack[backpacklocation].space==true){
                backpacklocation++;
                backpacklocation=backpacklocation%10;
                cc++;
                if(cc==9)break;
            }
            document.getElementById('backpack'+(backpacklocation+1)).innerHTML='<button type="button" id="backpackbutton'+(backpacklocation+1)+'" class="backpackbutton" onclick="getCompoundElement('+(backpacklocation)+');"> <img src="'+miner[m].ion.src+'" class="backpackimage"></button>';
            backpack[backpacklocation].ion=ele[n];
            backpack[backpacklocation].space=true;
            ele[n].pick++;
            miner[m].ion=null;
            miner[m].space=false;
            backpackspace++;
            if(minerspace==9)minersec=0;
            minerspace--;
            delete_element(m);
            
        }
    }else if(m==-1){
        if(backpackspace<10){
            var cc=0;
            backpacklocation=0;
            while(backpack[backpacklocation].space==true){
                backpacklocation++;
                backpacklocation=backpacklocation%10;
                cc++;
                if(cc==9)break;
            }
            document.getElementById('backpack'+(backpacklocation+1)).innerHTML='<button type="button" id="backpackbutton'+(backpacklocation+1)+'" class="backpackbutton" onclick="getCompoundElement('+(backpacklocation)+');"> <img src="'+product.product.src+'" class="backpackimage"></button>';
            backpack[backpacklocation].ion=product.product;
            backpack[backpacklocation].space=true;
            backpackspace++;
        }
    }else if(m==-2){
        if(backpackspace<10){
            var cc=0;
            backpacklocation=0;
            while(backpack[backpacklocation].space==true){
                backpacklocation++;
                backpacklocation=backpacklocation%10;
                cc++;
                if(cc==9)break;
            }
            document.getElementById('backpack'+(backpacklocation+1)).innerHTML='<button type="button" id="backpackbutton'+(backpacklocation+1)+'" class="backpackbutton" onclick="getCompoundElement('+(backpacklocation)+');"> <img src="'+compound[0].ion.src+'" class="backpackimage"></button>';
            backpack[backpacklocation].ion=compound[0].ion;
            backpack[backpacklocation].space=true;
            backpackspace++;
        }
        compounddelete_element(true,false);
    }else if(m==-3){
        if(backpackspace<10){
            var cc=0;
            while(backpack[backpacklocation].space==true){
                backpacklocation++;
                backpacklocation=backpacklocation%10;
                cc++;
                if(cc==9)break;
            }
            document.getElementById('backpack'+(backpacklocation+1)).innerHTML='<button type="button" id="backpackbutton'+(backpacklocation+1)+'" class="backpackbutton" onclick="getCompoundElement('+(backpacklocation)+');"> <img src="'+compound[1].ion.src+'" class="backpackimage"></button>';
            backpack[backpacklocation].ion=compound[1].ion;
            backpack[backpacklocation].space=true;
            backpackspace++;
        }
        compounddelete_element(false,true);
    }

    
}

function delete_element(m){
    document.getElementById("box"+(m+1)).innerHTML='<img>';//null沒有圖
    miner[m].space=false;
    miner[m].ion=null;  

}

function getCompoundElement(m){
    if(compoundspace<2){
        var cc=0;
        while(compound[compoundlocation].space==true){
            compoundlocation++;
            compoundlocation=compoundlocation%2;
            cc++;
            if(cc==2)break;
        }
        if(compoundlocation==0){
            document.getElementById('element1').innerHTML='<button type="button" id="elementbutton1" class="compoundbutton" onclick="getElement(-2,-2)"> <img src="'+backpack[m].ion.src+'" class="compoundimage"></button>';
        }else{
            document.getElementById('element2').innerHTML='<button type="button" id="elementbutton2" class="compoundbutton" onclick="getElement(-3,-3)"> <img src="'+backpack[m].ion.src+'" class="compoundimage"></button>';
        }
        backpack[m].ion.compound++;
        compound[compoundlocation].ion=backpack[m].ion;
        compound[compoundlocation].space=true;
        backpack[m].ion=null;
        backpack[m].space=false;
        
        backpackspace--;
        compoundspace++;
        backpackdelete_element(m);
    }
    
}

function backpackdelete_element(m){
    document.getElementById("backpack"+(m+1)).innerHTML='<img>';//null沒有圖
    backpack[m].space=false;
    backpack[m].ion=null;  
    
    
}

function compoundactive(){
    let complish=false;
    if(compound[0].space==true&&compound[1].space==true){//都有元素
        //document.getElementById("product").innerHTML=parseInt(compound[0].ion.serialnumber,10)+","+parseInt(compound[1].ion.serialnumber,10);
        if(compound[0].ion.serialnumber==compound[1].ion.serialnumber){//兩個元素一樣
            //document.getElementById("product").innerHTML='HI1';
            let name=compound[0].ion.ion;
            for(let i=0;i<ele.length;i++){//document.getElementById("product").innerHTML='HI'+i;
                if(ele[i].ion==name&&ele[i].atomicnumber==compound[0].ion.atomicnumber+compound[1].ion.atomicnumber){
                    product.product=ele[i];
                    ele[i].pick++;
                    product.space=true;
                    product.mode=-1;
                    complish=true;
                    break;
                }
            }
            if(complish==false){
                compounddelete_element(true,true);
            }
            
        }
        else if(compound[0].ion.plusminus+compound[1].ion.plusminus==0){
            compoundaction++;
            if(compound[0].ion.plusminus<0){//0是正1是負
                var t=0;
                t=compound[0].ion;
                compound[0].ion=compound[1].ion;
                compound[1].ion=t;
                
                //document.getElementById("chunk3").innerHTML=compound[0].ion.plusminus+","+compound[1].ion.plusminus;
            }

            if(compound[1].ion.serialnumber==22||compound[1].ion.serialnumber==23||compound[1].ion.serialnumber==24){
                clminusbrminusiminus();
                complish=true;
            }else if(compound[1].ion.serialnumber==36){
                so42minus();
                complish=true;
            }else if(compound[1].ion.serialnumber==37){
                cro42minus();
                complish=true;
            }else if(compound[1].ion.serialnumber==32){
                s2minus();
                complish=true;
            }else if(compound[1].ion.serialnumber==28){
                ohminus();
                complish=true;
            }else if(compound[1].ion.serialnumber==39){
                c2o42minus();
                complish=true;
            }else if(compound[1].ion.serialnumber==33||compound[1].ion.serialnumber==34||compound[1].ion.serialnumber==35){
                co32minusso32minuspo43minus();
                complish=true;
            }else if(compound[1].ion.serialnumber==30){
                no3minus();
                complish=true;
            }else if(compound[1].ion.serialnumber==38){
                ch3coominus();
                complish=true;
            }else{//沒收錄

            }

        }else{//黑白合成
            //document.getElementById("product").innerHTML='黑白合成';
            errorcompound++;
            if(compound[0].space==true)trashnumber++;
            if(compound[1].space==true)trashnumber++;
            document.getElementById("trashnumber").innerHTML=trashnumber;
            if(trashnumber>=10)endgame=true;
            if(endgame==true){
                document.getElementById('endgame1').innerHTML=`<p id="endgame"></p><p id="endgamecontent">遊戲失敗</p><a href="index.html"><input id="endgamebutton" type="button" value="回首頁"></input></a>`;
            }
            compounddelete_element(true,true);
            
        }
    }else{//沒有都有元素
        
    }
    if(complish==true){
        if(product.mode==-1){
            document.getElementById("product").innerHTML='<button type="button" id="productbutton" onclick=" getElement(-1,-1); productdelete_element('+product.mode+')"> <img src="'+product.product.src+'"></button>';
            compoundtrash++;
        }
        else if(product.mode==0)document.getElementById("product").innerHTML='<button type="button" id="productbutton" onclick="productdelete_element('+product.mode+')"> <img src="picture/trash.png"></button>';
        else{
            document.getElementById("product").innerHTML='<button type="button" id="productbutton" onclick="getProductElement('+product.mode+')"> <img src="picture/mode'+product.mode+'.png"></button>';
            attack[product.mode-1].compound++;
        }
        compounddelete_element(true,true);
    }/* else{
        document.getElementById("product").innerHTML=compound[0].ion.serialnumber+","+compound[1].ion.serialnumber;
    } */
}
//22 23 24 Br-Cl-I- 36 SO42- 37 CrO42- 32 S2- 28 OH- 29 C2O42- 33 34 35 SO32- PO43- CO32-
//8 H+
//mode-1 ion mode0 trash mode1 SA mode2 SB mode3 WA mode4 WB 
//mode5 rock mode6 twonaturerock mode7 transitionrock mode8 twoandtrarock mode11 weakacidandOHrock mode12  traandweakandOHrock 
//mode9 water mode10 NH3 
function clminusbrminusiminus(){
    if(compound[0].ion.ClminusBrminusIminus==true){//沉澱物
       if(compound[0].ion.transition==true){
            if(compound[0].ion.serialnumber==9&&(compound[1].ion.serialnumber==22||compound[1].ion.serialnumber==24)) product.mode=5;
            else product.mode=5;
            
       }else{
            product.mode=5;
       }
    }else{//非沉澱物
        if(compound[0].ion.serialnumber==8){
            product.mode=1;
        }
    }
    product.product=null;
    product.element1=compound[0].ion;
    product.element2=compound[1].ion;
    product.space=true;
}
function so42minus(){
    if(compound[0].ion.SO42minus==true){//沉澱物
        if(compound[0].ion.transition==true){
            product.mode=5;
        }else{
            product.mode=5;
        }
     }else{//非沉澱物
         if(compound[0].ion.serialnumber==8){
             product.mode=1;
         }
     }
     product.product=null;
     product.element1=compound[0].ion;
     product.element2=compound[1].ion;
     product.space=true;

}
function cro42minus(){
    if(compound[0].ion.Cr2O42minus==true){//沉澱物
        if(compound[0].ion.transition==true){
            product.mode=5;
        }else{
            product.mode=5;
        }
     }else{//非沉澱物
         if(compound[0].ion.serialnumber==8){
             product.mode=5;
         }
     }
     product.product=null;
     product.element1=compound[0].ion;
     product.element2=compound[1].ion;
     product.space=true;
}
function s2minus(){
    if(compound[0].ion.S2minus==true){//非沉澱物
        if(compound[0].ion.serialnumber==8){
            product.mode=3;
        }
    }else{//沉澱物
        if(compound[0].ion.transition==true){
            product.mode=5;
        }else{
            product.mode=5;
        }
    }
    product.product=null;
    product.element1=compound[0].ion;
    product.element2=compound[1].ion;
    product.space=true;
}
function ohminus(){
    if(compound[0].ion.OHminus==true){//非沉澱物
        if(compound[0].ion.serialnumber==8) product.mode=9;
        else if(compound[0].ion.serialnumber==12) product.mode=10;
        else{
            product.mode=2;
        }
    }else{//沉澱物
        if(compound[0].ion.transition==true){
            if(compound[0].ion.twonature==true)product.mode=5;
            else product.mode=5;
       }else{
            if(compound[0].ion.twonature==true)product.mode=5;
            else product.mode=5;
       }
    }
    product.product=null;
    product.element1=compound[0].ion;
    product.element2=compound[1].ion;
    product.space=true;
}
function c2o42minus(){
    if(compound[0].ion.CrO42minus==true){//非沉澱物
        if(compound[0].ion.serialnumber==8){
            product.mode=3;
        }
    }else{//沉澱物
        if(compound[0].ion.transition==true){
            product.mode=5;
        }else{
            product.mode=5;
        }
    }
    product.product=null;
    product.element1=compound[0].ion;
    product.element2=compound[1].ion;
    product.space=true;
}
function co32minusso32minuspo43minus(){
    if(compound[0].ion.CO32minusSO38minusPO43minus==true){//非沉澱物
        if(compound[0].ion.serialnumber==8){
            product.mode=3;
        }
    }else{//沉澱物
        if(compound[0].ion.transition==true){
            product.mode=5;
        }else{
            product.mode=5;
        }
    }
    product.product=null;
    product.element1=compound[0].ion;
    product.element2=compound[1].ion;
    product.space=true;
}
function no3minus(){
    if(compound[0].ion.serialnumber==8){//HNO3
        product.mode=1;
    }else{

    }
    product.product=null;
    product.element1=compound[0].ion;
    product.element2=compound[1].ion;
    product.space=true;
}
function ch3coominus(){
    if(compound[0].ion.serialnumber==9){//CH3COOAg

    }
    if(compound[0].ion.serialnumber==8){//CH3COOH
        product.mode=3;
    }
    product.product=null;
    product.element1=compound[0].ion;
    product.element2=compound[1].ion;
    product.space=true;
}

/* function readFolder(){
    fetch('problem.txt')
   .then(function(response){
       console.log(response);
   })
} */

function compounddelete_element(e1,e2){
    if(e1==true){
        document.getElementById("element1").innerHTML='<img>';//null沒有圖
        compound[0].space=false;
        compound[0].ion=null;
    }
    if(e2==true){
        document.getElementById("element2").innerHTML='<img>';//null沒有圖
        compound[1].space=false;
        compound[1].ion=null;
    }
    if(e1==true)compoundspace--;
    if(e2==true)compoundspace--;
    compoundlocation=0;
    

    //console.log(compoundspace);

}
function getProductElement(num){
    attacknumber[num+1]++;
    //document.getElementById('attacknumber'+num).innerHTML=attacknumber[num+1];//null沒有圖
    if(myteamspace<5){
        var cc=0;
        myteamlocation=0;
        while(myteam[myteamlocation].space==true){
            myteamlocation++;
            myteamlocation=myteamlocation%5;
            cc++;
            if(cc==5)break;
        }
        document.getElementById('myteam'+(myteamlocation+1)).innerHTML='<button type="button" id="myteambutton'+(myteamlocation+1)+'" class="myteambutton" onclick="fight('+myteamlocation+')"> <img src="picture/mode'+product.mode+'.png" ></button>';
        myteam[myteamlocation].mode=attack[product.mode-1];
        myteam[myteamlocation].space=true;
        myteam[myteamlocation].blood=1000;
        document.getElementById('myteamblood'+(myteamlocation+1)).innerHTML=myteam[myteamlocation].blood;
        myteamspace++;
    }
    productdelete_element(num);
}
function productdelete_element(num){
    document.getElementById("product").innerHTML='<img>';//null沒有圖
    product.element1=null;
    product.element2=null;
    product.product=null;
    product.space=false;
    product.mode=0;
}
function produceenemy(){
    var n= Math.floor(Math.random()*12+1);
    var cc=0;
    while(enemy[enemylocation].space==true){
        enemylocation++;
        enemylocation=enemylocation%5;
        cc++;
        if(cc==5)break;
    }
    while(attack[n-1].state==1&&attack[n-1].number!=5)n= Math.floor(Math.random()*12+1);

    document.getElementById('enemy'+(enemylocation+1)).innerHTML='<button type="button" id="enemybutton'+(enemylocation+1)+'" class="enemybutton" onclick="attackactive('+enemylocation+')"> <img src="picture/mode'+n+'.png" ></button>';
    enemy[enemylocation].mode=attack[n-1];
    enemy[enemylocation].space=true;
    enemy[enemylocation].blood=1000;
    document.getElementById('enemyblood'+(enemylocation+1)).innerHTML=enemy[enemylocation].blood;
    enemyspace++;
    enemynumber++;
}
function fight(m){
    ml=m;
    fightcheck=true;
}
//mode-1 ion mode0 trash mode1 SA mode2 SB mode3 WA mode4 WB 
//mode5 rock mode6 twonaturerock mode7 transitionrock mode8 twoandtrarock mode11 weakacidandOHrock mode12  traandweakandOHrock 
//mode9 water mode10 NH3 
function attackactive(e){
    if(fightcheck==true){
        attacktimes++;
        var finish=false;
        el=e;
        if(enemy[el].mode.state==2){//enemy l
            if(myteam[ml].mode.state==2){//myteam l
                if(enemy[el].mode.number==1){
                    if(myteam[ml].mode.number==1){

                    }
                    if(myteam[ml].mode.number==2){
                        if(enemy[el].blood==myteam[ml].blood){
                            fightdelete_element(ml,el);
                            finish=true;
                        }else if(enemy[el].blood>myteam[ml].blood){
                            enemy[el].blood=enemy[el].blood-myteam[ml].blood;
                            fightdelete_element(ml,-1);finish=true;
                        }else if(enemy[el].blood<myteam[ml].blood){
                            myteam[ml].blood=myteam[ml].blood-enemy[el].blood;
                            fightdelete_element(-1,el);finish=true;
                        }
                    }
                    if(myteam[ml].mode.number==3){
                        
                    }
                    if(myteam[ml].mode.number==4){
                        if(enemy[el].blood*2==myteam[ml].blood){
                            fightdelete_element(ml,el);finish=true;
                        }else if(enemy[el].blood*2>myteam[ml].blood){
                            enemy[el].blood=enemy[el].blood-myteam[ml].blood/2;
                            fightdelete_element(ml,-1);finish=true;
                        }else if(enemy[el].blood*2<myteam[ml].blood){
                            myteam[ml].blood=myteam[ml].blood-enemy[el].blood*2;
                            fightdelete_element(-1,el);finish=true;
                        }
                    }
                    if(myteam[ml].mode.number==10){
                        if(enemy[el].blood*2==myteam[ml].blood){
                            fightdelete_element(ml,el);finish=true;
                        }else if(enemy[el].blood*2>myteam[ml].blood){
                            enemy[el].blood=enemy[el].blood-myteam[ml].blood/2;
                            fightdelete_element(ml,-1);finish=true;
                        }else if(enemy[el].blood*2<myteam[ml].blood){
                            myteam[ml].blood=myteam[ml].blood-enemy[el].blood*2;
                            fightdelete_element(-1,el);finish=true;
                        }
                    }
                    if(myteam[ml].mode.number==9){
                        enemy[el].blood=enemy[el].blood/2;
                        fightdelete_element(ml,-1);finish=true;
                    }
                }else if(enemy[el].mode.number==2){
                    if(myteam[ml].mode.number==1){
                        if(enemy[el].blood==myteam[ml].blood){
                            fightdelete_element(ml,el);finish=true;
                        }else if(enemy[el].blood>myteam[ml].blood){
                            enemy[el].blood=enemy[el].blood-myteam[ml].blood;
                            fightdelete_element(ml,-1);finish=true;
                        }else if(enemy[el].blood<myteam[ml].blood){
                            myteam[ml].blood=myteam[ml].blood-enemy[el].blood;
                            fightdelete_element(-1,el);finish=true;
                        }
                    }
                    if(myteam[ml].mode.number==2){
                        
                    }
                    if(myteam[ml].mode.number==3){
                        if(enemy[el].blood*2==myteam[ml].blood){
                            fightdelete_element(ml,el);finish=true;
                        }else if(enemy[el].blood*2>myteam[ml].blood){
                            enemy[el].blood=enemy[el].blood-myteam[ml].blood/2;
                            fightdelete_element(ml,-1);finish=true;
                        }else if(enemy[el].blood*2<myteam[ml].blood){
                            myteam[ml].blood=myteam[ml].blood-enemy[el].blood*2;
                            fightdelete_element(-1,el);finish=true;
                        }
                        
                    }
                    if(myteam[ml].mode.number==4){
                        
                    }
                    if(myteam[ml].mode.number==10){
                        
                    }
                    if(myteam[ml].mode.number==9){
                        enemy[el].blood=enemy[el].blood/2;
                        fightdelete_element(ml,-1);finish=true;
                    }
                }else if(enemy[el].mode.number==3){
                    if(myteam[ml].mode.number==1){

                    }
                    if(myteam[ml].mode.number==2){
                        if(enemy[el].blood==myteam[ml].blood*2){
                            fightdelete_element(ml,el);finish=true;
                        }else if(enemy[el].blood>myteam[ml].blood*2){
                            enemy[el].blood=enemy[el].blood*2-myteam[ml].blood;
                            fightdelete_element(ml,-1);finish=true;
                        }else if(enemy[el].blood<myteam[ml].blood*2){
                            myteam[ml].blood=myteam[ml].blood-enemy[el].blood/2;
                            fightdelete_element(-1,el);finish=true;
                        }
                        
                    }
                    if(myteam[ml].mode.number==3){
                        
                    }
                    if(myteam[ml].mode.number==4){
                        if(enemy[el].blood==myteam[ml].blood){
                            fightdelete_element(ml,el);finish=true;
                        }else if(enemy[el].blood>myteam[ml].blood){
                            enemy[el].blood=enemy[el].blood-myteam[ml].blood;
                            fightdelete_element(ml,-1);finish=true;
                        }else if(enemy[el].blood<myteam[ml].blood){
                            myteam[ml].blood=myteam[ml].blood-enemy[el].blood;
                            fightdelete_element(-1,el);finish=true;
                        }
                    }
                    if(myteam[ml].mode.number==10){
                        if(enemy[el].blood==myteam[ml].blood){
                            fightdelete_element(ml,el);finish=true;
                        }else if(enemy[el].blood>myteam[ml].blood){
                            enemy[el].blood=enemy[el].blood-myteam[ml].blood;
                            fightdelete_element(ml,-1);finish=true;
                        }else if(enemy[el].blood<myteam[ml].blood){
                            myteam[ml].blood=myteam[ml].blood-enemy[el].blood;
                            fightdelete_element(-1,el);finish=true;
                        }
                    }
                    if(myteam[ml].mode.number==9){
                        enemy[el].blood=enemy[el].blood/2;
                        fightdelete_element(ml,-1);finish=true;
                    }
                }else if(enemy[el].mode.number==4){
                    if(myteam[ml].mode.number==1){
                        if(enemy[el].blood==myteam[ml].blood*2){
                            fightdelete_element(ml,el);finish=true;
                        }else if(enemy[el].blood>myteam[ml].blood*2){
                            enemy[el].blood=enemy[el].blood*2-myteam[ml].blood;
                            fightdelete_element(ml,-1);finish=true;
                        }else if(enemy[el].blood<myteam[ml].blood*2){
                            myteam[ml].blood=myteam[ml].blood-enemy[el].blood/2;
                            fightdelete_element(-1,el);finish=true;
                        }
                    }
                    if(myteam[ml].mode.number==2){
                        
                    }
                    if(myteam[ml].mode.number==3){
                        if(enemy[el].blood==myteam[ml].blood){
                            fightdelete_element(ml,el);finish=true;
                        }else if(enemy[el].blood>myteam[ml].blood){
                            enemy[el].blood=enemy[el].blood-myteam[ml].blood;
                            fightdelete_element(ml,-1);finish=true;
                        }else if(enemy[el].blood<myteam[ml].blood){
                            myteam[ml].blood=myteam[ml].blood-enemy[el].blood;
                            fightdelete_element(-1,el);finish=true;
                        }
                    }
                    if(myteam[ml].mode.number==4){
                        
                    }
                    if(myteam[ml].mode.number==10){
                        
                    }
                    if(myteam[ml].mode.number==9){
                        enemy[el].blood=enemy[el].blood/2;
                        fightdelete_element(ml,-1);finish=true;
                    }
                }else if(enemy[el].mode.number==10){
                    if(myteam[ml].mode.number==1){
                        if(enemy[el].blood==myteam[ml].blood*2){
                            fightdelete_element(ml,el);finish=true;
                        }else if(enemy[el].blood>myteam[ml].blood*2){
                            enemy[el].blood=enemy[el].blood-myteam[ml].blood*2;
                            fightdelete_element(ml,-1);finish=true;
                        }else if(enemy[el].blood<myteam[ml].blood*2){
                            myteam[ml].blood=myteam[ml].blood-enemy[el].blood/2;
                            fightdelete_element(-1,el);finish=true;
                        }
                    }
                    if(myteam[ml].mode.number==2){
                        
                    }
                    if(myteam[ml].mode.number==3){
                        if(enemy[el].blood==myteam[ml].blood){
                            fightdelete_element(ml,el);finish=true;
                        }else if(enemy[el].blood>myteam[ml].blood){
                            enemy[el].blood=enemy[el].blood-myteam[ml].blood;
                            fightdelete_element(ml,-1);finish=true;
                        }else if(enemy[el].blood<myteam[ml].blood){
                            myteam[ml].blood=myteam[ml].blood-enemy[el].blood;
                            fightdelete_element(-1,el);finish=true;
                        }
                    }
                    if(myteam[ml].mode.number==4){
                        
                    }
                    if(myteam[ml].mode.number==10){
                        
                    }
                    if(myteam[ml].mode.number==9){
                        enemy[el].blood=enemy[el].blood/2;
                        fightdelete_element(ml,-1);finish=true;
                    }
                }else if(enemy[el].mode.number==9){
                    if(myteam[ml].mode.number==1){
                        myteam[ml].blood=myteam[ml].blood/2;
                        fightdelete_element(-1,el);finish=true;
                    }
                    if(myteam[ml].mode.number==2){
                        myteam[ml].blood=myteam[ml].blood/2;
                        fightdelete_element(-1,el);finish=true;
                    }
                    if(myteam[ml].mode.number==3){
                        myteam[ml].blood=myteam[ml].blood/2;
                        fightdelete_element(-1,el);finish=true;
                    }
                    if(myteam[ml].mode.number==4){
                        myteam[ml].blood=myteam[ml].blood/2;
                        fightdelete_element(-1,el);finish=true;
                    }
                    if(myteam[ml].mode.number==10){
                        myteam[ml].blood=myteam[ml].blood/2;
                        fightdelete_element(-1,el);finish=true;
                    }
                    if(myteam[ml].mode.number==9){
                        
                    }
                }

            }else{//myteam s
                if(enemy[el].mode.number==1){
                    if(myteam[ml].mode.number==8||myteam[ml].mode.number==6||myteam[ml].mode.number==11||myteam[ml].mode.number==12){
                        fightdelete_element(ml,-1);finish=true;
                    }
                }else if(enemy[el].mode.number==2){
                    if(myteam[ml].mode.number==8||myteam[ml].mode.number==6){
                        fightdelete_element(ml,-1);finish=true;
                    }
                }else if(enemy[el].mode.number==3){
                    if(myteam[ml].mode.number==8||myteam[ml].mode.number==6||myteam[ml].mode.number==11||myteam[ml].mode.number==12){
                        fightdelete_element(ml,-1);finish=true;
                    }
                }else if(enemy[el].mode.number==4){
                
                }else if(enemy[el].mode.number==9){

                }else if(enemy[el].mode.number==10){
                    if(myteam[ml].mode.number==7||myteam[ml].mode.number==8||myteam[ml].mode.number==12){
                        fightdelete_element(ml,-1);finish=true;
                    }
                }
            }
        }else{//enemy s
            if(myteam[ml].mode.state==2){//myteam l
                if(myteam[ml].mode.number==1){
                    if(enemy[el].mode.number==8||enemy[el].mode.number==6||enemy[el].mode.number==11||enemy[el].mode.number==12){
                        fightdelete_element(-1,el);finish=true;
                    }
                }else if(myteam[ml].mode.number==2){
                    if(enemy[el].mode.number==8||enemy[el].mode.number==6){
                        fightdelete_element(-1,el);finish=true;
                    }
                }else if(myteam[ml].mode.number==3){
                    if(enemy[el].mode.number==8||enemy[el].mode.number==6||enemy[el].mode.number==11||enemy[el].mode.number==12){
                        fightdelete_element(-1,el);finish=true;
                    }
                }else if(myteam[ml].mode.number==4){
                
                }else if(myteam[ml].mode.number==9){

                }else if(myteam[ml].mode.number==10){
                    if(enemy[el].mode.number==7||enemy[el].mode.number==8||enemy[el].mode.number==12){
                        fightdelete_element(-1,el);finish=true;
                    }
                }
            }else{//myteam s
                if(enemy[el].blood==myteam[ml].blood){
                    fightdelete_element(ml,el);finish=true;
                }else if(enemy[el].blood>myteam[ml].blood){
                    enemy[el].blood=enemy[el].blood-myteam[ml].blood;
                    fightdelete_element(ml,-1);finish=true;
                }else if(enemy[el].blood<myteam[ml].blood){
                    myteam[ml].blood=myteam[ml].blood-enemy[el].blood;
                    fightdelete_element(-1,el);finish=true;
                }
            }
        }
        
        fightcheck=false;
        if(finish==false){
            fightdelete_element(-1,-1);
        }
        else {
            document.getElementById('myteamblood'+(ml+1)).innerHTML=myteam[ml].blood;
            document.getElementById('enemyblood'+(el+1)).innerHTML=enemy[el].blood;
            /* myteam[ml].mode.attackaction++;
            enemy[el].mode.attackaction++; */
        } 
    }
}
function attacktower(){
    if(fightcheck==true&&enemyspace==0){
        attacktowertimes++;
        towerblood=towerblood-myteam[ml].blood;
        fightdelete_element(ml,-1);
        document.getElementById('myteamblood'+(ml+1)).innerHTML=myteam[ml].blood;
        document.getElementById("bloodline1").innerHTML=towerblood;
        if(towerblood<=0)endgame=true;
        if(endgame==true){
            document.getElementById('endgame1').innerHTML=`<p id="endgame"></p><p id="endgamecontent">遊戲勝利</p><a href="index.html"><input id="endgamebutton" type="button" value="回首頁"></input></a>`;
        }
    }
}
function fightdelete_element(m,e){
    if(m>=0){
        document.getElementById("myteam"+(m+1)).innerHTML='<img>';//null沒有圖
        myteam[m].mode=null;
        myteam[m].space=false;
        myteam[m].blood=0;
        myteamspace--;
    }
    if(e>=0){
        document.getElementById("enemy"+(e+1)).innerHTML='<img>';//null沒有圖
        enemy[e].mode=null;
        enemy[e].space=false;
        enemy[e].blood=0;
        enemyspace--;
    }
    if(m>=0){
        if(e>=0){
            ekmk++;
        }else{
            enkmk++;
        }
    }else{
        if(e>=0){
            ekmnk++;
        }else{
            enkmnk++;
        }
    }
}

function paddedFormat(num) {
    return num < 10 ? "0" + num : num; 
}

function startCountDown(duration, element) {

    let secondsRemaining = duration;
    let min = 0;
    let sec = 0;

    let countInterval = setInterval(function (c) {

        min = parseInt(secondsRemaining / 60);
        sec = parseInt(secondsRemaining % 60);
        if(secondsRemaining>0&&endgame==false)secondsRemaining = secondsRemaining - 1;
        else if(secondsRemaining==0){
            document.getElementById('endgame1').innerHTML='<p id="endgame"></p><p id="endgamecontent">遊戲失敗</p><a href="index.html"><input id="endgamebutton" type="button" value="回首頁"></input></a>';
        } 
        if(minerspace==9)minersec=0;
        else if(endgame==false)minersec++;
        if(enemyspace==5)fightsec=0;
        else if(endgame==false)fightsec++;
        element.textContent = `${paddedFormat(min)}:${paddedFormat(sec)}`;
        //document.getElementById('chunk2').innerHTML=minerspace+","+backpackspace;
        if(fightsec%30==1&&enemyspace<5)produceenemy();

        if(minersec%1==0){
            
            var n= Math.floor(Math.random()*ele.length);
            var m= Math.floor(Math.random()*9);
            
            let ii=0;
            /* for(let i=0;i<10;i++){
                if(backpack[i].space==false)space=i;
                if(space!=-1)break;
            } */
            while(ele[n].atomicnumber!=1)
                n= Math.floor(Math.random()*ele.length);
            
            while(miner[m].space==true){
                c=0;
                m= Math.floor(Math.random()*9);
                
                for(var i=0;i<9;i++){
                    if(miner[i].space==true)c++;
                }
                if(c==9)break;
            }


            
            ele[n].show_element(n,m);
        }

        
        /* if (secondsRemaining < 0 && min!=100) { clearInterval(countInterval) }; */

    }, 1000);
}

var c=0;
var backpackspace=0;
var minerspace=0;
var minersec=0;
var compoundspace=0;
var backpacklocation=0;
var compoundlocation=0;
var myteamspace=0;
var myteamlocation=0;
var enemyspace=0;
var enemylocation=0;
var fightcheck=false;
var ml=0;
var el=0;
var fightsec=0;
var towerblood=3000;
var endgame=false;
var gametime=5*60+0;
var compoundaction=0;//合成次數
var compoundtrash=0;//合成非攻擊物次數
var errorcompound=0;//合成錯誤次數
var enemynumber=0;//敵方生成次數
var attacktowertimes=0;//攻擊塔的次數
var attacktimes=0;//所有攻擊
var ekmk=0;//敵方死亡且我方死亡次數
var ekmnk=0;//敵方死亡且我方沒死亡次數
var enkmk=0;//敵方沒死亡且我方死亡次數
var enkmnk=0//敵方沒死亡且我方沒死亡次數
var trashnumber=0;
window.onload = function (c) {
    let time_minutes = 3; // Value in minutes
    let time_seconds = 0; // Value in seconds

    let duration = time_minutes * 60 + time_seconds;

    element = document.querySelector('#count-down-timer');
    element.textContent = `${paddedFormat(time_minutes)}:${paddedFormat(time_seconds)}`;

    startCountDown(--duration, element);
    document.getElementById("bloodline1").innerHTML=towerblood;
};
//document.getElementById("box1").addEventListener("click",getElement());

//ele = new Element[100];

//show_element();
const ele = [];
const miner = [];
const backpack = [];
const compound = [];
const attacknumber=[0,0,0,0,0,0,0,0,0,0,0,0,0,0];
const myteam = [];
const enemy = [];
const attack= [];
//const product;

//number, serialnumber, pick, compound, plusminus,atomicnumber, src, ion, ClminusBrminusIminus, SO42minus, CrO42minus, S2minus, OHminus, Cr2O42minus, CO32minusSO38minusPO43minus
//陣列位置, 序號, 被撿幾次, 合成次數,正負多少, 原子數, 圖片位置, 離子名稱, Cl-Br-I-, SO42-, CrO42-, S2-, OH-, Cr-, CO32-, SO32-, PO43-前三大多可溶,後四大多不可溶
ele[0]=new Element(0,0,0,0,1,1,"picture/+/Li+.png","Li+",false,false,false,true,true,true,true,false,false);
ele[1]=new Element(1,1,0,0,1,1,"picture/+/Na+.png","Na+",false,false,false,true,true,true,true,false,false);
ele[2]=new Element(2,2,0,0,1,1,"picture/+/K+.png","K+",false,false,false,true,true,true,true,false,false);
/* ele[3]=new Element(3,0,1,"picture/+/Rb+.png","Rb+",false,false);
ele[4]=new Element(4,0,1,"picture/+/Cs+.png","Cs+",false,false);
ele[5]=new Element(5,0,1,"picture/+/Fr+.png","Fr+",false,false); */
ele[3]=new Element(3,3,0,0,2,1,"picture/+/Be2+.png","Be2+",false,false,false,true,false,true,false,false,true);
ele[4]=new Element(4,4,0,0,2,1,"picture/+/Mg2+.png","Mg2+",false,false,false,true,false,true,false,false,false);//第六個微溶
ele[5]=new Element(5,5,0,0,2,1,"picture/+/Ca2+.png","Ca2+",false,true,false,true,true,false,false,false,false);//第二、五個微溶
ele[6]=new Element(6,6,0,0,2,1,"picture/+/Sr2+.png","Sr2+",false,true,true,true,true,false,false,false,false);//第三個微溶
ele[7]=new Element(7,7,0,0,2,1,"picture/+/Ba2+.png","Ba2+",false,true,true,true,true,false,false,false,false);
ele[8]=new Element(8,8,0,0,1,1,"picture/+/H+.png","H+",false,false,false,true,true,true,true,false,false);
ele[9]=new Element(9,9,0,0,1,1,"picture/+/Ag+.png","Ag+",true,false,true,false,false,false,false,true,false);
ele[10]=new Element(10,10,0,0,1,1,"picture/+/Cu+.png","Cu+",true,false,false,false,false,false,false,false,false);
ele[11]=new Element(11,11,0,0,2,1,"picture/+/Hg2+.png","Hg22+",true,false,false,false,false,false,false,false,false);
ele[12]=new Element(12,12,0,0,1,1,"picture/+/NH4+.png","NH4+",false,false,false,true,true,true,true,false,false);
ele[13]=new Element(13,13,0,0,2,1,"picture/+/Pb2+.png","Pb2+",true,true,true,false,false,false,false,false,true);
ele[14]=new Element(14,14,0,0,1,1,"picture/+/Tl+.png","Tl+",true,false,false,false,false,false,false,false,false);
ele[15]=new Element(15,0,0,0,2,2,"picture/+/2XLi+.png","Li+",false,false,false,true,true,true,true,false,false);
ele[16]=new Element(16,1,0,0,2,2,"picture/+/2XNa+.png","Na+",false,false,false,true,true,true,true,false,false);
ele[17]=new Element(17,2,0,0,2,2,"picture/+/2XK+.png","K+",false,false,false,true,true,true,true,false,false);
ele[18]=new Element(18,8,0,0,2,2,"picture/+/2XH+.png","H+",false,false,false,true,true,true,true,false,false);
ele[19]=new Element(19,14,0,0,2,2,"picture/+/2XTl+.png","Tl+",true,false,false,false,false,false,false,false,false);
ele[20]=new Element(20,9,0,0,2,2,"picture/+/2XAg+.png","Ag+",true,false,true,false,false,false,false,false,false);
ele[21]=new Element(21,10,0,0,2,2,"picture/+/2XCu+.png","Cu+",true,false,false,false,false,false,false,false,false); 
ele[22]=new Element(22,22,0,0,-1,1,"picture/-/Br-.png","Br-",false,false,false,false,false,false,false,false,false);
ele[23]=new Element(23,23,0,0,-1,1,"picture/-/Cl-.png","Cl-",false,false,false,false,false,false,false,false,false);
ele[24]=new Element(24,24,0,0,-1,1,"picture/-/I-.png","I-",false,false,false,false,false,false,false,false,false);
ele[25]=new Element(25,22,0,0,-2,2,"picture/-/2Br-.png","Br-",false,false,false,false,false,false,false,false,false);
ele[26]=new Element(26,23,0,0,-2,2,"picture/-/2Cl-.png","Cl-",false,false,false,false,false,false,false,false,false);
ele[27]=new Element(27,24,0,0,-2,2,"picture/-/2I-.png","I-",false,false,false,false,false,false,false,false,false);
ele[28]=new Element(28,28,0,0,-1,1,"picture/-/OH-.png","OH-",false,false,false,false,false,false,false,false,false);
ele[29]=new Element(29,28,0,0,-2,2,"picture/-/2OH-.png","OH-",false,false,false,false,false,false,false,false,false);
ele[30]=new Element(30,30,0,0,-1,1,"picture/-/NO3-.png","NO3-",false,false,false,false,false,false,false,false,false);
ele[31]=new Element(31,30,0,0,-2,2,"picture/-/2NO3-.png","NO3-",false,false,false,false,false,false,false,false,false);
ele[32]=new Element(32,32,0,0,-2,1,"picture/-/S2-.png","S2-",false,false,false,false,false,false,false,false,false);
ele[33]=new Element(33,33,0,0,-2,1,"picture/-/SO32-.png","SO32-",false,false,false,false,false,false,false,false,false);
ele[34]=new Element(34,34,0,0,-3,1,"picture/-/PO43-.png","PO43-",false,false,false,false,false,false,false,false,false);
ele[35]=new Element(35,35,0,0,-2,1,"picture/-/CO32-.png","CO32-",false,false,false,false,false,false,false,false,false);
ele[36]=new Element(36,36,0,0,-2,1,"picture/-/SO42-.png","SO42-",false,false,false,false,false,false,false,false,false);
ele[37]=new Element(37,37,0,0,-2,1,"picture/-/CrO42-.png","CrO42-",false,false,false,false,false,false,false,false,false);
ele[38]=new Element(38,38,0,0,-1,1,"picture/-/CH3COO-.png","CH3COO-",false,false,false,false,false,false,false,false,false);
ele[39]=new Element(39,39,0,0,-2,1,"picture/-/C2O42-.png","C2O42-",false,false,false,false,false,false,false,false,false);
ele[40]=new Element(40,40,0,0,2,1,"picture/+/Cu2+.png","Cu2+",false,false,false,false,false,false,false,true,false);
ele[41]=new Element(41,41,0,0,3,1,"picture/+/Co3+.png","Co3+",false,false,false,false,false,false,false,true,false);
ele[42]=new Element(42,42,0,0,2,1,"picture/+/Ni2+.png","Ni2+",false,false,false,false,false,false,false,true,false);
ele[43]=new Element(43,43,0,0,2,1,"picture/+/Zn2+.png","Zn2+",false,false,false,false,false,false,false,true,true);
ele[44]=new Element(44,44,0,0,3,1,"picture/+/Al3+.png","Al3+",false,false,false,false,false,false,false,false,true);
ele[45]=new Element(45,45,0,0,3,1,"picture/+/Cr3+.png","Cr3+",false,false,false,false,false,false,false,false,true);
ele[46]=new Element(46,46,0,0,2,1,"picture/+/Sn2+.png","Sn2+",false,false,false,false,false,false,false,false,true);
ele[47]=new Element(8,8,0,0,1,1,"picture/+/H+.png","H+",false,false,false,true,true,true,true,false,false);
ele[48]=new Element(8,8,0,0,1,1,"picture/+/H+.png","H+",false,false,false,true,true,true,true,false,false);
ele[49]=new Element(28,28,0,0,-1,1,"picture/-/OH-.png","OH-",false,false,false,false,false,false,false,false,false);
ele[50]=new Element(28,28,0,0,-1,1,"picture/-/OH-.png","OH-",false,false,false,false,false,false,false,false,false);
ele[51]=new Element(51,0,0,0,3,3,"picture/+/3XLi+.png","Li+",false,false,false,true,true,true,true,false,false);
ele[52]=new Element(52,1,0,0,3,3,"picture/+/3XNa+.png","Na+",false,false,false,true,true,true,true,false,false);
ele[53]=new Element(53,2,0,0,3,3,"picture/+/3XK+.png","K+",false,false,false,true,true,true,true,false,false);
ele[54]=new Element(54,8,0,0,3,3,"picture/+/3XH+.png","H+",false,false,false,true,true,true,true,false,false);
ele[55]=new Element(55,9,0,0,3,3,"picture/+/3XAg+.png","Ag+",true,false,true,false,false,false,false,true,false);
ele[56]=new Element(56,10,0,0,3,3,"picture/+/3XCu+.png","Cu+",true,false,false,false,false,false,false,false,false);
ele[57]=new Element(57,12,0,0,2,2,"picture/+/2XNH4+.png","NH4+",false,false,false,true,true,true,true,false,false);
ele[58]=new Element(58,12,0,0,3,3,"picture/+/3XNH4+.png","NH4+",false,false,false,true,true,true,true,false,false);
ele[59]=new Element(59,14,0,0,3,3,"picture/+/3XTl+.png","Tl+",true,false,false,false,false,false,false,false,false);
ele[60]=new Element(60,22,0,0,-3,3,"picture/-/3XBr-.png","Br-",false,false,false,false,false,false,false,false,false);
ele[61]=new Element(61,23,0,0,-3,3,"picture/-/3XCl-.png","Cl-",false,false,false,false,false,false,false,false,false);
ele[62]=new Element(62,24,0,0,-3,3,"picture/-/3XI-.png","I-",false,false,false,false,false,false,false,false,false);
ele[63]=new Element(63,28,0,0,-3,3,"picture/-/3XOH-.png","OH-",false,false,false,false,false,false,false,false,false);
ele[64]=new Element(64,30,0,0,-3,3,"picture/-/3XNO3-.png","NO3-",false,false,false,false,false,false,false,false,false);
ele[65]=new Element(65,38,0,0,-2,2,"picture/-/2XCH3COO-.png","CH3COO-",false,false,false,false,false,false,false,false,false);
ele[66]=new Element(66,38,0,0,-3,3,"picture/-/3XCH3COO-.png","CH3COO-",false,false,false,false,false,false,false,false,false);



attack[0]=new Mode(1,2,0,0);
attack[1]=new Mode(2,2,0,0);
attack[2]=new Mode(3,2,0,0);
attack[3]=new Mode(4,2,0,0);
attack[4]=new Mode(5,1,0,0);
attack[5]=new Mode(6,1,0,0);
attack[6]=new Mode(7,1,0,0);
attack[7]=new Mode(8,1,0,0);
attack[8]=new Mode(9,2,0,0);
attack[9]=new Mode(10,2,0,0);
attack[10]=new Mode(11,1,0,0);
attack[11]=new Mode(12,1,0,0);

for(let i=0;i<9;i++){
    miner[i]=new Miner(null,false);
}

for(let i=0;i<10;i++){
    backpack[i]=new Backpack(null,false);
}
for(let i=0;i<3;i++){
    compound[i]=new Compound(null,false);
}
const product=new Product(null,null,null,false,0);
for(let i=0;i<5;i++){
    myteam[i]=new Fight(null,false,0);
    enemy[i]=new Fight(null,false,0);
}
//var test = new Element1(1,0,"+","picture/"+1+"+.png");
/* document.write('<img src="'+test.src+'">'); */


