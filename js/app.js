//immediate invoked function expression
(function() {
  const quotes = [
    {
      quote:
        "I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?",
        
      author: "  ECHO "
    },
    {
      quote:
        "I am taken from a mine and shut up in a wooden case. From there, I am used as a master. What am I? ",
      author: "Pencil"
    },
    {
      quote:
        "I am full of keys, but I cannot open any locks. What am I? ",
      author: "piano  "
    },
    {
      quote: "I have cities but no houses, forests but no trees, and rivers but no water. What am I?",
      author: "Map"
    },
    {
      quote:
        "I am black when you buy me, red when you use me, and gray when you throw me away. What am I? ",
      author: "Charcoal"
    },
    {
      quote:
        "The more you take, the more you leave behind. What am I? ",
      author: " FootSteps "
    }
  ];

  const btn = document.getElementById("generate-btn");

  btn.addEventListener("click", function() {
    let random = Math.floor(Math.random() * quotes.length);
    console.log(random);

    document.getElementById("quote").textContent = quotes[random].quote;
    document.querySelector(".author").textContent = quotes[random].author;
  });
})();
