// :: [String] -> ResultMap Any -> Nullable Any
const step = path => t =>
  path.length > 1
  ? step (path.slice(1)) (t[path[0]][0])
  : t[path[0]] && t[path[0]].length
    ? t[path[0]][0]
    : null;

module.exports = { step };
