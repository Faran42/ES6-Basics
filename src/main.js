const minhaPromise = () => new Promise((resolve, reject) => {
  setTimeout(() => { resolve('OK')}, 1500);
});

async function executaPromise() {
  console.log (await minhaPromise());
  console.log (await minhaPromise());
  console.log (await minhaPromise());
  console.log (await minhaPromise());
  console.log (await minhaPromise());
  console.log (await minhaPromise());
  console.log (await minhaPromise());
  console.log (await minhaPromise());
  console.log (await minhaPromise());
  console.log (await minhaPromise());
  console.log (await minhaPromise());
  console.log (await minhaPromise());
  console.log (await minhaPromise());
  console.log (await minhaPromise());
  console.log (await minhaPromise());
  console.log (await minhaPromise());
  console.log (await minhaPromise());  
}

executaPromise();