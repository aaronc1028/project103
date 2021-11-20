Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
})
camera=document.getElementById("camera")
Webcam.attach("#camera")

function captureImage(){
    Webcam.snap(function(data_uri){
        document.getElementById("Result").innerHTML='<img id="image1" src="'+ data_uri+'"/>'
    })
}

console.log(ml5.version)

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/zy4mGq1KR/model.json",modelLoaded)

function identifyImg(){
Img=document.getElementById("image1")
classifier.classify(Img,gotResult)
    
}
function gotResult(error,results){
    if(error){
        console.error(error)
        
    }else{
        //console.log(results)
        console.log(results[0])
        console.log(results[0].label)
        console.log(results[0].confidence)
        document.getElementById("resultObjectName").innerHTML=(results[0].label)
        document.getElementById("resultAccuracy").innerHTML=(results[0].confidence.toFixed(3))
    }
}

function modelLoaded(){
    console.log("Model Loaded succesfully")
}