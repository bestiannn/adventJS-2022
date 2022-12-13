function getFilesToBackup(lastBackup, changes) {
  let filesToBackup = [];
  for (const change of changes) {
    if (change[1] > lastBackup) {
      filesToBackup.push(change[0]);
    }
  }
  return [...new Set(filesToBackup.sort((a, b) => a - b))];
}

const lastBackup = 1546300800;
const changes = [
  [1, 1546300800],
  [2, 1546300800],
  [1, 1546300900],
  [1, 1546301000],
  [3, 1546301100],
];

console.log(getFilesToBackup(lastBackup, changes)); // => [ 1, 3 ]
console.log(
  getFilesToBackup(1546300800, [
    [2, 1546300800],
    [3, 1546301100],
    [1, 1546300800],
    [1, 1546300900],
    [1, 1546301000],
  ])
);
