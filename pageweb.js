div=document.getElementById('sent');
div=document.getElementById('message');
div=document.getElementsByClassName('not_sent');
send.addEventListener('click',function () {
    if (document.getElementById('message').value!=="") {
sent.style.display='block';
setTimeout(() => {
 sent.style.display='none';
},2000)
    }
})
