/**
 * first is project
 */


// creating variables for all
let chatArea = document.querySelector('.displyresult') //variable for display result

let chatBtn = document.querySelector('.sendbtn')

let chatInput = document.querySelector('.typeinput')


chatBtn.addEventListener('click', displaychat) // setting event listener for button, for click
                                                // eventlistner requires 2 para. i.e: click and a callback function
chatInput.addEventListener('keyup', function(event){
    if (event.key ==='Enter')chatBtn.click();
    // endabling button
    if(this.value.length > 1){
        chatBtn.disabled = false;
    }
})








function displaychat (){
    let _mychat_ = chatInput.value.toLowerCase();
    let robotresponse = ''
    let responseIndex;
    // userChat('hello world')

        robotresponse = notRecognize[Math.floor(Math.random())];

    userChat(_mychat_);
    robotChat('');
    // console.log(_mychat_);
    if(_mychat_.startsWith('calculate')){
        robotresponse = calculateExpression(_mychat_);
        
        handleResponse(robotresponse.toString());
        return 
    }
    
    
    for(object of response){
        if(_mychat_.includes(object.key))
        {
            responseIndex = Math.floor(Math.random() * object.replies.length);

            robotresponse = object.replies[responseIndex]
            handleResponse(robotresponse);
        }
        // }else{
        //     responseIndex = Math.floor(Math.random() * notRecognize.length);
        //     robotresponse = notRecognize[responseIndex];
        //     handleResponse(robotresponse);
        //     return;
        // }
        chatBtn.disabled = true; //disable button again
    }
    
    
    // if(_mychat_.includes('date') || _mychat_.includes('today\'s date'))
    // {
    //     txt = response[0];
    //     responseArray = Object.values(txt);

    //     robotresponse = responseArray[Math.floor(Math.random() * responseArray.length)];
    //      handleResponse(robotresponse);
    // }else if(_mychat_.includes('time') || _mychat_.includes('what the time')) {
    //     txt = response[1];
    //     responseArray = Object.values(txt);

    //     robotresponse = responseArray[Math.floor(Math.random() * responseArray.length)];
    //      handleResponse(robotresponse);
    // }
        

    chatInput.value = ''

}



// function to display what user types
function userChat (msg){
    let textcontainer = document.createElement('p');
        textcontainer.className = 'user_type_display'
        textcontainer.innerHTML = `
        ${msg}
        &nbsp;
        <i class="fas fa-user"></i>
        
        `

        chatArea.appendChild(textcontainer)
}

function robotChat (msg){
    let textcontainer = document.createElement('p');
        textcontainer.className = 'result'
        textcontainer.innerHTML = `
        <span class="robotwrapper">
        <i class="fas fa-robot"></i>
            <span class="__thinking__">
                <span></span>
                <span></span>
                <span></span>
            </span>
        </span>
        &nbsp;
        <span class="rtnresponse"${msg}</span>
        
        `

        chatArea.appendChild(textcontainer)
}

function handleResponse(msg){
    // console.log(msg)
    let rtn = document.querySelectorAll('.result');
    let txtStart = 0;
    let lastp = rtn[rtn.length -1]
    let last = lastp.querySelector('.rtnresponse')
    let thinking = lastp.querySelector('.__thinking__')

    let timer = setInterval(function(){

        if (txtStart >= msg.length){
            clearInterval(timer);
            timer = 0;
            thinking.remove();
        }
        scrollchat();
        last.innerHTML += msg.charAt(txtStart);
        txtStart++;
    }, 40)
}

function scrollchat(){
    //if (chatArea.innerHeight)
    chatArea.scrollTop = chatArea.clientHeight
}

// function to run calculation

function calculateExpression(Expression){

    try{
        let saveToUse = Expression.replace(/[^0-9+\-*/().\s]/g, "")

    let result = Function(`"use strict"; return (${saveToUse})`)();
    if(isNaN(result) || result === Infinity || result=== -Infinity){
        return `Sorry, i cannot calculate ${Expression}, check your input`;
    }
     return result;
    }catch(error){
        return `sorry check your input and try again, i can not run ${error}`;
    }
    
}


// alert(calculateExpression('3 * 100'))

document.addEventListener('keydown', function(event){
    console.log(event)
    let pixel = 20;
    if(event.key === "ArrowUp"){
        chatArea.scrollTop -= pixel;
    }
     if(event.key === "ArrowDown"){
        chatArea.scrollTop += pixel;
    }
})


    
