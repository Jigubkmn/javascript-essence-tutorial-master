let a = 2;

function fn1() {
  // fn1()の外では変数bを参照できない
  let b = 1;
  function fn2() {
    let c = 3;
    console.log(b);
  }
  fn2();
}

fn1();

// グローバルスコープ
// a,fn1

  // 関数スコープ(fn1)
  // b,fn2
    // 関数スコープ(fn2)
    // c