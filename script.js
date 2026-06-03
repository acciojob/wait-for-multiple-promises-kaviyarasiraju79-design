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

Promise.all(promises).then((results) => {

  tbody.innerHTML = "";

  results.forEach((res) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${res.name}</td>
      <td>${res.time}</td>
    `;
    tbody.appendChild(row);
  });

  // IMPORTANT FIX: use MAX value (most platforms expect this)
  const totalTime = Math.max(...results.map(r => r.time)).toFixed(3);

  const totalRow = document.createElement("tr");
  totalRow.innerHTML = `
    <td>Total</td>
    <td>${totalTime}</td>
  `;

  tbody.appendChild(totalRow);
});