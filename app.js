function toggleEvent(){
  const html = document.documentElement;

  if(html.classList.contains('dark')){
    html.classList.remove('dark');
  }else{
    body.classList.add('dark');
  }
}