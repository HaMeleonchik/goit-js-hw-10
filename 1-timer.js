import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{f as h,i as p}from"./assets/vendor-BbbuE1sJ.js";const r=document.querySelector("#datetime-picker"),e=document.querySelector("button[data-start]"),y=document.querySelector("[ data-days]"),S=document.querySelector("[ data-hours]"),b=document.querySelector("[ data-minutes]"),w=document.querySelector("[ data-seconds]");e.disabled=!0;let d,c=null;const g={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){d=t[0],new Date>d?(p.show({title:"Error",titleColor:"white",backgroundColor:"red",iconUrl:"./img/error.svg",message:"Please choose a date in the future",messageColor:"white",position:"topRight",close:!1}),e.disabled=!0):e.disabled=!1}};h(r,g);e.addEventListener("click",C);function C(t){t.preventDefault(),e.disabled=!0,r.disabled=!0,c=setInterval(()=>{const o=d-new Date;if(o<=0){clearInterval(c),i({days:"00",hours:"00",minutes:"00",seconds:"00"}),e.disabled=!1,r.disabled=!1;return}const s=D(o);i(s)},1e3)}function i({days:t,hours:n,minutes:o,seconds:s}){y.textContent=` ${t}`,S.textContent=`${n}`,b.textContent=`${o}`,w.textContent=`${s}`}function D(t){const u=a(Math.floor(t/864e5)),l=a(Math.floor(t%864e5/36e5)),m=a(Math.floor(t%864e5%36e5/6e4)),f=a(Math.floor(t%864e5%36e5%6e4/1e3));return{days:u,hours:l,minutes:m,seconds:f}}function a(t){return String(t).padStart(2,"0")}
//# sourceMappingURL=1-timer.js.map
