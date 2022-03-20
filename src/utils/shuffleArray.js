export default function shuffleArray(arr) {
  // Fisher-yates Shuffle JS implementation
  let index = arr.length,
    randIndex;

  while (index !== 0) {
    randIndex = Math.floor(Math.random() * index);
    index--;

    [arr[index], arr[randIndex]] = [arr[randIndex], arr[index]];
  }
  return arr.splice(0, 8);
}
