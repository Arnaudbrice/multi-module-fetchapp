const main = document.getElementById("main");

export const container = document.getElementById("container");

export const createContainerItem = item => {
  const containerItem = document.createElement("div");
  const containerItemTitle = document.createElement("h2");
  containerItemTitle.textContent = item.title;

  const containerItemImage = document.createElement("img");

  //image comes with src and alt attribute per default( we can direct access them or we can use setAttribute)
  //containerItemImage.src = item.image;
  //containerItemImage.alt = item.title;
  containerItemImage.setAttribute("src", item.image);

  containerItemImage.setAttribute("alt", item.title);

  const containerItemPreis = document.createElement("p");
  containerItemPreis.textContent = `$${item.price.toFixed(2)}`;

  const addBtn = document.createElement("button");
  addBtn.textContent = "Add to Cart";

  addBtn.classList.add("addBtn");
  // const deleteBtn= document.createElement("button");

  containerItem.appendChild(containerItemTitle);
  containerItem.appendChild(containerItemImage);
  containerItem.appendChild(containerItemPreis);
  containerItem.appendChild(addBtn);
  containerItem.setAttribute("id", item.id);
  return containerItem;
};

// CSS Class Management (in JavaScript or better in CSS file)
export const styleClasses = {
  deleteBtn: [
    "bg-red-500",
    "hover:bg-red-400",
    "text-white",
    "p-2",
    "rounded",
    "min-w-[80px]"
  ],
  container: [
    "grid",
    "grid-cols-[repeat(auto-fill,minmax(300px,1fr))]",
    "place-items-center",
    "gap-8",
    "text-center",
    "my-8",
    "mx-8"
  ],
  containerItem: [
    "flex",
    "flex-col",
    "justify-center",
    "items-center",
    "bg-[#FFFFFF]",
    "border-[1px]",
    "border-[#DEE1ED]",
    "rounded-lg",
    "rounded",
    "mx-auto",
    "w-full",
    "shadow-md",
    "hover:shadow-2xl",
    "transition",
    "ease-in-out",
    "duration-200"
  ],
  containerHeading: [
    "text-center",
    "text-[#171D36]",
    "font-bold",
    "text-xl",
    "my-4",
    "p-4",
    "h-[4rem]"
  ],
  containerItemImage: ["max-w-full", "h-[300px]", "block", "my-12", "mx-auto"],
  containerItemPrice: [
    "text-[#2D3453]",
    "text-xl",
    "font-bold",
    "mr-auto",
    "px-4",
    "mb-4",
    "border-b-4",
    "border-b-[#4767E6]/30"
  ],
  containerItemAddBtn: [
    "bg-[#4767E6]",
    "hover:bg-[#254BE1]",
    "text-[#FFFFFF]",
    "p-2",
    "rounded-lg",
    "min-w-[80px]",
    "my-4",
    "mx-auto"
  ]
};

export const pageStyling = () => {
  document.body.style.backgroundColor = "#171d36";
  document.body.style.backgroundImage =
    "url('https://transparenttextures.com/patterns/ecailles.png')";

  document.body.style.fontFamily = "Afacad Flux, Afacad, sans-serif";
  document.body.style.lineHeight = "1.5";

  // footer styling
  const footer = document.createElement("footer");

  footer.classList.add(
    "flex",
    "flex-col",
    "justify-center",
    "items-center",
    "text-center",
    "w-full",
    "h-16"
  );

  const footerParagraph = document.createElement("p");
  footerParagraph.textContent = `Made with ❤️ by Arnaud Habenicht ©${new Date().getFullYear()} All rights reserved`;
  footerParagraph.classList.add(
    "text-[#2D3453]",
    "bg-[#ffffff]",
    "text-xl",
    "w-full",
    "p-4"
  );
  footer.appendChild(footerParagraph);

  document.body.appendChild(footer);
};
