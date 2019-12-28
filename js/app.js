let isMobile = false;
let isNavOpen = false;

const playLoader = bodymovin.loadAnimation({
  container: document.getElementById('bm'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'data.json'
})
const logoAutoPlay = bodymovin.loadAnimation({
  container: document.getElementById('logo'),
  renderer: 'svg',
  loop: false,
  autoplay: true,
  path: 'logo.json'
})

$(document).ready(function() {
  loadPage("work");
});

const loadPage = (val,nav) => {
  //Need to check if mobile
  //To remove the overflow in body
  if(isMobile && nav === 1)
  openNav();
  //And hide the nav
  $("#content-container").load(`./pages/${val}.html`, function(
    responseTxt,
    statusTxt,
    xhr
  ) {
    hideAndShow("error","content-container","bm");
    if (statusTxt == "success"){
      hideAndShow("bm","error","content-container");
      logoAutoPlay.goToAndStop(0);
      logoAutoPlay.play();
    }
    if (statusTxt == "error"){
      hideAndShow("bm","content-container","error");
    }
  });
};

const openNav = () =>{
  if(!isMobile)
  isMobile = true;
  document.location.href="#top";
  $('#responsiveDecoy').append($('#list'));
  $('#list').append($('#social-container'));
  isNavOpen = !isNavOpen;
  isNavOpen ? $('#hamburger').attr("src","assets/hamburger-c.svg") : $('#hamburger').attr("src","assets/hamburger-o.svg");
  isNavOpen ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto";
  $('#responsiveDecoy').toggleClass('list-container');
  $('#list').toggleClass('list-show');
  $('#social-container').toggleClass('social-show');
}

const hideAndShow = (hideMe,hideMe2,showMe) =>{
  $(`#${hideMe}`).hide();
  $(`#${hideMe2}`).hide();
  $(`#${showMe}`).show();
}


/*Scroll to top when arrow up clicked BEGIN*/
$(window).scroll(function() {
  var height = $(window).scrollTop();
  if (height > 100) {
      $('#back2Top').show('fast');
  } else {
      $('#back2Top').hide('fast');
  }
});
$(document).ready(function() {
  $("#back2Top").click(function(event) {
      event.preventDefault();
      document.location.href="#top";
      return false;
  });
});
