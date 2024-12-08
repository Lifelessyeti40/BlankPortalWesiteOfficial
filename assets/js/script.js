// Navbar background color customization
document.getElementById("navbarColor").addEventListener("input", function () {
    document.getElementById("navbar-wrapper").style.backgroundColor = this.value;
  });

  // Navbar text customization
  document.getElementById("navbarText").addEventListener("input", function () {
    document.querySelector("#custom-navbar .navbar-brand").textContent = this.value;
  });

  // Content customization
  document.getElementById("contentHeading").addEventListener("input", function () {
    document.querySelector("#custom-content h1").textContent = this.value;
  });

  document.getElementById("contentColor").addEventListener("input", function () {
    document.querySelector("#custom-content").style.color = this.value;
  });

  // Footer customization
  document.getElementById("footerColor").addEventListener("input", function () {
    document.getElementById("custom-footer").style.backgroundColor = this.value;
  });

  document.getElementById("footerText").addEventListener("input", function () {
    document.querySelector("#custom-footer p").innerHTML = this.value;
  });

  // Button background color customization
  document.getElementById("buttonBackgroundColor").addEventListener("input", function () {
    document.getElementById("customButton").style.backgroundColor = this.value;
  });

  // Button background color customization
document.getElementById("buttonBackgroundColor").addEventListener("input", function () {
    document.getElementById("customButton").style.backgroundColor = this.value;
  });
  
  // Button text color customization
  document.getElementById("buttonTextColor").addEventListener("input", function () {
    document.getElementById("customButton").style.color = this.value;
  });

  // Button border radius customization
document.getElementById("buttonBorderRadius").addEventListener("input", function () {
    document.getElementById("customButton").style.borderRadius = `${this.value}px`;
  });

// Button shadow intensity customization
document.getElementById("buttonShadowIntensity").addEventListener("input", function () {
    const intensity = this.value;
    document.getElementById("customButton").style.boxShadow = `0 ${intensity}px ${intensity * 2}px rgba(0, 0, 0, 0.2)`;
  });

  // Font selection customization
document.getElementById("fontSelector").addEventListener("change", function () {
    document.getElementById("custom-content").style.fontFamily = this.value;
  });

  // About You Section

  document.addEventListener('DOMContentLoaded', function() {
    var aboutUsSection = document.getElementById('aboutUsSection');
    var aboutUsEditable = document.getElementById('aboutUsEditable');

    // Load saved content and position
    var savedContent = localStorage.getItem('aboutUsContent');
    var savedPosition = localStorage.getItem('aboutUsPosition');

    if (savedContent) {
        aboutUsEditable.innerHTML = savedContent;
    }

    if (savedPosition) {
        var position = JSON.parse(savedPosition);
        aboutUsSection.style.left = position.left;
        aboutUsSection.style.top = position.top;
    }

    // Save content to local storage on blur
    aboutUsEditable.addEventListener('blur', function() {
        localStorage.setItem('aboutUsContent', aboutUsEditable.innerHTML);
    });

    // Handle dragging
    var offsetX, offsetY;
    aboutUsSection.addEventListener('mousedown', function(e) {
        offsetX = e.clientX - aboutUsSection.offsetLeft;
        offsetY = e.clientY - aboutUsSection.offsetTop;
        document.addEventListener('mousemove', moveSection);
        document.addEventListener('mouseup', stopMovingSection);
    });

    function moveSection(e) {
        aboutUsSection.style.left = (e.clientX - offsetX) + 'px';
        aboutUsSection.style.top = (e.clientY - offsetY) + 'px';
    }

    function stopMovingSection() {
        document.removeEventListener('mousemove', moveSection);
        document.removeEventListener('mouseup', stopMovingSection);
        // Save position to local storage
        localStorage.setItem('aboutUsPosition', JSON.stringify({
            left: aboutUsSection.style.left,
            top: aboutUsSection.style.top
        }));
    }
});


  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }




