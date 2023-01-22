export function queryTransform(path) {
  let idx;
  for (let i = 0; i < path.length; i++) {
    const element = path[i];
    if (element === "=") {
      idx = i
      break;
    }
  }
  let finalPath = path.slice(idx+1)
  return finalPath
}