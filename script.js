//your JS code here. If required.
const tbody = document.getElementById("output");

// helper function to create a promise with random delay (1–3 sec)
function createPromise(name) {
  return new Promise((resolve) => {
    const time = (Math.random() * 2 + 1).toFixed(3); // 1 to 3 sec
    const delay = time * 1000;

    setTimeout(() => {
      resolve({ name, time: Number(time) });
    }, delay);
  });
}

// create 3 promises
const p1 = createPromise("Promise 1");
const p2 = createPromise("Promise 2");
const p3 = createPromise("Promise 3");

const start = performance.now();

Promise.all([p1, p2, p3]).then((results) => {
  const end = performance.now();

  const totalTime = ((end - start) / 1000).toFixed(3);

  // remove loading row
  tbody.innerHTML = "";

  // add each promise result
  results.forEach((res) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${res.name}</td>
      <td>${res.time}</td>
    `;

    tbody.appendChild(row);
  });

  // add total row
  const totalRow = document.createElement("tr");
  totalRow.innerHTML = `
    <td>Total</td>
    <td>${totalTime}</td>
  `;

  tbody.appendChild(totalRow);
});