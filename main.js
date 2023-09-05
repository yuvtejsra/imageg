prediction1="";
prediction2="";
Webcam.set({

    width:400,height:300,image_format:'jpg',jpg_quality:90

    
});
camera=document.getElementById("camera");
    Webcam.attach('#camera');                                                                                       
function takepic (){
    Webcam.snap(function(x){
        document.getElementById ("result").innerHTML='<img id="greenbean"src="'+x+'"/>';
    });
}

console.log('ml5',ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/ghe_WEYGV/model.json',modelLoaded);
function modelLoaded(){
    console.log("model is a load");
}
function speak (){
    synt=window.speechSynthesis;
    speck1="first prediction is "+prediction1;
    speck2="second prediction is "+prediction2;
    variable=new  SpeechSynthesisUtterance(speck1+speck2);
    synt.speak(variable);
    
}
function check(){
    img=document.getElementById("greenbean");
classifier.classify(img,gotResult);
}
function gotResult(error,results){
    if( error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("emo1").innerHTML=results[0].label;
        document.getElementById("emo2").innerHTML=results[1].label;
      prediction1=results[0].label;
      prediction2=results[1].label;
      speak();
      if (prediction1=="happy pappy"){
        document.getElementById("emoji1").innerHTML="👍";
      } 
      if (prediction2=="happy pappy"){
        document.getElementById("emoji2").innerHTML="👍";
      }
      if (prediction1=="PEACEEEEE"){
        document.getElementById("emoji1").innerHTML="✌️";
      }
      if (prediction2=="PEACEEEEE"){
        document.getElementById("emoji2").innerHTML="✌️";
      }
      if (prediction1=="im ok"){
        document.getElementById("emoji1").innerHTML="👌";
      }
      if (prediction2=="im ok"){
        document.getElementById("emoji2").innerHTML="👌";
      }
      
    }
}