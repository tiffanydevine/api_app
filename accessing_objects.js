var library = [ 
   {
       author: 'Bill Gates',
       title: 'The Road Ahead',
       readingStatus: true
   },
   {
       author: 'Steve Jobs',
       title: 'Walter Isaacson',
       readingStatus: true
   },
   {
       author: 'Suzanne Collins',
       title:  'Mockingjay: The Final Book of The Hunger Games', 
       readingStatus: false
   }];
   
function booksRead() {
    // console.log(library.length); 
    var booksFinished = []; 
    var booksNeedToFinish = []; 
    for (var i = 0; i < library.length; i++) {
        // console.log('hello')
        if (library[i].readingStatus === true) {
            booksFinished.push(library[i].title)
        } else {
            booksNeedToFinish.push(library[i].title)
        }
    } 
    console.log("Books read: " + booksFinished); 
    console.log("Books not read: " + booksNeedToFinish)
}

booksRead(); 