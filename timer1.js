let data;
let t = 100;
for(let item of data){
setTimeout(() => {
  process.stdout.write('\x07');
}, item);
}
