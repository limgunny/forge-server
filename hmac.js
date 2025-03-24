const forge = require('node-forge')

//송신자

let key = 'secretkey'
let message = '비밀메시지'
console.log('송신자 메시지: ', message)
console.log('송신자 키 : ', key)

let hmac1 = forge.hmac.create()
hmac1.start('sha1', key)
hmac1.update(message)
result1 = hmac1.digest().toHex()
console.log('송신자 HMAC-SHA1: ', result1)

//공격자 : 변조, 도청

//수신자
let message2 = message //+'1'이라는 변조값을 받게되면 에러
let key2 = key //+'1'이라는 변조값을 받게되면 에러
let hmac2 = forge.hmac.create()
hmac2.start('sha1', key2)
hmac2.update(message2)
result2 = hmac2.digest().toHex()
console.log('수신자 HMAC-SHA1: ', result2)

if (result1 === result2) console.log('메시지 검증 성공')
else console.log('메시지 에러')
