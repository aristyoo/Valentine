;(function (window) {
    window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame || window.msRequestAnimationFrame
  
    const FRAME_RATE = 60
    const CANVASWIDTH = 1000
    const CANVASHEIGHT = 400
    const CANVASID = 'canvas'
  
    let texts = ['HEI', 'LOOK AT THIS STAR', "IT'S BEAUTIFUL, ISN'T IT?", 'JUST LIKE U', "FINALLY IT'S VALENTINE", "JUST LIKE MY NAME U GAVE", 'SO']
  
    let canvas,
      ctx,
      particles = [],
      quiver = true,
      text = texts[0],
      textIndex = 0,
      textSize = 70

    function draw () {
        ctx.clearRect(0, 0, CANVASWIDTH, CANVASHEIGHT)
        ctx.fillStyle = 'rgb(255, 255, 255)'
        ctx.textBaseline = 'middle'
        ctx.fontWeight = 'bold'
        ctx.font = textSize + 'px \'SimHei\', \'Avenir\', \'Helvetica Neue\', \'Arial\', \'sans-serif\''
        ctx.fillText(text, (CANVASWIDTH - ctx.measureText(text).width) * 0.5, CANVASHEIGHT * 0.5)

    
    ctx.clearRect(0, 0, CANVASWIDTH, CANVASHEIGHT)

    function setDimensions () {
        canvas.width = CANVASWIDTH
        canvas.height = CANVASHEIGHT
        canvas.style.position = 'absolute'
        canvas.style.left = '0%'
        canvas.style.top = '0%'
        canvas.style.bottom = '0%'
        canvas.style.right = '0%'
        canvas.style.marginTop = window.innerHeight * .15 + 'px'
    }

    function event () {
        document.addEventListener('click', function (e) {
          textIndex++
          if (textIndex >= texts.length) {
            textIndex--
            return
          }
          text = texts[textIndex]
          console.log(textIndex)
        }, false)
    
        document.addEventListener('touchstart', function (e) {
          textIndex++
          if (textIndex >= texts.length) {
            textIndex--
            return
          }
          text = texts[textIndex]
          console.log(textIndex)
        }, false)
    }
})(window)
