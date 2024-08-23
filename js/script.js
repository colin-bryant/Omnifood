// const h1 = document.querySelector('.heading-primary')

// console.log(h1)

// const myName = 'Jonas Schmedtmann'

// h1.addEventListener('click', function () {
//   h1.textContent = myName
//   h1.style.backgroundColor = 'red'
//   h1.style.padding = '5rem'
// })

// Set current year
const year = document.querySelector('.year')
const currentYear = new Date().getFullYear()
year.textContent = currentYear

// Make mobile navigation work
const btnNavEl = document.querySelector('.btn-mobile-nav')
const headerEl = document.querySelector('.header')
btnNavEl.addEventListener('click', function () {
  headerEl.classList.toggle('nav-open')
})
//  scroll-behavior: smooth 兼容性问题
// Smooth scrolling animation
const allLinks = document.querySelectorAll('a:link')
allLinks.forEach(function (link) {
  // console.log(link);
  // scroll, scrollTo, 和 scrollIntoView 在旧版safari浏览器不兼容 所以要引入smoothscroll-polyfill的库
  link.addEventListener('click', function (e) {
    e.preventDefault()
    const href = link.getAttribute('href')
    // console.log(href)

    // Scroll back to top
    if (href === '#')
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    // scroll to other links
    if (href !== '#' && href.startsWith('#')) {
      // 拿到当前点击的按钮元素
      const sectionEl = document.querySelector(href)
      sectionEl.scrollIntoView({ behavior: 'smooth' })
    }
    // Close mobile navigation
    if (link.classList.contains('main-nav-link')) {
      headerEl.classList.toggle('nav-open')
    }
  })
})
/* Sticky navigation */
const sectionHeroEL =document.querySelector('.section-hero')
const obs = new IntersectionObserver(function(entries){
  const ent =entries[0];
  // console.log(ent);
  //!ent.isIntersecting  如果这个isIntersecting===false 是true是对的话
  if (ent.isIntersecting===false){
    document.body.classList.add('sticky')
  }else{
    document.body.classList.remove('sticky')
  }  
},{
  // In the viewport
  root:null,
  // 目标元素不可见的时候触发回调函数
  threshold:0,
  //控制目标元素需要多接近视口（或根元素）才能触发回调
  //就是说目标元素不可见之前相差80px 就提前触发回调 和.stick .header的高度一致
  rootMargin:'-80px'
});
obs.observe(sectionHeroEL);
///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement('div')
  flex.style.display = 'flex'
  flex.style.flexDirection = 'column'
  flex.style.rowGap = '1px'

  flex.appendChild(document.createElement('div'))
  flex.appendChild(document.createElement('div'))

  document.body.appendChild(flex)
  // 获取元素内容的总高度
  var isSupported = flex.scrollHeight === 1
  flex.parentNode.removeChild(flex)
  console.log(isSupported)

  if (!isSupported) document.body.classList.add('no-flexbox-gap')
}
checkFlexGap()

// 这是一个 JavaScript 函数，用于检测浏览器是否支持 flexbox 的 row-gap 和 column-gap 属性。该函数创建了一个 div 元素，并将其样式设置为 flex 布局，然后将两个 div 元素添加到该元素中。接着，将该元素添加到文档中，并检查其 scrollHeight 是否为 1。如果 scrollHeight 为 1，则表示浏览器支持 flexbox 的 row-gap 和 column-gap 属性，否则将在文档的 body 元素上添加一个类名为
// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

/*
.no-flexbox-gap .main-nav-list li:not(:last-child) {
  margin-right: 4.8rem;
}

.no-flexbox-gap .list-item:not(:last-child) {
  margin-bottom: 1.6rem;
}

.no-flexbox-gap .list-icon:not(:last-child) {
  margin-right: 1.6rem;
}

.no-flexbox-gap .delivered-faces {
  margin-right: 1.6rem;
}

.no-flexbox-gap .meal-attribute:not(:last-child) {
  margin-bottom: 2rem;
}

.no-flexbox-gap .meal-icon {
  margin-right: 1.6rem;
}

.no-flexbox-gap .footer-row div:not(:last-child) {
  margin-right: 6.4rem;
}

.no-flexbox-gap .social-links li:not(:last-child) {
  margin-right: 2.4rem;
}

.no-flexbox-gap .footer-nav li:not(:last-child) {
  margin-bottom: 2.4rem;
}

@media (max-width: 75em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 3.2rem;
  }
}

@media (max-width: 59em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 0;
    margin-bottom: 4.8rem;
  }
}
*/
console.log(window.devicePixelRatio); // 通常会输出 2 或 3
