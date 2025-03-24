const forge = require('node-forge')

let message1 = 'hash함수 계산을 위한 입력'

console.log('입력 메시지1', message1)

let md = forge.md.md5.create()
md.update(message1)
let result1 = md.digest().toHex()
console.log('MD5 hash : ', result1, result1.length)

let md2 = forge.md.sha1.create()
md.update(message1)
let result2 = md2.digest().toHex()
console.log('SHA1 hash : ', result2, result2.length)

let md3 = forge.md.sha256.create()
md3.update(message1)
let result3 = md3.digest().toHex()
console.log('SHA256 hash : ', result3, result3.length)

let md5 = forge.md.sha512.create()
md3.update(message1)
let result5 = md5.digest().toHex()
console.log('SHA512 hash : ', result5, result5.length)
