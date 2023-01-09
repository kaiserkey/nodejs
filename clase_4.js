'use strict'

//trabajado con buffers node
const buf1 = Buffer.alloc(100),
        buf2 = Buffer.alloc(26),
        str = '\u00bd + \u00bc = \u00be';

console.log(buf1,
            buf1.toString('ascii'),
            str,
            str.length + ' caracteres',
            Buffer.byteLength(str, 'utf8') + ' Bytes');

for (let i = 0; i < buf2.length; i++) {
    buf2[i] = i+97;
}

console.log(buf2.toString('ascii'));
