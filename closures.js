var fn;

function foo() {
// returns the actual value but also the context. 

    var a = 2;

    function baz() {
        console.log( a );
    }

    fn = baz;
}

function bar() {
    fn();
}

foo();

bar();