const menu = () => {
  document.getElementById('burger').classList.toggle('change');
  document.querySelector('nav').classList.toggle('open');
};

const sendMail =() => {
  let link ='mailto:phillipdunn@hotmail.com'
+ '?cc= ' 
  + '&subject=' + escape('Phil - let\'s connect')
  + '&body=' + escape('Hi Phil\n\nLet\'s connect - please reply to arrange a chat or give me a call on\n\nKind regards')
  ;
  window.location.href = link;
};

const disableScrolling = () =>{
  let x=window.scrollX;
  let y=window.scrollY;
  window.onscroll=function(){window.scrollTo(x, y);};
}

document.getElementById('burger').addEventListener('click', menu, disableScrolling);
document.getElementById('mail').addEventListener('click', sendMail);