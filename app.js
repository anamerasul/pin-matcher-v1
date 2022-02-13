// document.getElementById('generate-btn').addEventListener('click', function(){
//         const pin = Math.round(Math.random()*10000);
//         console.log(pin);


//         const pinvalue=
// })


function getpin(){
        const pin = Math.round(Math.random()*10000);
        console.log(pin);
        const pinstring=pin+'';
        if(pinstring.length==4){
                return pin;
        }

        else{
                console.log('get less than 4',pin)
                return getpin()
        }

}



function generatepin(){
        getpin()
        
}