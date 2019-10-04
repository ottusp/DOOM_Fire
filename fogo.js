const FirePixelArray = [];
const FireWidth = 2;
const FireHeight = 3;

function start(){
    CreateFireDataStructure();

    console.log(FirePixelArray);
}

function CreateFireDataStructure(){
    const NumberOfPixels = FireWidth * FireHeight;

    for(let i = 0; i < NumberOfPixels; i++){
        FirePixelArray[i] = 0;
    }
}

function CalculateFirePropagation(){

}

start();