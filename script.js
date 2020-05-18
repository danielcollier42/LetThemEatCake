//This worked in Coding Bat

function eat_cake(str){
    var strLength = str.length;
    if(strLength < 2){
        return 1;
    }

    for(var i = 0; i < strLength; i++){
        var chars = str.substring(0, i + 1);
        var charsLength = chars.length;
        var nextChars = str.substring(i + 1, charsLength + (i + 1));
        // if(chars.length > strLength / 2){
        //     return 1;
        //     break
        // }
        if(chars == nextChars){
            if(strLength % charsLength == 0){
                var block = chars;
                var blockLength = charsLength;
                for(var i = 0; i < (strLength / blockLength) - 1; i++){
                    if(str.substring(i * blockLength, (i + 1) * blockLength) != block){
                        break;
                    }
                }
                console.log(strLength / blockLength);
                return (strLength / blockLength);
                break;
            }
        }
    }
}


//This worked when testing with an html page but not in Coding Bat

// function run(){
//     eat_cake("hello");
// }
//
// function eat_cake(str){
//     var strLength = str.length;
//     if(strLength < 2){
//         return 1;
//             }
//
//     for(var i = 0; i < strLength; i++){
//         var chars = str.substring(0, i + 1);
//         var charsLength = chars.length;
//         var nextChars = str.substring(i + 1, charsLength + (i + 1));
//         if(chars.length > strLength / 2){
//             return 1;
//             break
//         }
//         if(chars == nextChars){
//             if(strLength % charsLength == 0){
//                 check(chars, charsLength, str, strLength);
//                 break;
//             }
//         }
//     }
// }
//
// function check(block, blockLength, str, strLength){
//     for(var i = 0; i < (strLength / blockLength) - 1; i++){
//         if(str.substring(i * blockLength, (i + 1) * blockLength) != block){
//             break;
//         }
//     }
//     console.log(strLength / blockLength);
//     return (strLength / blockLength);
//
// }