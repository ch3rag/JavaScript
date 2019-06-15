// Prior to the introduction of TypedArray, the JavaScript language had no mechanism for reading or
// manipulating streams of binary data. The Buffer class was introduced as part of the Node.js API
// to enable interaction with octet streams in TCP streams, file system operations, and other contexts.

// With TypedArray now available, the Buffer class implements the Uint8Array API in a manner 
// that is more optimized and suitable for Node.js.

// Buffer.alloc(numBytes); // (Similar to Calloc)
// Buffer.alloc(numBytes, String | number | buffer | encoding);
// 10 bytes set to 0 
const zeroFilledBuffer = Buffer.alloc(10);

// 10 bytes set to 1
const oneFilledBuffer = Buffer.alloc(10, 1);

// Create an uninitialized buffer 
// Faster than alloc()
// But may contain the old data
const uninitializedBuffer = Buffer.allocUnsafe(10);

// Create buffer from array containing [0x1, 0x2, 0x3]
const bufferFromArray = Buffer.from([1, 2, 3, 4]);

// Create buffer froma ascii string // [116, 101, 115, 116]
const bufferFromString = Buffer.from("test", "ascii");

// Supported Character Encodings

// ascii            For 7-bit ASCII data only. This encoding is fast and will strip the high bit if set.
// utf8             Multibyte encoded Unicode characters. Many web pages and other document formats use UTF-8.
// utf16le          2 or 4 bytes, little-endian encoded Unicode characters. 
// ucs2             Alias of 'utf16le'.
// base64           Base64 encoding.
// latin1           A way of encoding the Buffer into a one-byte encoded string 
// hex              Encode each byte as two hexadecimal characters.
// binary           Alias for 'latin1'.

// Creating TypedArray from Buffer

const arr = new Uint8Array(Buffer.from([1, 2, 3, 4]));
// The Buffer object's memory is copied to the TypedArray, not shared.

// Buffer instances are also Uint8Array instances. However, there are subtle incompatibilities 
// with TypedArray. For example, while ArrayBuffer.slice() creates a copy of the slice, the 
// implementation of Buffer.slice() creates a view over the existing Buffer without copying,
// making Buffer.slice() far more efficient.

let copy = arr.slice(1, 3);
copy[0] = 99;
console.log(arr);                   // [1, 2, 3, 4]

copy = (bufferFromArray.slice(1, 3));
copy[0] = 99; 
console.log(bufferFromArray);        // [1, 99, 3, 4]

// Sharing Memory Between a TypedArray & Buffer
const shared = Buffer.from(arr.buffer);
shared[1] = 123;
console.log(arr);

// Sharing Only Portion Of Memory
// shared = Buffer.from(arr, byteOffset, length)

// Properties 

// bytelength               length of the complete buffer in bytes

// Buffer.compare(b1, [b1Start], [b1End], b2, [b2Start], [b2End])   comparator for the purpose of sorting

let myArray = [Buffer.from("hello"), Buffer.from("abc"), Buffer.from("123"), Buffer.from("xyz")];
myArray.sort(Buffer.compare);
// myArray.forEach(x =>  console.log(x.toString("ascii")));

// Buffer.concat(arrayOfBuffers[, totalLength])
const buffer1 = Buffer.from([1, 2, 3, 4]);
const buffer2 = Buffer.from([5, 6, 7, 8]);

let totalLength = buffer1.length + buffer2.length;

const combined = Buffer.concat([buffer1, buffer2], totalLength);        // CREATE A NEW COPY
console.log(combined);

// Buffer.isBuffer(obj)             Checks if an object is a Buffer
// Buffer.isEncoding(encoding)      Checks if Buffer supports passed encoding

console.log(Buffer.isEncoding("ascii"));

// buf[index]                       Get or Set Byte At specified index

// buf.buffer                       Underlying ArrayBuffer Object from which the buffer is created

// Buffer.poolSize                  Size (in bytes) of pre-allocated internal Buffer instances
// buf.byteOffset                   The byteOffset on the underlying ArrayBuffer object based on which this Buffer object is created.

// buf.copy(target[, targetStart[, sourceStart[, sourceEnd]]])
// Copies data from a region of buf to a region in target even if the target memory region overlaps with buf.

// buf.entries()                    Creates and returns an iterator of [index, byte] pairs from the contents of buf.
// buf.keys()

for(const [index, byte] of shared.entries()) {
    console.log(index + " => " + byte);
}

// buf.equals(otherBuffer)          Compares two buffers
// buf.fill(value, [startIndex], [endIndex], [encoding])
// buf.includes(value, [startIndex], [encoding])
// buf.indexOf(value, [startIndex], [encoding])
// buf.lastIndexOf(value, [startIndex], [encoding])

// Buffer() Constructor
// Passing a number as the first argument to Buffer() (e.g. new Buffer(10)) allocates a new Buffer 
// object of the specified size.
// The memory allocated for such Buffer instances is not initialized and can contain sensitive data.
// Such Buffer instances must be subsequently initialized by using either buf.fill(0) or by writing
// to the entire Buffer
// Starting in Node.js 8.0.0, Buffer(num) and new Buffer(num) will return a Buffer with initialized memory.

// Passing a string, array, or Buffer as the first argument copies the passed object's data into the Buffer.
// Passing an ArrayBuffer or a SharedArrayBuffer returns a Buffer that shares allocated memory with the given array buffer.

// To make the creation of Buffer instances more reliable and less error-prone, the various forms of the new Buffer()
// constructor have been deprecated and replaced by separate Buffer.from(), Buffer.alloc(), and Buffer.allocUnsafe().