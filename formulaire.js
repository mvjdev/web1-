
var validation = document.getElementById('inputbutton');
var email = document.getElementById('input');
var email_m = document.getElementById('email_manquant');
validation.addEventListener('click', f_valid);
var submit = document.getElementById('inputbutton')
function f_valid(e) {
   const reg=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    console.log('value email=',document.getElementById('email').value);
    console.log("match", document.getElementById('email').value.match(reg));
    console.log('password',document.getElementById('password').value);
    
    if(document.getElementById('email').value.match(reg)!==null && document.getElementById('password').value!=="" && document.getElementById('email').value.match(reg)=="hei.maria.625@gmail.com"&& document.getElementById('password').value=="maria"){
        console.log('PASSED');
        
        setTimeout(() => {

        window.location.href=("file:///home/eto1/T%C3%A9l%C3%A9chargements/Maria-STD22082-Examen2/pageweb.html")
   
        
    
          const snippets = document.querySelectorAll('.snippet');

        
          for (let i = 0; i < snippets.length; i++) {
            snippets[i].addEventListener('mouseleave', clearTooltip);
            snippets[i].addEventListener('blur', clearTooltip);
          }
          
          function showTooltip(el, msg) {
            el.setAttribute('class', 'snippet tooltip');
            el.setAttribute('aria-label', msg);
          }
          
          function clearTooltip(e) {
            e.currentTarget.setAttribute('class', 'snippet');
            e.currentTarget.removeAttribute('aria-label');
          }
          
          const clipboardSnippets = new ClipboardJS('.snippet', {
            text: trigger => trigger.getAttribute('data-title')
          });
          
          clipboardSnippets.on('success', e => {
            e.clearSelection();
            showTooltip(e.trigger, 'Copied!');
          });
          
          clipboardSnippets.on('error', e => {
            showTooltip(e.trigger, 'Copy failed!');
          });

   }, 2000);
        
   
    }
    else{
      setTimeout(() => {
        console.log("NOT PASSED");
        e.preventDefault();
     email_m.textContent = 'Invalid Email/Password!';
      }, 2000);
      setTimeout(() => {
        email_m.textContent="";
      }, 4000);

    }

}


