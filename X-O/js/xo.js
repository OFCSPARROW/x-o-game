var t1=document.getElementById("b1");
var t2=document.getElementById("b2");
var t3=document.getElementById("b3");
var t4=document.getElementById("b4");
var t5=document.getElementById("b5");
var t6=document.getElementById("b6");
var t7=document.getElementById("b7");
var t8=document.getElementById("b8");
var t9=document.getElementById("b9");

var change=0;

function cl1(s1,s2,y1) {
    change++;
    if(y1==1){
            if(change==1||change==3||change==5||change==7||change==9){
                t1.value = s1;
            }
            else{
                t1.value = s2;
            }
    }
    else if(y1==2){
        if(change==1||change==3||change==5||change==7||change==9){
            t2.value = s1;
        }
        else{
            t2.value = s2;
        }
    }
    else if(y1==3){
        if(change==1||change==3||change==5||change==7||change==9){
            t3.value = s1;
        }
        else{
            t3.value = s2;
        }
    }
    else if(y1==4){
        if(change==1||change==3||change==5||change==7||change==9){
            t4.value = s1;
        }
        else{
            t4.value = s2;
        }
    }
    else if(y1==5){
        if(change==1||change==3||change==5||change==7||change==9){
            t5.value = s1;
        }
        else{
            t5.value = s2;
        }
    }
    else if(y1==6){
        if(change==1||change==3||change==5||change==7||change==9){
            t6.value = s1;
        }
        else{
            t6.value = s2;
        }
    }
    else if(y1==7){
        if(change==1||change==3||change==5||change==7||change==9){
            t7.value = s1;
        }
        else{
            t7.value = s2;
        }
    }
    else if(y1==8){
        if(change==1||change==3||change==5||change==7||change==9){
            t8.value = s1;
        }
        else{
            t8.value = s2;
        }
    }
    else if(y1==9){
        if(change==1||change==3||change==5||change==7||change==9){
            t9.value = s1;
        }
        else{
            t9.value = s2;
        }
    }
}