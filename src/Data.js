const slides = [
  {
    title: "CSS | Pure CSS Border Radius Animation by Tobias Bogliolo",
    html: `
    <div class="box">
      <div class="shape"></div>
      <div class="shape"></div>
      <div class="shape"></div>
      <h7>I'm just an irresistible movement! <br> ;)</h7>
    </div>
    
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Quicksand:700&display=swap" rel="stylesheet">
    `,
    css: `@keyframes grad-move {
      0% { background-position: 0 50%}
      50% { background-position: 100% 50%}
      100% { background-position: 0 50%}
    }
    
    @keyframes rad-move {
      0%{ border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
      10%{ border-radius: 53% 47% 33% 67% / 60% 30% 70% 40%; }
      20%{ border-radius: 71% 29% 38% 62% / 72% 48% 52% 28%; }
      30%{ border-radius: 41% 59% 45% 55% / 33% 56% 44% 67%; }
      40%{ border-radius: 55% 45% 67% 33% / 77% 48% 52% 23%; }
      50%{ border-radius: 44% 56% 22% 78% / 31% 74% 26% 69%; }
      60%{ border-radius: 46% 54% 48% 52% / 61% 59% 41% 39%; }
      70%{ border-radius: 44% 56% 60% 40% / 63% 36% 64% 37%; }
      80%{ border-radius: 20% 80% 45% 55% / 31% 79% 21% 69%; }
      90%{ border-radius: 66% 34% 57% 43% / 49% 51% 49% 51%; }
      100%{ border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
    }
    
    h7 {
      position: absolute;
      top: 50%;
      left: 50%;
      -webkit-transform: translate(-50%,-50%);
      -ms-transform: translate(-50%,-50%);
      -o-transform: translate(-50%,-50%);
      transform: translate(-50%,-50%);
      margin: 0;
      font-family: 'Quicksand', sans-serif;
      font-size: 2.25rem;
      line-height: 2.35rem;
      letter-spacing: .05rem;
      color: #FFFFFF;
    }
    
    .box {
      position:absolute;
      height: 380px;
      width: 380px;
      left:50%;
      top: 50%;
      transform: translate(-50%,-50%);
    }
    
    .shape {
      position:absolute;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        to right, 
        #e5517f, 
        #fced78);
      background-size: 1000%;
      background-repeat: no-repeat;
      border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
      opacity: .6;
      box-shadow: 7px 10px 38px 4px rgba(0,0,0,0.2);
      animation: 
        grad-move 60s linear infinite, 
        rad-move 30s linear infinite;
    }
    
    .shape:nth-child(1) {
      transform: rotate(60deg);
      animation-delay: .5s;
    }
    
    .shape:nth-child(2) {
      transform: rotate(120deg);
      animation-delay: 1s;
    }
    `
  },
  {
    title: "CSS RGB Border Animation",
    html: `
  <div className="main-pos">
    <div className="block"></div>
    <div className="block-pos-1 rgb-block"></div>
    <div className="block-pos-2 rgb-block"></div>
  </div>`,
    css: `
    .main-pos {
      position: relative;
      margin: 4rem;
    }

    .block {
      width: 700px;
      height: 150px;
      position: relative;
      background-color: #8442c2;
      z-index: 2;
    }
    
    .rgb-block{
      position: relative;
      background: linear-gradient(45deg, #fb0094, #0000ff, #00ff00,#ffff00, #ff0000, #fb0094, #0000ff, #00ff00,#ffff00, #ff0000);
      background-size: 400%;
      width: 704px;
      height: 154px;
      z-index: 1;
      animation: steam 20s linear infinite;
      
    }
    
    .block-pos-1{
      top:-152px;
      left:-2px;
    }
    
    .block-pos-2 {
      top:-302px;
      left:-2px;
      filter: blur(50px);
    }
    
    @keyframes steam {
      0% {
        background-position: 0 0;
      }
      50% {
        background-position: 400% 0;
      }
      100% {
        background-position: 0 0;
      }
    }
    `
  },
  {
    title: "Thank You!",
    html: "Thank You!",
    css: "Thank You!"
  }
];

export default slides;
