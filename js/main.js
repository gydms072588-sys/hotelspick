// Replace only the image value to apply the final hero artwork later.
const heroSlides=[
  {id:'hero-slide-01',label:'임시 배너 이미지 01',image:''},
  {id:'hero-slide-02',label:'임시 배너 이미지 02',image:''},
  {id:'hero-slide-03',label:'임시 배너 이미지 03',image:''}
];
const heroTrack=document.querySelector('#hero-track');
const heroDots=document.querySelector('#hero-dots');
let heroIndex=0;
let heroTimer;

heroTrack.innerHTML=heroSlides.map((slide,index)=>`<div class="hero-slide" id="${slide.id}" role="group" aria-label="${index+1} / ${heroSlides.length}"${slide.image?` style="background-image:url('${slide.image}')"`:''}><span class="hero-slide__label">${slide.label}</span></div>`).join('');
heroDots.innerHTML=heroSlides.map((_,index)=>`<button type="button" class="${index===0?'active':''}" aria-label="${index+1}번 배너 보기" aria-current="${index===0?'true':'false'}" data-hero-index="${index}"></button>`).join('');

function showHeroSlide(index){
  heroIndex=(index+heroSlides.length)%heroSlides.length;
  heroTrack.style.transform=`translateX(${-heroIndex*100}%)`;
  heroDots.querySelectorAll('button').forEach((dot,dotIndex)=>{
    const isActive=dotIndex===heroIndex;
    dot.classList.toggle('active',isActive);
    dot.setAttribute('aria-current',String(isActive));
  });
}
function stopHeroAutoplay(){window.clearInterval(heroTimer)}
function startHeroAutoplay(){
  stopHeroAutoplay();
  if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    heroTimer=window.setInterval(()=>showHeroSlide(heroIndex+1),4500);
  }
}
document.querySelector('.hero-arrow.prev').addEventListener('click',()=>{showHeroSlide(heroIndex-1);startHeroAutoplay()});
document.querySelector('.hero-arrow.next').addEventListener('click',()=>{showHeroSlide(heroIndex+1);startHeroAutoplay()});
heroDots.addEventListener('click',event=>{
  const dot=event.target.closest('[data-hero-index]');
  if(dot){showHeroSlide(Number(dot.dataset.heroIndex));startHeroAutoplay()}
});
document.querySelector('.hero').addEventListener('mouseenter',stopHeroAutoplay);
document.querySelector('.hero').addEventListener('mouseleave',startHeroAutoplay);
document.addEventListener('visibilitychange',()=>document.hidden?stopHeroAutoplay():startHeroAutoplay());
startHeroAutoplay();

