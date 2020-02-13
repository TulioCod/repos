var data= new Date();
var dia     = data.getDate();           
var sem     = data.getDay();            
var mes     = data.getMonth();          
var ano    = data.getFullYear();
var prim=sem,diasmes;
var diassem=['D','S','T','Q','Q','S','S']
if(mes==0||mes==2||mes==4||mes==6||mes==7||mes==9||mes==11){
    diasmes=31
}
else if(mes==1 && ano%4==0||ano%400==0){
    diasmes=29;
}
else if(mes==1){
    diasmes=28;
}
else{
    diasmes=30;
}


for(var i=0;i<7;i++){
    document.write("\n");
    for(var j=0;j<7;j++){
        document.write("<div></div>");
    }
}


for(var i=dia;i>1;i--){
    if(prim>0){
        prim--;
    }
    else 
        prim=6;

}
var cont=prim;
cont+=8;
for(var i=1;i<=diasmes;i++){
    var tab=document.getElementsByTagName("div")[cont];
    tab.innerHTML=i;
    cont++;
}
dia=dia+prim;
dia+=7;
var marcacao=document.getElementsByTagName("div")[dia];
marcacao.style.backgroundColor= "rgb(10,110,100)";

for(var i=1;i<=7;i++){
    var semana=document.getElementsByTagName("div")[i];
    semana.style.backgroundColor= "rgb(0,0,255)";
    semana.innerHTML=diassem[i-1]
}