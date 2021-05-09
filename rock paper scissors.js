
function rps_main(choice)
{
    
    var human_choice = choice.id;
    var lis = ["rock","paper","scissors"];

    
    var bot_choice = ["rock","paper","scissors"][random()];
    

    var a = lis.indexOf(human_choice);
    var b = lis.indexOf(bot_choice);

   
   
    check_winner(a,b);
    retain_images(a,b);
    
}
function random(){

    return Math.floor(Math.random()*3);
}
function check_winner(a,b){
    if(a==b){
        console.log("match tied");
        win = 0.5;
        return win;
    }
    else if(a==0 && b==1){
        console.log("bot won");
        win = 0;
        return win;
    }
    else if(a==0 && b==2){
        console.log("you won");
        win = 1;
        return win;
    }
    else if(a==1 && b==0){
        console.log("you won");
        win = 1;
        return win;
    }
    else if(a==1 && b==2){
        console.log("bot won");
        win = 0;
        return win;
    }
    else if(a=2 && b==1){
        console.log("you won");
        win = 1;
        return win;
    }
    else{
        console.log("bot won");
        win = 0;
        return win;
        
    }
}
function retain_images(a,b){
    var win = check_winner(a,b);
    var text;
    if(win==1){
        text = "you won !!";
    }
    else if(win==0.5){
        text = "match tied";
    }
    else{
        text = "you lost!!";
    }
    var rock_src = document.getElementById("rock").src;
    var paper_src = document.getElementById("paper").src;
    var scissors_src = document.getElementById("scissors").src;
    
    var source_lis = [rock_src,paper_src,scissors_src];
    document.getElementById("rock").remove();
    document.getElementById("paper").remove();
    document.getElementById("scissors").remove();
    var humandiv = document.createElement('div');
    var msgdiv = document.createElement('div');
    var botdiv = document.createElement('div');
    humandiv.innerHTML = "<img src='" + source_lis[a] + "'>";
    document.getElementById("abc").appendChild(humandiv);
    var h1 = document.createElement('h1');
    var txt =  document.createTextNode(text);
    h1.appendChild(txt);
    msgdiv.appendChild(h1);
    document.getElementById('abc').appendChild(msgdiv);
    botdiv.innerHTML = "<img src = '" + source_lis[b] + "'>";
    document.getElementById("abc").appendChild(botdiv);
    




}


