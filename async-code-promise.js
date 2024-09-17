const fetchData = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done!");
    }, 1500);
  });
  return promise;
};

setTimeout(() => {
  console.log("Timer is complete!");
  fetchData()
    .then((result) => {
      console.log(result);
      return fetchData();
    })
    .then((text) => {
      console.log(text);
    });
}, 2000);

console.log("Hi!");
console.log("Hello!");
