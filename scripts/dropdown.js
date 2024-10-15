const createDropdown = (preText, items) => {
  //variables
  let selectedItem = null;
  let previousSelectedItem = null;

  //creating elements
  const dropdown = document.createElement("div");
  const dropdownButton = document.createElement("button");
  const dropdownText = document.createElement("p");
  const dropdownArrow = document.createElement("p");
  const dropdownMenu = document.createElement("ul");

  //adding classes
  dropdown.classList.add("dropdown");
  dropdownButton.classList.add("btn");
  dropdownText.classList.add("dropdown-text");
  dropdownArrow.classList.add("dropdown-arrow");
  dropdownMenu.classList.add("dropdown-menu");

  //adding initial content
  dropdownText.innerText = preText;
  dropdownArrow.innerText = "^";

  //adding items to the list
  items.map((item) => {
    const itemList = document.createElement("li");
    itemList.classList.add("dropdown-item");
    itemList.innerText = item;
    dropdownMenu.appendChild(itemList);
  });

  //appending all items
  dropdownButton.appendChild(dropdownText);
  dropdownButton.appendChild(dropdownArrow);

  dropdown.appendChild(dropdownButton);
  dropdown.appendChild(dropdownMenu);

  const toggleDropdownMenu = () => {
    dropdownMenu.classList.toggle("show");
    dropdownArrow.classList.toggle("rotate");

    if (dropdownMenu.classList.contains("show")) {
      document.addEventListener("keydown", keyboardNavigation);
    } else {
      document.removeEventListener("keydown", keyboardNavigation);
    }
  };

  const selectItem = (event) => {
    // to prevent other items from being selected
    if (!event.target.classList.contains("dropdown-item")) {
      return;
    }
    previousSelectedItem = selectedItem;
    selectedItem = event.target;
    dropdownText.textContent = selectedItem.textContent;
    toggleDropdownMenu();
    selectedItemIconToggle();
  };

  const selectedItemIconToggle = () => {
    selectedItem.classList.add("selected");

    /*case for when previousSelectedItem is null &
  when the previous and selected items are same  */
    if (
      !previousSelectedItem ||
      previousSelectedItem.textContent === selectedItem.textContent
    ) {
      return;
    }

    previousSelectedItem.classList.remove("selected");
  };

  const keyboardNavigation = (event) => {
    if (event.key === "Enter") {
      selectItem(event);
    }
  };

  const closeDropdownOutsideClick = (event) => {
    // Check if the click is outside the dropdown
    if (!dropdown.contains(event.target)) {
      toggleDropdownMenu();
      dropdownMenu.classList.remove("show");
      dropdownArrow.classList.remove("rotate");
    }
  };

  document.addEventListener("click", closeDropdownOutsideClick);
  dropdownMenu.addEventListener("click", selectItem);
  dropdownButton.addEventListener("click", toggleDropdownMenu);

  return {
    element: dropdown,
    getSelectedItem: () => (selectedItem ? selectedItem.innerText : null),
  };
};

export default createDropdown;
