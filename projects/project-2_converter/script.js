const foot = document.getElementById("foot");
const meter = document.getElementById("meter");

foot.addEventListener(
  "input",
  function () {
    // console.log('changed');
    const f = this.value;
    // console.log(f)

    // this formula convert # of foot into meters
    const m = f * 0.304;
    //  this expression display the value in meter input
    meter.value = m.toFixed(5);
  },
  false
);

meter.addEventListener(
  "input",
  function () {
    // console.log('changed');
    const m = this.value;
    //    console.log(m)

    const f = m * 3.28;
    foot.value= f.toFixed(5);
  },
  false
);
