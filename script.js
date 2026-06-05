//your JS code here. If required.
const tbody = document.getElementById("output");

function createPromise(name) {
  const time = Math.random() * 2 + 1; // 1 to 3 seconds

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: name,
        time: time
      });
    }, time * 1000);
  });
}

const startTime = performance.now();

Promise.all([
  createPromise("Promise 1"),
  createPromise("Promise 2"),
  createPromise("Promise 3")
]).then((results) => {
  tbody.innerHTML = "";

  results.forEach((result) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${result.name}</td>
      <td>${result.time.toFixed(3)}</td>
    `;

    tbody.appendChild(row);
  });

  const totalTime = (performance.now() - startTime) / 1000;

  const totalRow = document.createElement("tr");
  totalRow.innerHTML = `
    <td>Total</td>
    <td>${totalTime.toFixed(3)}</td>
  `;

  tbody.appendChild(totalRow);
});