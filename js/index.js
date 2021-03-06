const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//nav links
let navLinks = document.querySelector("nav");
let count = 0;
navLinks.childNodes.forEach(nav => {
  if(nav.nodeName === '#text'){
    console.log('skipping')
  } else {
    nav.textContent = siteContent["nav"]["nav-item-" + count]
    //stretch task
    nav.style.color = "green";
    count++
  }
})

//stretch task
let newButton = document.createElement('a')
newButton.href = "http://www.google.com"
newButton.textContent = "Google"
newButton.style.color = "green"
navLinks.appendChild(newButton)

let newButton2 = document.createElement('a')
newButton2.href = "http://www.lambdaschool.com"
newButton2.textContent = "Lambda"
newButton2.style.color = "green"
navLinks.appendChild(newButton2)

//cta button
let ctaButton = document.querySelector('.cta-text button');
ctaButton.textContent = siteContent["cta"]['button']

//cta h1
let ctaH1 = document.querySelector('.cta-text h1');
ctaH1.textContent = siteContent["cta"]["h1"]

//cta img
let ctaImg = document.querySelector('#cta-img');
ctaImg.src = siteContent["cta"]["img-src"]

//main content

count = 0;
let topContent = document.querySelector('.main-content'); //didnt like select every element on page seperately. 
let mainContentArray = [...Object.values(siteContent["main-content"])]

function topContentReplace(index, index2){
  topContent.children[index].children[index2].childNodes.forEach(element => {
    if(element.nodeName === '#text'){
      console.log('skipping')
    } else {
      element.textContent = mainContentArray[count]
      count++
    }
  })
}

//top content
topContentReplace(0,0)
topContentReplace(0,1)

//middle image
count++
let middleImg = document.querySelector('#middle-img');
middleImg.src = siteContent["main-content"]["middle-img-src"]

//bottom content
topContentReplace(2,0)
topContentReplace(2,1)
topContentReplace(2,2)

//contact
count = 0;
let contactSection = document.querySelector('.contact')
let contactArray = [...Object.values(siteContent["contact"])]
contactSection.childNodes.forEach(element => {
  if(element.nodeName === '#text'){
    console.log('skipping')
  } else {
    element.textContent = contactArray[count]
    count++
  }
})
