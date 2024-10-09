export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const int8Array = new Uint8Array(buffer);
  if (position > int8Array.length) throw new Error('Position outside range');
  int8Array[position] = value;
  return new DataView(buffer);
}
