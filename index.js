lis=[[".",".",".",],
        [".",".",".",],
        [".",".",".",]];
let x=true;
let playing=true;
let count=0;
function check(){
    for(let i=0;i<3;i++){
        let countx=0,counto=0;
        for(let j=0;j<3;j++){
            if(lis[i][j]=='X')countx++;
            else if(lis[i][j]=='O')counto++;
        }
        if(countx==3){
            return 1;
        }
        if(counto==3){
            return -1;
        }
    }
    for(let i=0;i<3;i++){
        let countx=0,counto=0;
        for(let j=0;j<3;j++){
            if(lis[j][i]=='X')countx++;
            else if(lis[j][i]=='O')counto++;
        }
        if(countx==3){
            return 1;
        }
        if(counto==3){
            return -1;
        }
    }
    if(lis[0][0]==lis[1][1] && lis[1][1]==lis[2][2]){
        if(lis[0][0]=='X')return 1;
        else if(lis[0][0]=='O')return -1;
    }
    if(lis[0][2]==lis[1][1] && lis[1][1]==lis[2][0]){
        if(lis[0][2]=='X')return 1;
        else if(lis[0][2]=='O')return -1;
    }
    return 0;
}
function clickbtn(i,j){
    if(lis[i][j]!='.' || !playing)return ;
    count++;
    if(x){
        lis[i][j]='X';
        document.getElementById("b"+i+j).innerHTML='X';
        document.getElementById("b"+i+j).style.color='blue';
        document.getElementById("gameheader").style.backgroundColor="red";
        document.getElementById("gameheader").innerHTML="O to play";

    }
    else{
        lis[i][j]='O';
        document.getElementById("b"+i+j).innerHTML='O';
        document.getElementById("b"+i+j).style.color='red';
        document.getElementById("gameheader").style.backgroundColor="blue";
        document.getElementById("gameheader").innerHTML="X to play";
    }
    let c=check();
    if(c==1){
        document.getElementById("gameheader").style.backgroundColor="blue";
        document.getElementById("gameheader").innerHTML="X is the winner!";
        playing=false;
    }
    else if(c==-1){
        document.getElementById("gameheader").style.backgroundColor="red";
        document.getElementById("gameheader").innerHTML="O is the winner!";
        playing=false;
    }
    else if(count==9){
        document.getElementById("gameheader").style.backgroundColor="green";
        document.getElementById("gameheader").innerHTML="It's a draw!";
        playing=false;
    }
    x=!x;
}
function reset(){
    count=0;
    lis=[['.', '.', '.'],
         ['.', '.', '.'],
         ['.', '.', '.']];
    x=true;
    playing=true;
    document.getElementById("gameheader").style.backgroundColor="blue";
    document.getElementById("gameheader").innerHTML="X to play";
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            document.getElementById("b"+i+j).innerHTML='.';
            document.getElementById("b"+i+j).style.color='white';
        }
    }
}