const images={seoul:'assets/images/seoul-hotel.png',busan:'assets/images/busan-hotel.png',jeju:'assets/images/jeju-resort.png',resort:'assets/images/hero-resort.png'};
const dealHotels=Array.from({length:6},(_,index)=>({id:`deal-hotel-${index+1}`,area:'지역명',name:'호텔이름',discount:'50%',oldPrice:'500000',price:'250000',image:''}));
const promotionSlideData={
  jeju:Array.from({length:4},(_,index)=>({image:'',label:`제주 프로모션 이미지 ${String(index+1).padStart(2,'0')}`})),
  busan:Array.from({length:4},(_,index)=>({image:'',label:`부산 프로모션 이미지 ${String(index+1).padStart(2,'0')}`})),
  gangneung:Array.from({length:4},(_,index)=>({image:'',label:`강릉 프로모션 이미지 ${String(index+1).padStart(2,'0')}`})),
  tokyo:Array.from({length:4},(_,index)=>({image:'',label:`도쿄 프로모션 이미지 ${String(index+1).padStart(2,'0')}`})),
  osaka:Array.from({length:4},(_,index)=>({image:'',label:`오사카 프로모션 이미지 ${String(index+1).padStart(2,'0')}`})),
  bangkok:Array.from({length:4},(_,index)=>({image:'',label:`방콕 프로모션 이미지 ${String(index+1).padStart(2,'0')}`}))
};
const domesticData=[
  {id:'jeju',name:'제주',hotelCount:'3,245 호텔',thumbnail:'',promotionKey:'jeju'},
  {id:'busan',name:'부산',hotelCount:'2,180 호텔',thumbnail:'',promotionKey:'busan'},
  {id:'gangneung',name:'강릉',hotelCount:'1,540 호텔',thumbnail:'',promotionKey:'gangneung'}
];
const globalData=[
  {id:'tokyo',name:'도쿄',hotelCount:'2,980 호텔',thumbnail:'',promotionKey:'tokyo'},
  {id:'osaka',name:'오사카',hotelCount:'2,110 호텔',thumbnail:'',promotionKey:'osaka'},
  {id:'bangkok',name:'방콕',hotelCount:'3,420 호텔',thumbnail:'',promotionKey:'bangkok'}
];
const createRatedHotels=prefix=>Array.from({length:8},(_,index)=>({id:`${prefix}-${index+1}`,name:'호텔이름',image:'',rating:'4.5',price:'20000000 원 ~',favorite:false}));
const ratedData={
  domestic:{
    categories:[{key:'all',label:'전체'},{key:'seoulGyeonggi',label:'서울 경기'},{key:'busanGyeongnam',label:'부산 경남'},{key:'jeju',label:'제주'},{key:'gangwon',label:'강원'}],
    hotels:{all:createRatedHotels('domestic-all'),seoulGyeonggi:createRatedHotels('domestic-seoul'),busanGyeongnam:createRatedHotels('domestic-busan'),jeju:createRatedHotels('domestic-jeju'),gangwon:createRatedHotels('domestic-gangwon')}
  },
  overseas:{
    categories:[{key:'all',label:'전체'},{key:'japan',label:'일본'},{key:'southeastAsia',label:'동남아'},{key:'europe',label:'유럽'},{key:'america',label:'미주'}],
    hotels:{all:createRatedHotels('overseas-all'),japan:createRatedHotels('overseas-japan'),southeastAsia:createRatedHotels('overseas-southeast-asia'),europe:createRatedHotels('overseas-europe'),america:createRatedHotels('overseas-america')}
  }
};
const dealTrack=document.querySelector('#deal-track');
dealTrack.innerHTML=dealHotels.map(hotel=>`<article class="deal-card" data-hotel-id="${hotel.id}"><div class="deal-card__image"${hotel.image?` style="background-image:url('${hotel.image}')"`:''}><button class="deal-card__favorite" type="button" aria-label="${hotel.name} 찜하기"><svg aria-hidden="true" viewBox="0 0 24 24"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z"></path></svg></button></div><div class="deal-card__body"><p class="deal-card__area">${hotel.area}</p><h3>${hotel.name}</h3><p class="deal-card__prices"><span class="deal-card__discount">${hotel.discount}</span><span class="deal-card__price-stack"><span class="deal-card__old">${hotel.oldPrice}</span><strong class="deal-card__price">${hotel.price}</strong></span></p></div></article>`).join('');
let dealIndex=0;
function updateDeals(){
  const visibleCards=3;
  const maxIndex=Math.max(0,dealHotels.length-visibleCards);
  if(dealIndex<0)dealIndex=maxIndex;
  if(dealIndex>maxIndex)dealIndex=0;
  const card=dealTrack.querySelector('.deal-card');
  const gap=parseFloat(getComputedStyle(dealTrack).columnGap)||0;
  const distance=card?card.offsetWidth+gap:0;
  dealTrack.style.transform=`translateX(${-dealIndex*distance}px)`;
}
document.querySelector('.carousel-prev').addEventListener('click',()=>{dealIndex-=1;updateDeals()});
document.querySelector('.carousel-next').addEventListener('click',()=>{dealIndex+=1;updateDeals()});
window.addEventListener('resize',updateDeals);
const destinationList=document.querySelector('#destination-list');
const destinationFeature=document.querySelector('#destination-feature');
const destinationPromoLabel=document.querySelector('#destination-promo-label');
const destinationDots=document.querySelector('#destination-dots');
const destinationTabs=document.querySelectorAll('[data-destination-category]');
let activeDestinationData=domesticData;
let activeDestinationId='';
let activePromotionSlides=[];
let promotionIndex=0;
let promotionTimer;

