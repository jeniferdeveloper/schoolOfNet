console.log('Hello from external script');

var age = prompt('How old are you?');

var ageParse = parseInt(age);

// if (ageParse >= 18) {
//     console.log('You are authorized');
// } else {
//     console.log('You are not authorized');
// }


switch (true) {
    case (ageParse >= 18):
    console.log('You are authorized switch');
    break;

    case (ageParse < 18 ):
    console.log('You are not authorized switch');
    break;

    default:
    console.log('default function')
    break;
}