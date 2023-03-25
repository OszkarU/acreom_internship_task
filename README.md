## Components 
## SideBar.vue
> Responsible for sidebar functionality: adding and removing destinations.

### Information on the script tag content
**Props:**
- `destinations` - an array of `Destination` objects.

**Data:**
- `inputValue` - a string representing the current value of the input field.
- `disabled` - a boolean indicating whether the "Add" button should be disabled.

**Watch:**
- `inputValue` - when the input field records a change, check if there's any input, if not disable the "Add" button.

**Methods:**
- `addDestination()` - emits an event that fires up to parent elements, and passes necessary data.
- `removeDestination(destination: Destination)` - emits an event that fires up to parent elements, and passes necessary data.

<br/>

## NotificationArea.vue 
> Responsible for showing a notification snackbar for 5 seconds upon adding or removing a destination.

### Information on the script tag content

**Props:**
- `notifications` - an array of `Notification` objects.

<br/>

---

### Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check and Compile for Production

```sh
npm run build
```

---

### Optional
### Serve the `dist` Folder

After running `npm run build`, the project will be compiled and the code will be stored in the `dist` folder. To serve the `dist` folder on a local server, you can use the `serve` package.

First, make sure the `serve` package is installed. If it is not installed, you can install it by running the following command in your terminal:

```sh
npm install -g serve
```

Once the `serve` package is installed, navigate to the project root directory in your terminal and run the following command:

```sh
serve dist
```

