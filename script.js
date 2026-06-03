//your JS code here. If required.
const tbody = document.getElementById("output");

function createPromise(name) {
  return new Promise((resolve) => {
    const time = (Math.random() * 2 + 1);
    const delay = time * 1000;

    setTimeout(() => {
      resolve({ name, time: Number(time.toFixed(3)) });
    }, delay);
  });
}

const p1 = createPromise("Promise 1");
const p2 = createPromise("Promise 2");
const p3 = createPromise("Promise 3");

Promise.all([p1, p2, p3]).then((results) => {

  tbody.innerHTML = "";

  results.forEach((res) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${res.name}</td>
      <td>${res.time}</td>
    `;
    tbody.appendChild(row);
  });

  const totalTime = Math.max(...results.map(r => r.time)).toFixed(3);

  const totalRow = document.createElement("tr");
  totalRow.innerHTML = `
    <td>Total</td>
    <td>${totalTime}</td>
  `;

  tbody.appendChild(totalRow);
});