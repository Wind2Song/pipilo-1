const string = `
  .skin * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  .skin *::before,
  .skin *::after {
    box-sizing: border-box;
  }
  .skin {
    min-height: 55vh;
    background: #ffe600;
  }
  .skin {
    position: relative;
  }
  
  .nose {
    width: 0px;
    height: 0px;
    border-style: solid;
    border-radius: 12px;
    border-width: 12px;
    border-color: black transparent transparent;
    position: absolute;
    left: 50%;
    top: 65px;
    margin-left: -12px;
    z-index: 10;
  }
  
  .eye {
    border: 3px solid black;
    width: 64px;
    height: 64px;
    position: absolute;
    left: 50%;
    top: 25px;
    margin-left: -32px;
    background: #2e2e2e; /*取色工具snipaste*/
  }
  .eye::before {
    content: "";
    display: block;
    border: 3px solid black;
    background: #fff;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    position: absolute;
    left: 9px;
    top: -2px;
  }
  .eye.left {
    transform: translateX(-140px);
    border-radius: 50%;
  }
  .eye.right {
    transform: translateX(140px);
    border-radius: 50%;
  }
  
  .mouth {
    width: 200px;
    height: 200px;
    position: absolute;
    left: 50%;
    margin-left: -100px;
    top: 95px;
  }
  
  .mouth > .up > .lip {
    border: 3px solid black;
    border-top: transparent;
    height: 30px;
    width: 100px;
    position: absolute;
    background: #ffe600;
    z-index: 3;
  }
  .mouth > .up > .lip.left {
    border-bottom-left-radius: 40px 25px;
    border-right: transparent;
    transform: rotate(-20deg);
  }
  .mouth > .up > .lip.right {
    border-bottom-right-radius: 40px 25px;
    border-left: transparent;
    transform: translateX(100px) rotate(20deg);
  }
  .mouth > .up > .lip::before {
    content: "";
    /* border: 1px solid black; */
    display: block;
    width: 10px;
    height: 10px;
    background: #ffe600;
    position: absolute;
  }
  .mouth > .up > .lip.left::before {
    transform: rotate(20deg) translateX(90px) translateY(-15px);
  }
  .mouth > .up > .lip.right::before {
    transform: rotate(-20deg) translateX(-9px) translateY(15px);
  }
  
  .mouth > .down {
    position: absolute;
    top: 11px;
    width: 200px;
    height: 280px;
    overflow: hidden;
  }
  .mouth > .down > .yuan1 {
    border: 3px solid black;
    height: 200px;
    width: 160px;
    position: absolute;
    left: 50%;
    margin-left: -80px;
    top: -20px;
    /* border-radius: 50% 50% 50% 50%; */
    border-bottom-left-radius: 90px 200px;
    border-bottom-right-radius: 90px 200px;
    background: #9b000a;
    overflow: hidden;
  }
  .mouth > .down > .yuan1 > .yuan2 {
    /* border: 3px solid red; */
    height: 320px;
    width: 240px;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -120px;
    border-radius: 50%;
    transform: translateY(170px);
    background: #ff485f;
  }
  
  .face {
    border: 3px solid black;
    width: 88px;
    height: 88px;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    margin-left: -44px;
    top: 165px;
    background: rgb(224, 24, 24);
    /* background: red; */
    z-index: 5;
  }
  .face.left {
    transform: translateX(-200px);
  }
  .face.right {
    transform: translateX(200px);
  }
`
export default string;