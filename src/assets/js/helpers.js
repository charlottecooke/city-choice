
/**
 * Smooth scroll animation
 * @param {int} endX: destination x coordinate
 * @param {int) endY: destination y coordinate
    * @param {int} duration: animation duration in ms
    */
   export function smoothScrollTo(endX, endY, duration) {
     const startX = window.scrollX || window.pageXOffset
     const startY = window.scrollY || window.pageYOffset
     const distanceX = endX - startX
     const distanceY = endY - startY
     const startTime = new Date().getTime()

     duration = typeof duration !== 'undefined' ? duration : 400

     // Easing function
     const easeInOutQuart = function (time, from, distance, duration) {
       if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from
       return -distance / 2 * ((time -= 2) * time * time * time - 2) + from
     }

     const timer = window.setInterval(function () {
       const time = new Date().getTime() - startTime
       const newX = easeInOutQuart(time, startX, distanceX, duration)
       const newY = easeInOutQuart(time, startY, distanceY, duration)
       if (time >= duration) {
         window.clearInterval(timer)
       }
       window.scrollTo(newX, newY)
     }, 1000 / 60) // 60 fps
}


// Smooth scroll animation to an element by ID
export function smoothScrollToElement(el, duration) {
    duration = typeof duration !== 'undefined' ? duration : 500
    el = typeof el === 'string' ? document.querySelector(el) : el

    if (el) {
      smoothScrollTo(el.offsetLeft, el.offsetTop, duration)
    }
  }
