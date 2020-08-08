 function menu(){

  if(document.getElementById("second-menu").style.display==="")
    document.getElementById("second-menu").style.display="none";
      
      if(document.getElementById("second-menu").style.display==="none") {
         document.getElementById("second-menu").style.display="flex";
         document.getElementById("menu-icon").classList.remove('fa-bars');
         document.getElementById("menu-icon").classList.add('fa-times');
 
 }
 
    else {
      document.getElementById("second-menu").style.display="none";
      document.getElementById("menu-icon").classList.remove('fa-times');
      document.getElementById("menu-icon").classList.add('fa-bars');
         
  }
      
    }