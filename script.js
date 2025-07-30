function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    if ((username === "admin" || username === "user") && password === "1234") {
      document.getElementById("loginSection").style.display = "none";
      document.getElementById("orderSection").style.display = "block";
    } else {
      alert("Invalid credentials.");
    }
  }
  function calculate() {
    const name = document.getElementById("name").value;
    const age = parseInt(document.getElementById("age").value);
    const coffeeType = document.getElementById("coffeeType").value;
    const quantity = parseInt(document.getElementById("quantity").value);
    const people = parseInt(document.getElementById("people").value);
    const tipPercent = parseInt(document.getElementById("tip").value);
  
    let pricePerCup = {
      espresso: 2.5,
      latte: 3.5,
      cappuccino: 4.0
    };
  
    let originalTotal = pricePerCup[coffeeType] * quantity;
    let discount = (age < 18 || age > 60) ? originalTotal * 0.10 : 0;
    let finalTotal = originalTotal - discount;
  
    let tip = finalTotal * (tipPercent / 100);
    let totalWithTip = finalTotal + tip;
    let perPerson = totalWithTip / people;
  
    document.getElementById("result").innerHTML = `
      <strong>Hello ${name}!</strong><br>
      You ordered ${quantity} ${coffeeType}(s).<br>
      Original total: $${originalTotal.toFixed(2)}<br>
      Discount: $${discount.toFixed(2)}<br>
      Tip: $${tip.toFixed(2)}<br>
      <strong>Total with Tip: $${totalWithTip.toFixed(2)}</strong><br>
      Split between ${people} people: <strong>$${perPerson.toFixed(2)} each</strong>
    `;
  }
  