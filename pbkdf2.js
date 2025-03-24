const forge = require('node-forge')

let salt
let numIterations = 1000000
let password = 'fgdfgdfg'
let keysize = 32

// 동기식 키생성 - 송신자
salt = forge.random.getBytesSync(16)
let derivedKey = forge.pkcs5.pbkdf2(password, salt, numIterations, keysize)
console.log('password : ', password)
console.log('salt : ', forge.util.bytesToHex(salt))
console.log('Iterations : ', numIterations)
console.log('Derived key(송신자) : ', forge.util.bytesToHex(derivedKey))

// 송신자 => 수신자 : salt, numIterations

// 수신자
derivedKey = forge.pkcs5.pbkdf2(password, salt, numIterations, keysize)
console.log('Derived key(수신자) : ', forge.util.bytesToHex(derivedKey))

//비동기식 키생성
forge.pbkdf2(
  password,
  salt,
  numIterations,
  keysize,
  function (err, derivedKey) {
    if (err) console.log(err)
    console.log('Derived key (async): ', forge.util.bytesToHex(derivedKey))
  }
)

forge.pbkdf2(
  password,
  salt,
  numIterations,
  keysize,
  function (err, derivedKey) {
    if (err) console.log(err)
    console.log('Derived key 1 (async): ', forge.util.bytesToHex(derivedKey))
  }
)

forge.pbkdf2(
  password,
  salt,
  numIterations,
  keysize,
  function (err, derivedKey) {
    if (err) console.log(err)
    console.log('Derived key 2 (async): ', forge.util.bytesToHex(derivedKey))
  }
)
forge.pbkdf2(
  password,
  salt,
  numIterations,
  keysize,
  function (err, derivedKey) {
    if (err) console.log(err)
    console.log('Derived key 3 (async): ', forge.util.bytesToHex(derivedKey))
  }
)
forge.pbkdf2(
  password,
  salt,
  numIterations,
  keysize,
  function (err, derivedKey) {
    if (err) console.log(err)
    console.log('Derived key 4 (async): ', forge.util.bytesToHex(derivedKey))
  }
)
forge.pbkdf2(
  password,
  salt,
  numIterations,
  keysize,
  function (err, derivedKey) {
    if (err) console.log(err)
    console.log('Derived key 5 (async): ', forge.util.bytesToHex(derivedKey))
  }
)
