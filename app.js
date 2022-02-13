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
       const pin= getpin();

        document.getElementById('display-pin').value=pin;
        
}

document.getElementById('key-pad').addEventListener('click',function(event){
//       console.log(event.target.innerText)
      
      const number=event.target.innerText;

      const calcInput= document.getElementById('typed-numbers');

      if(isNaN(number)){
              console.log(number)

              if(number=='C'){
                calcInput.value="";     
              }
      }

      else{

//      const calcInput= document.getElementById('typed-numbers');
     const previouscalc=calcInput.value
     const newcalc= previouscalc+number
//      calc.value=number
     calcInput.value=newcalc

      }
} );


function verifypin(){

       const pin=document.getElementById('display-pin');

       const generatePin=pin.value;

       const typedpin=document.getElementById('typed-numbers');

       const typedpinValue=typedpin.value;
const successMessage=  document.getElementById('notify-pass')

const failedmessage= document.getElementById('notify-failed')
       if(generatePin==typedpinValue){
        successMessage.style.display='block'
        failedmessage.style.display='none';
       }

       else{
        successMessage.style.display='none'
        failedmessage.style.display='block';
       }

}