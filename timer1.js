const arg = process.argv.slice(2);
for (let item of arg) {
  setTimeout(() => {
    process.stdout.write('\007');
  }, item);
}
