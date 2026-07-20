Shopping cart general scheme:
Cart needs to be a state that remains throughout the site. Probably in app.
Need to navigate through routing
Test along the way
Css needs to be in css modules.

Navbar:
Cart that displays number of active items.
Testing:
Test that cart num goes up on adding items
test that cart num goes down upon removing items
Test that moving pages the cart num stays the same
Test that moving back to store and then adding adds the right number to the cart
Home Page:

Store Page:
Grid containing each item in the store,
Item component:
props (image, id, count in cart?)
Image,
add to cart button
increment and decrement of amount
display/input that shows how many items you have
Next page ?
Tests:
Next page button adds new items
Next page button removes old items
Previous page removes new and adds old items.

Checkout:
copy of item components that are in cart.

Pages and testing:
