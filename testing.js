arr = []

arr[100] = 1


const typedArr = new BigInt64Array(2)




function encode (str) {
  let num = BigInt(0)

  for (let i = 0, len = str.length; i < len; i++) {
    num = num * BigInt(128) + BigInt(str.charCodeAt(i));
  }

  return num;
}

function decode (num) {
  let str = ""

  while (num > BigInt(0)) {
    str = String.fromCharCode(Number(num % BigInt(128))) + str
    num /= BigInt(128) // We can use division with BigInt without any problems
  }

  return str;
}



const str = "hello"
const str2 = "world"

typedArr[0] = encode(str)
typedArr[1] = encode(str2)
