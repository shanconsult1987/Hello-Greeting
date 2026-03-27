function greet() {
  const name = document.getElementById("name").value;

  // ❌ Vulnerable (XSS risk)
  document.getElementById("output").innerHTML =
    "Hello " + name;
}
