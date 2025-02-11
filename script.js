function roll(){
    let num= document.getElementById("num").value;
    let result= document.getElementById("result");
    let images= document.getElementById("images");
    resultar=[];
    image=[];
    for(let i=0;i<num;i++){
        value =(Math.floor(Math.random()*6)+1);
        resultar.push(value);
        image.push('<img src ="dice_images/'+value+'.png">');
    }
    
    result.textContent=resultar.join(", ");
    images.innerHTML=image.join(" ");
    console.log(resultar);


}