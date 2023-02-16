const fetch = require("node-fetch");

async function create(url, custom = "") {
  obj = Object.entries({ url, costum: custom });
  urls = new URLSearchParams(obj);
  let fetched = await fetch("https://clp.pw/api/v1/create?" + urls);
  if (fetched.status !== 200) throw await fetched.json();
  let result = await fetched.json();
  return { status: fetched.status, craator: "Caliph", result: result.result };
}

module.exports = create.bind();
