const btn = document.querySelector('.content .leftContent .subscribe .btn');
const btnMobile = document.querySelector('.content .leftContent .subscribe .btnmobile');
const subscribeContent = document.querySelector('.content');
const text = document.querySelector('.content .leftContent .subscribe input');
const success = document.querySelector('.container .success');
const valid = document.querySelector('.content .leftContent .subscribe .validmessage');
const valid1 = document.querySelector('.content .leftContent .subscribe .validmobile');
const btnDismiss = document.querySelector('.Parentbox .box .boxContent button');

btn.addEventListener('click',function(){
	ValidateEmail(text.value);	
});

btnMobile.addEventListener('click',function(){
	ValidateEmailMobile(text.value);
});	

btnDismiss.addEventListener('click',function(){
	removeMessage();
});

function addEmailValue(Value){
	success.innerHTML=`
		<div class="Parentbox">
	        <div class="box">
		        <div class="boxContent">
		              <h1>Thanks for subscribing!</h1>
		              <p>A confirmation email has been sent to <span>${Value}</span>.Please
		                open it and click the button inside to confirm your subscription.
		              </p>
		              <button onclick="removeMessage()">Dismiss message</button>
		        </div>
	         </div>
        </div>
	`
}

function removeMessage(){
	subscribeContent.style.display='grid';
	success.style.display='none';
	valid.style.display='none';
	valid1.style.display='none';	
	text.value='';
	text.style.border='1px solid hsl(231, 7%, 60%)';
	text.style.backgroundColor='white';
}

function ValidateEmail(inputText){

	let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	
	if(inputText.match(mailformat)){
		success.style.display='grid';
		subscribeContent.style.display='none';
		valid.style.display='none';
		text.style.border='1px solid hsl(231, 7%, 60%)';
		text.style.backgroundColor='white';
		addEmailValue(text.value);
		return true;
		
	}else{
		valid.style.display='flex';
		valid.style.color='red';
		valid.style.position='absolute';
		valid.style.left='41%';
		valid.style.top='59%';
		text.style.backgroundColor='hsl(4, 100%, 67%)';
		text.style.border='1px solid hsl(4, 100%, 67%)';
		return false;
	}
}

function ValidateEmailMobile(inputText){

	let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	
	if(text.value.match(mailformat)){
		success.style.display='grid';
		subscribeContent.style.display='none';
		valid1.style.display='none';
		text.style.border='1px solid hsl(231, 7%, 60%)';
		text.style.backgroundColor='white';
		addEmailValue(text.value);
		return true;
		
	}else{
		valid1.style.display='flex';
		valid1.style.color='red';
		valid1.style.position='absolute';
		valid1.style.left='29%';
		valid1.style.top='65%';
		text.style.backgroundColor='hsl(4, 100%, 67%)';
		text.style.border='1px solid hsl(4, 100%, 67%)';
		return false;
	}
}

