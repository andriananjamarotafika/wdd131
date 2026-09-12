const input = document.querySelector("#favchap");
const button = document.querySelector("main button");
const ulist = document.querySelector("#list");
var item_list_number = 1;

//Action on the click Add chapter button
button.addEventListener("click", function () {
	if (input.value.trim() == "") {
		alert("Can you insert something in this field?");
		input.focus();

		//Execute this code if the number of list item is less than 10
	} else if (item_list_number < 10) {
		const list_item = document.createElement("li");
		list_item.textContent = input.value;
		const delete_button = document.createElement("button");
		delete_button.textContent = "❌";
		delete_button.setAttribute("aria-label", "close");
		delete_button.setAttribute("id", "close-button");
		ulist.append(list_item);
		list_item.append(delete_button);
		//Execute this function when user click oon the delete button
		delete_button.addEventListener("click", function () {
			ulist.removeChild(list_item);
			input.value = "";
			input.focus();
			item_list_number -= 1;
		});
		input.value = "";
		input.focus();
		item_list_number = ulist.querySelectorAll("li").length;

		//Execute this code if the number of item in the list is more than 10
	} else {
		alert("Remove an item from the list");
	}
});
