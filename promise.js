// promises ( pending, resolve, and rejected)...

let promise = new Promise((resolve, reject) => {
    const word = 'match';
    word === 'match' ? resolve() : reject()
})

promise
.then(() => {
    console.log('promise is resolve');
})
.catch(() => {
    console.log('promise is rejected');
})
// promise is resolve


/*maapply po natin sya sa mga scenario kung san magloload tayo ng data from data base or magfefetch ng api kasi 
talagang magtatake po ng time iyon. For example sabihin naten na may button ka para iload ang list ng mga students
 sa system mo, pwede ka po gumawa ng function na  magdidisplay ng modal na "Loading" and after  nyan pwede ka magreturn
 ng promise sa function rin na yan na madedelay for 3 seconds and after non pag na resolve yung promise na yan pwede nating 
 tanggalin yung loading na modal and idisplay na lahat ng nasa list. */