function saveToDatabase() {
    // Get all the menu sections
    const menuSections = document.querySelectorAll('.menu-section');

    // Initialize an empty object to store the selected items
    let selectedItems = {};

    // Loop through each menu section
    menuSections.forEach(section => {
        // Get the category name from the h2 tag
        const category = section.querySelector('h2').textContent;

        // Get the menu columns in the current category
        const menuColumns = section.querySelectorAll('.menu-column');

        // Loop through each menu column
        menuColumns.forEach(column => {
            // Get whether the items are vegetarian or non-vegetarian from the h3 tag
            const vegOrNonVegTag = column.querySelector('h3');
            const vegOrNonVeg = vegOrNonVegTag ? vegOrNonVegTag.textContent : 'Veg';

            // Get the selected items in the current column
            const selected = column.querySelectorAll('input[type="checkbox"]:checked');

            // Initialize an empty array to store the selected items in the current column
            let items = [];

            // Loop through each selected item
            selected.forEach(item => {
                // Get the item name and price
                const itemName = item.value;
                const itemPrice = item.nextElementSibling.textContent;

                // Add the item to the array
                items.push({[itemName]: itemPrice});
            });

            // Add the items to the selectedItems object
            if (!selectedItems[category]) {
                selectedItems[category] = {};
            }
            selectedItems[category][vegOrNonVeg] = items;
        });
    });

    // Convert the selectedItems object to a JSON string
    const json = JSON.stringify(selectedItems);

    // Display the JSON string
    console.log(json);

    document.body.innerHTML = '<h1 style="font-size: 48px;">Thank you</h1>';
}