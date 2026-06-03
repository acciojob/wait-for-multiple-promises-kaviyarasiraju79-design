//your JS code here. If required.
const tbody = document.getElementById("output");

function createPromise(name) {
  const time = Math.random() * 2 + 1;

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name, time: Number(time.toFixed(3)) });
    }, time * 1000);
  });
}

const promises = [
  createPromise("Promise 1"),
  createPromise("Promise 2"),
  createPromise("Promise 3"),
];

const start = Date.now();

Promise.all(promises).then((results) => {
  const totalTime = ((Date.now() - start) / 1000).toFixed(3);

  tbody.innerHTML = "";

  results.forEach((res) => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${res.name}</td><td>${res.time}</td>`;
    tbody.appendChild(row);
  });

  const totalRow = document.createElement("tr");
  totalRow.innerHTML = `<td>Total</td><td>${totalTime}</td>`;
  tbody.appendChild(totalRow);
});