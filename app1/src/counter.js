export default function printCount() {
  let count = 0;

  return setInterval(() => {
    document.getElementById("root").innerHTML = `${count}`;

    count++;
  }, 1000);
}
