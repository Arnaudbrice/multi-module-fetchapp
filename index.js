import { fetchData } from "./modules/network.js";
import { container, createContainerItem } from "./modules/ui.js";

import { getCartItems, setCartItems } from "./modules/storage.js";

import { styleClasses, pageStyling } from "./modules/ui.js";

//handle load event to populate the page with data from the API
const handleLoad = async () => {
  try {
    // top level await (It works only if the imported script is from type module )
    const data = await fetchData();
    console.log("handle load data", data);

    pageStyling();

    if (data.length > 0) {
      for (const item of data) {
        const containerItem = createContainerItem(item);
        container.appendChild(containerItem);
      }

      // Apply container styles
      container.classList.add(...styleClasses.container);
      // Apply styles after items are added
      [...container.children].forEach(containerItem => {
        containerItem.classList.add(...styleClasses.containerItem);

        containerItem
          .querySelector("h2")
          .classList.add(...styleClasses.containerHeading);
        containerItem
          .querySelector("img")
          .classList.add(...styleClasses.containerItemImage);

        containerItem
          .querySelector("p")
          .classList.add(...styleClasses.containerItemPrice);

        containerItem
          .querySelector("button")
          .classList.add(...styleClasses.containerItemAddBtn);

        // container card hover effect
        for (const containerItem of [...container.children]) {
          containerItem.addEventListener("mouseover", function(event) {
            this.style.transform = "scale(1.05)";
          });
          containerItem.addEventListener("mouseout", function(event) {
            this.style.transform = "scale(1)";
          });
        }
      });
    } else {
      return;
    }
  } catch (error) {
    console.error(error);
  }
};

//handle click event on the add button(event bubbling)
const handleAdd = event => {
  console.log(event.target);
  // to avoid that clicking on any container item add item to the cart
  if (!event.target.classList.contains("addBtn")) {
    return;
  }
  let cartItems = getCartItems();

  const container = event.target.closest("div");

  console.log("container", container);
  const heading = container.querySelector("h2");
  const image = container.querySelector("img");
  const price = container.querySelector("p");
  console.log("heading", heading.textContent);
  const item = {
    id: container.id,
    title: heading.textContent,
    image: image.src,
    price: price.textContent
  };

  console.log("item", item);
  // ensure item is not already in cartItems array from the local storage
  if (!cartItems.some(cartItem => cartItem.id === item.id)) {
    cartItems = [...cartItems, item];
    setCartItems(cartItems);
  }
};

//event listeners
container.addEventListener("click", handleAdd);
window.addEventListener("load", handleLoad);
