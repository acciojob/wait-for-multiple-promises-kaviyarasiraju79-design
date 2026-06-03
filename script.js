//your JS code here. If required.
const tbody = document.getElementById("output");

// Show loading row initially
tbody.innerHTML = `<tr><td colspan="2">Loading...</td></tr>`;

// function to create a promise with random delay (1–3 sec)
function createPromise(name) {
  const delay = Math.floor(Math.random() * 3) + 1;

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name, time: delay });
    }, delay * 1000);
  });
}

// create 3 promises
const p1 = createPromise("Promise 1");
const p2 = createPromise("Promise 2");
const p3 = createPromise("Promise 3");

const start = performance.now();

Promise.all([p1, p2, p3]).then((results) => {
  const end = performance.now();

  tbody.innerHTML = "";

  results.forEach((res) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${res.name}</td>
      <td>${res.time}</td>
    `;
    tbody.appendChild(row);
  });

  // optional: show total time (if needed in future requirement)
  console.log(`Total time: ${(end - start) / 1000}s`);
});