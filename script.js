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

  // remove loading row
  tbody.innerHTML = "";

  // add promise rows
  results.forEach((res) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${res.name}</td>
      <td>${res.time}</td>
    `;

    tbody.appendChild(row);
  });

  // FIXED TOTAL (IMPORTANT)
  const totalRow = document.createElement("tr");
  totalRow.innerHTML = `
    <td>Total</td>
    <td>Promise Completed</td>
  `;

  tbody.appendChild(totalRow);
});