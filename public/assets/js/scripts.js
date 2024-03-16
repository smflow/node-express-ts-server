(function () {
  if (!window.cwd) return;
  const cwd = window.cwd;
  const el = document.getElementById("instructions");
  const html = `
    <p>Add routes in <code>${cwd}/src/app.ts</code></p>
    <p>Configure server in <code>${cwd}/src/config.ts</code></p>
    <p>Main server file in <code>${cwd}/src/index.ts</code></p>
    <p>Place the static files (css, js, images) in <code>${cwd}/public</code></p>
    <p>Place you views files in <code>${cwd}/views</code></p>
  `;

  el.innerHTML = html;
})();