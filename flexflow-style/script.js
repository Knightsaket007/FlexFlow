
const toggleMenu = () => {
    let element=document.getElementById('clickbtn');
    element.classList.toggle('active');
    let mobnav = document.getElementById('Mob-Linkcontainer');
    if (mobnav) {
      mobnav.classList.toggle('nav-active');
    }
  };




function setWidth(element, value) {
    element.style.width = value + 'px';
}

function setHeight(element, value) {
    element.style.height = value + 'px';
}

function setBorderRadius(element, value) {
    element.style.borderRadius = value + 'px';
}

function setFontSize(element, value) {
    element.style.fontSize = value + 'px';
}
function setpaddingTop(element, value) {
    element.style.paddingTop = value + 'px';
}
function setpaddingRight(element, value) {
    element.style.paddingRight = value + 'px';
}
function setpaddingBottom(element, value) {
    element.style.paddingBottom = value + 'px';
}
function setpaddingLeft(element, value) {
    element.style.paddingLeft = value + 'px';
}
function setpaddingtopBottom(element, value) {
    element.style.paddingTop = value + 'px';
    element.style.paddingBottom = value + 'px';
}
function setpaddingleftRight(element, value) {
    element.style.paddingLeft = value + 'px';
    element.style.paddingRight = value + 'px';
}

function setmarginTop(element, value) {
    element.style.marginTop = value + 'px';
}
function setmarginRight(element, value) {
    element.style.marginRight = value + 'px';
}
function setmarginBottom(element, value) {
    element.style.marginBottom = value + 'px';
}
function setmarginLeft(element, value) {
    element.style.marginLeft = value + 'px';
}
function setmargintopBottom(element, value) {
    element.style.marginTop = value + 'px';
    element.style.marginBottom = value + 'px';
}
function setmarginleftRight(element, value) {
    element.style.marginLeft = value + 'px';
    element.style.marginRight = value + 'px';
}

function setcolor(element, value) {
    element.style.color = value;
}
function setbgcolor(element, value) {
    element.style.backgroundColor = value;
}
function settop(element, value) {
    element.style.top = value+ 'px';
}
function setright(element, value) {
    element.style.right = value +'px';
}
function setbottom(element, value) {
    element.style.bottom = value + 'px';
}
function setleft(element, value) {
    element.style.left = value + 'px';
}
function setviewportHeight(element, value) {
    element.style.height = value + 'vh';
}
function setviewportWidth(element, value) {
    element.style.width = value + 'vw';
}
function setZindex(element, value) {
    element.style.zIndex = value;
}
function flexBox(element, value) {
    element.style.display = "flex";
    element.style.flexWrap = "wrap";
    element.style.gap = value +"px";
}


// Mapping of class prefixes to corresponding styling functions
const classMap = {
    'cust-w-': setWidth,
    'cust-h-': setHeight,
    'cust-br-': setBorderRadius,
    'cust-txt-sz-': setFontSize,
    'cust-pd-t-': setpaddingTop,
    'cust-pd-r-': setpaddingRight,
    'cust-pd-b-': setpaddingBottom,
    'cust-pd-l-': setpaddingLeft,
    'cust-pd-tb-': setpaddingtopBottom,
    'cust-pd-lr-': setpaddingleftRight,
    'cust-mg-t-': setmarginTop,
    'cust-mg-r-': setmarginRight,
    'cust-mg-b-': setmarginBottom,
    'cust-mg-l-': setmarginLeft,
    'cust-mg-tb-': setmargintopBottom,
    'cust-mg-lr-': setmarginleftRight,
    'cust-clr-': setcolor,
    'cust-bg-': setbgcolor,
    'cust-t-': settop,
    'cust-r-': setright,
    'cust-b-': setbottom,
    'cust-l-': setleft,
    'cust-vh-': setviewportHeight,
    'cust-vw-': setviewportWidth,
    'cust-z-ind-': setZindex,
    'cust-flx-': flexBox
};

// Function to apply styling based on custom classes
function applyCustomStyles() {
    const elements = document.querySelectorAll('[class*="cust-w-"], [class*="cust-h-"], [class*="cust-br-"], [class*="cust-txt-sz-"] , [class*="cust-pd-t-"] , [class*="cust-pd-r-"], [class*="cust-pd-b-"], [class*="cust-pd-l-"],[class*="cust-pd-tb-"], [class*="cust-pd-lr-"], [class*="cust-mg-t-"], [class*="cust-mg-r-"], [class*="cust-mg-b-"], [class*="cust-mg-l-"],  [class*="cust-mg-tb-"], [class*="cust-mg-lr-"],[class*="cust-clr-"], [class*="cust-bg-"], [class*="cust-t-"], [class*="cust-r-"], [class*="cust-b-"], [class*="cust-l-"], [class*="cust-vh-"], [class*="cust-vw-"], [class*="cust-z-ind-"], [class*="cust-flx-"]');

    elements.forEach(element => {
        const classes = element.className.split(' ');        
        classes.forEach(className => {
            Object.keys(classMap).forEach(prefix => {
                if (className.startsWith(prefix)) {
                    const value = className.replace(prefix, '');
                    classMap[prefix](element, value);
                }
            });
        });

  
    });
}

// Call the function on DOMContentLoaded event
// document.addEventListener('DOMContentLoaded', applyCustomStyles);
applyCustomStyles()
