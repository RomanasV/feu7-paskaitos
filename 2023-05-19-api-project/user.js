async function init() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users/2');
  const user = await res.json();

  console.log(user)
}

init();