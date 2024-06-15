


let rev = [];

let currentreview = 0;
var myInterval = setInterval(nextQuote, 4000);
const reviewQuote = document.getElementById("revp");
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(obj => {
            rev.push(obj.content);
        });
        console.log(rev);
    })
    .catch(error => console.error('Error fetching JSON:', error));


function showPage(page){
  var pages = ["index.html","about.html","about1.html","about2.html",
  "programs.html","location.html","testimonials.html"];
  for(var i=0;i<pages.length;i++){
    if(pages[i]!=page){
      console.log(pages[i]);
      ($(pages[i] )).css("visibility","hidden");
      ($(pages[i] )).css("opacity","0");

    }
  }
  window.location.replace(page);
}

function nextQuote(){
  currentreview ++;
  reviewQuote.style.animation = "";
  if(currentreview == rev.length){
    currentreview = 0;
  }
  reviewQuote.innerHTML = rev[currentreview];

}


function prevQuote(){
  currentreview --;
  if(currentreview == -1){
    currentreview = rev.length-1;
  }
  reviewQuote.innerHTML = rev[currentreview];
}

function jsTransitionb2t(nav){
  if (nav.length) {
    var f_top = nav.offset().top;
  }
    var f_top = nav.position().top;
    
  $(window).scroll(function() {
       if ($(window).scrollTop() + $(window).height() >= f_top ) {
            nav.css( "bottom", "0px" );
            nav.css( "opacity", "1" );
       }
       else{
          nav.css( "bottom", "-200px" );
          nav.css( "opacity", "0" );
       }
   });
}

function jsTransitionl2r(nav){

  if (nav.length) {
    var f_top = nav.offset().top;
  }else{
    var f_top = nav.position().top;
  }
  $(window).scroll(function() {
       if ($(window).scrollTop() + $(window).height() >= f_top ) {
            nav.css( "left", "0px" );
            nav.css( "opacity", "1" );
       }
       else{
          nav.css( "left", "-200px" );
          nav.css( "opacity", "0" );
       }
   });
}
function jsTransitionr2l(nav){
  if (nav.length) {
    console.log(nav);
    var f_top = nav.offset().top;
  }
    var f_top = nav.position().top;
  $(window).scroll(function() {
       if ($(window).scrollTop() + $(window).height() >= f_top ) {
            nav.css( "right", "0px" );
            nav.css( "opacity", "1" );
       }
       else{
          nav.css( "right", "-200px" );
          nav.css( "opacity", "0" );
       }
   });
}

const elemtsb2t = ['.abti1','.abti2','.abti3','.abti4','.abti5','.abti6','.owned','.welcome_anim','.approach_anim','.review_anim','.image_icons','.reviewBg'];
const elemtsl2r = [".about-img img"];
const elemtsr2l = ['.abt1','.abt2','.abt3'];

// $(document).ready(function() {
//   var nav = $('.cards');
//   jsTransitionr2l(nav);

// });

for(var i=0;i<elemtsb2t.length;i++){
  try{ 
    var nav = $(elemtsb2t[i]);
    setTimeout(jsTransitionb2t(nav), 1000);
  }
  catch{
    console.log("Error"); 
  }
}
for(var i=0;i<elemtsl2r.length;i++){
  try{ 
    var nav = $(elemtsl2r[i]);
    setTimeout(jsTransitionl2r(nav), 1000);
  }
  catch{
    console.log("Error"); 
  }
}
for(var i=0;i<elemtsr2l.length;i++){
  try{ 
    var nav = $(elemtsr2l[i]);
    setTimeout(jsTransitionr2l(nav), 1000);
  }
  catch{
    console.log("Error"); 
  }
}

