const menu = () => {
  document.getElementById('burger').classList.toggle('change');
  document.querySelector('nav').classList.toggle('open');
  document.body.style.position = 'fixed';
  document.body.style.top = `-${window.scrollY}px`;
};

const sendMail =() => {
  let link ='mailto:phillipdunn@hotmail.com'
+ '?cc= ' 
  + '&subject=' + escape('Phil - let\'s connect')
  + '&body=' + escape('Hi Phil\n\nLet\'s connect - please reply to arrange a chat or give me a call on\n\nKind regards')
  ;
  window.location.href = link;
};

document.getElementById('burger').addEventListener('click', menu);
document.getElementById('mail').addEventListener('click', sendMail);

const touch = () => {
  document.getElementsByTagName('article').classList.toggle('touch');
};

document.getElementsByTagName('article').addEventListener('click touch',touch)