function showPromotionSlide(index){
  if(!activePromotionSlides.length)return;
  promotionIndex=(index+activePromotionSlides.length)%activePromotionSlides.length;
  const slide=activePromotionSlides[promotionIndex];
  destinationFeature.style.backgroundImage=slide.image?`url('${slide.image}')`:'';
  destinationPromoLabel.textContent=slide.label;
  destinationDots.querySelectorAll('button').forEach((dot,dotIndex)=>{
    const isActive=dotIndex===promotionIndex;
    dot.classList.toggle('active',isActive);
    dot.setAttribute('aria-current',String(isActive));
  });
}
function stopPromotionAutoplay(){window.clearInterval(promotionTimer)}
function startPromotionAutoplay(){
  stopPromotionAutoplay();
  if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    promotionTimer=window.setInterval(()=>showPromotionSlide(promotionIndex+1),4500);
  }
}
function selectDestination(index){
  const destination=activeDestinationData[index];
  if(!destination)return;
  document.querySelectorAll('.destination-item').forEach((item,itemIndex)=>item.classList.toggle('active',itemIndex===index));
  if(destination.id===activeDestinationId)return;
  activeDestinationId=destination.id;
  activePromotionSlides=promotionSlideData[destination.promotionKey];
  destinationDots.innerHTML=activePromotionSlides.map((_,dotIndex)=>`<button type="button" class="${dotIndex===0?'active':''}" aria-label="${destination.name} 프로모션 ${dotIndex+1} 보기" aria-current="${dotIndex===0?'true':'false'}" data-promotion-index="${dotIndex}"></button>`).join('');
  showPromotionSlide(0);
  startPromotionAutoplay();
}
function renderDestinations(category){
  activeDestinationData=category==='global'?globalData:domesticData;
  activeDestinationId='';
  destinationList.innerHTML=activeDestinationData.map((destination,index)=>`<button class="destination-item${index===0?' active':''}" type="button" data-destination-index="${index}"><span class="destination-thumb"${destination.thumbnail?` style="background-image:url('${destination.thumbnail}')"`:''}></span><span class="destination-item__copy"><strong>${destination.name}</strong><small>${destination.hotelCount}</small></span></button>`).join('');
  selectDestination(0);
}
function handleDestinationChange(event){
  const item=event.target.closest('[data-destination-index]');
  if(item)selectDestination(Number(item.dataset.destinationIndex));
}
destinationList.addEventListener('mouseover',handleDestinationChange);
destinationList.addEventListener('focusin',handleDestinationChange);
destinationList.addEventListener('click',handleDestinationChange);
destinationDots.addEventListener('click',event=>{
  const dot=event.target.closest('[data-promotion-index]');
  if(dot){showPromotionSlide(Number(dot.dataset.promotionIndex));startPromotionAutoplay()}
});
destinationFeature.addEventListener('mouseenter',stopPromotionAutoplay);
destinationFeature.addEventListener('mouseleave',startPromotionAutoplay);
destinationTabs.forEach(tab=>tab.addEventListener('click',()=>{
  destinationTabs.forEach(item=>{
    const isActive=item===tab;
    item.classList.toggle('active',isActive);
    item.setAttribute('aria-selected',String(isActive));
  });
  renderDestinations(tab.dataset.destinationCategory);
}));
renderDestinations('domestic');
const ratedGrid=document.querySelector('#rated-grid');
const ratedCategories=document.querySelector('#rated-categories');
const ratedTabs=document.querySelectorAll('[data-rated-scope]');
let activeRatedScope='domestic';
let activeRatedCategory='all';
function renderRatedHotels(){
  ratedGrid.innerHTML=ratedData[activeRatedScope].hotels[activeRatedCategory].map(hotel=>`<article class="hotel-card" data-hotel-id="${hotel.id}"><div class="hotel-card__image"${hotel.image?` style="background-image:url('${hotel.image}')"`:''}><button class="hotel-card__favorite${hotel.favorite?' active':''}" type="button" aria-label="${hotel.name} 찜하기" aria-pressed="${hotel.favorite}"><svg aria-hidden="true" viewBox="0 0 24 24"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z"></path></svg></button></div><div class="hotel-card__body"><div class="hotel-card__meta"><h3>${hotel.name}</h3><span class="hotel-card__rating"><svg aria-hidden="true" viewBox="0 0 24 24"><path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2-4.5-4.4 6.2-.9Z"></path></svg>${hotel.rating}</span></div><p class="hotel-card__price">${hotel.price}</p></div></article>`).join('');
}
function renderRatedCategories(){
  activeRatedCategory='all';
  ratedCategories.innerHTML=ratedData[activeRatedScope].categories.map((category,index)=>`<button class="rated-category${index===0?' active':''}" type="button" data-rated-category="${category.key}" aria-pressed="${index===0}">${category.label}</button>`).join('');
  renderRatedHotels();
}
ratedTabs.forEach(tab=>tab.addEventListener('click',()=>{
  ratedTabs.forEach(item=>{item.classList.remove('active');item.setAttribute('aria-selected','false')});
  tab.classList.add('active');tab.setAttribute('aria-selected','true');activeRatedScope=tab.dataset.ratedScope;renderRatedCategories();
}));
ratedCategories.addEventListener('click',event=>{
  const button=event.target.closest('[data-rated-category]');if(!button)return;
  ratedCategories.querySelectorAll('[data-rated-category]').forEach(item=>{item.classList.remove('active');item.setAttribute('aria-pressed','false')});
  button.classList.add('active');button.setAttribute('aria-pressed','true');activeRatedCategory=button.dataset.ratedCategory;renderRatedHotels();
});
renderRatedCategories();
const siteHeader=document.querySelector('.site-header');
const heroSection=document.querySelector('.hero');
let fixedHeaderFrame=0;
const headerObserver=new IntersectionObserver(([entry])=>{
  cancelAnimationFrame(fixedHeaderFrame);
  if(entry.isIntersecting){
    siteHeader.classList.remove('is-visible','is-fixed');
    document.body.classList.remove('has-fixed-header');
    return;
  }
  siteHeader.classList.add('is-fixed');
  document.body.classList.add('has-fixed-header');
  fixedHeaderFrame=requestAnimationFrame(()=>siteHeader.classList.add('is-visible'));
},{threshold:0});
headerObserver.observe(heroSection);
const floatingMenu=document.querySelector('.floating-menu');
const dealSection=document.querySelector('#deals');
let isDealReached=false;
const updateFloatingMenu=()=>floatingMenu.classList.toggle('is-visible',isDealReached&&window.scrollY>0);
const floatingMenuObserver=new IntersectionObserver(([entry])=>{
  isDealReached=entry.isIntersecting||entry.boundingClientRect.top<0;
  updateFloatingMenu();
},{rootMargin:'0px 0px -35% 0px',threshold:0});
floatingMenuObserver.observe(dealSection);
window.addEventListener('scroll',updateFloatingMenu,{passive:true});
const topButton=document.querySelector('.top-button');
const partnerSection=document.querySelector('#partner');
const topButtonObserver=new IntersectionObserver(([entry])=>{
  topButton.classList.toggle('is-visible',entry.isIntersecting||entry.boundingClientRect.top<0);
},{threshold:0});
topButtonObserver.observe(partnerSection);
topButton.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));document.querySelector('#hotel-search-form').addEventListener('submit',event=>event.preventDefault());
