a();

function a() {
  let c = 1;

  console.log(c);
  d();
  function d() {
    console.log('d in called')
  }
  console.log('a is called')
}

const b = 0;
console.log(b);
