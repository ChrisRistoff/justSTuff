let bucket = new Array(20)




function _hash (key) {
  let hash = 0
  key = String(key)

  for (let i = 0; i < key.length; i++) {
    hash = (hash << 5) + key.charCodeAt(i)
    hash = hash & hash
    hash = Math.abs(hash)
  }

  hash = hash % 20
  console.log(hash);

  return hash
}

function has (key) {
  const index = _hash(key)

  if(bucket[index]) return true;
  return false;
}

const key = "newKey"
const val = "newVal"
const key2 = "whatever"
const val2 = "gsdagsadg"

bucket[_hash(key)] = [key, val]
bucket[_hash(key2)] = [key2, val2]

console.log(has("whatever"));
console.log(has("Keynew"));

console.log(bucket);
