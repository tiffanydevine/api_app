function wait(message) {

    setTimeout( function timer(){
        console.log( message );
    }, 10000);

}

wait( "closure" );