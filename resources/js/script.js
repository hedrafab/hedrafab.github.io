
var lastImg = document.getElementById("first");

function enlarge(imgs) {
    var expandImg = document.getElementById("large");
    expandImg.src = imgs.src;
    imgs.style.opacity = 1;
    lastImg.style.opacity = 0.7;
    lastImg = imgs;
}

var button = document.getElementById('other-clients');

button.onclick = function() {
    var div = document.getElementById('otherClients');
    if (div.style.display !== 'none') {
        div.style.display = 'none';
    }
    else {
        div.style.display = 'block';
    }
};

$(document).ready(function() {
    
    $('.js-features').waypoint(function(dir) {
        if (dir == "down") {
            $('nav').addClass('sticky');
        } else {$('nav').removeClass('sticky');
        }
    }, {
      offset: '60px;'
    });
});

// Initialize and add the map
function initMap() {
  // The location of Uluru
//   13.198205025572062, 80.17873437898226 MARSHA
// 13.198518851206416, 80.17895428097297 SMT

  const smt = { lat: 13.198518851206416, lng: 80.17895428097297 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16,
    center: smt,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: smt,
    map: map,
  });
}

let anchorlinks = document.querySelectorAll('a[href^="#"]')
 
for (let item of anchorlinks) { // relitere 
    item.addEventListener('click', (e)=> {
        let hashval = item.getAttribute('href')
        let target = document.querySelector(hashval)
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
        history.pushState(null, null, hashval)
        e.preventDefault()
    })
}

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {
      $window.scrollTo(0, 0);
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});