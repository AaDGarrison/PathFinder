var clicked=false;
var continueLoop=true;
var sortingArray=[];
var arraySize=document.getElementById("arraySize").value;
var arraysize_change
var canvas=document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var width=canvas.clientWidth;
var height=canvas.clientHeight;
canvas.height=height;
canvas.width=width;
var left_border=(width/20);
var right_border=width-(width/20);
var thickness
var spacing
var comparisons=0;
var sorted=false
var clicked=false;
var i  
var j
const FRAMERATE=.005
start();

function sort(){ // needs to have cases based on with sorting methods to use
    clicked=true;
    sorted=false;
    i=sortingArray.length;
    j=0;
    comparisons=0;
}

function start(){
    setParameters();
    update();
}

function setParameters(){
    // sets all the Defualt values-----
    sortingArray.length=0;
    for(let i=0; i<arraySize;i++){
                
        sortingArray.push(Math.random());

    }
    thickness=(width*.80)/arraySize;
    spacing=(width*.10)/arraySize;
    //----------------------------------

}
function update(){
    setInterval(function(){ 
      document.getElementById("arrayLabel").innerHTML=arraySize;  
      drawArray('limegreen');
        if(clicked==false){
            arraysize_change=document.getElementById("arraySize").value;
            if(arraySize!=arraysize_change){
                arraySize=arraysize_change;
                setParameters();
            }
        }
        if(clicked==true){
            console.log("Starting sort sort")
            if(sorted==false){
                bubblesort();
            }
            if(sorted==true)clicked=false;
            

        }
        document.getElementById("comparisons").innerHTML=comparisons;
    }, FRAMERATE);
}

function drawrect(start,recHeight,color) {
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.fillRect(start,height-recHeight,thickness,height)
    ctx.stroke();
}

function drawArray(color){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var position=left_border;
    for(var i=0;i<arraySize;i++){  
        drawrect(position,sortingArray[i]*height,color);
        position=position+thickness+spacing;
        
        
    }

}

function bubblesort(){
    if(sortingArray[j]>sortingArray[j+1]){
        var temp=sortingArray[j+1]
        sortingArray[j+1]=sortingArray[j]
        sortingArray[j]=temp
                
        comparisons++;            
    }
    if(i===0){
        sorted=true;
    }
    if(j<i){
        j++;

    }
    else{
        j=0;
        i--;

    }
     
    
    //clicked=false;
    document.getElementById("comparisons").innerHTML=comparisons;
   }