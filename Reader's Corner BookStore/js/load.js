// Get container to display books
const container = document.querySelector(".container");

// Categories to render
const categories = ["Fiction", "School Textbooks", "Stationery"];

// Loop through categories
categories.forEach(cat => {
  // Create category heading
  const heading = document.createElement("h2");
  heading.textContent = cat;
  container.appendChild(heading);

  // Create grid container
  const grid = document.createElement("div");
  grid.className = "grid-container";

  // Filter books by category
  books.filter(book => book.category === cat)
       .forEach(book => {
         const bookDiv = document.createElement("div");
         bookDiv.className = "book-item";

         const img = document.createElement("img");
         img.src = book.image;
         img.alt = book.title;
         img.width = 220; // bigger image
         img.height = 220;

         const p = document.createElement("p");
         p.textContent = `${book.title} – R${book.price}`;

         bookDiv.appendChild(img);
         bookDiv.appendChild(p);
         grid.appendChild(bookDiv);
       });

  container.appendChild(grid);
});
