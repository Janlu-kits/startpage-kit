const mainpage = document.getElementById("mainpage");

function appendDocument(object, pos = "center") {
    if (object === null) {
        console.error("No object was defined.")
        return "error";
    }
    if (["topleft", "top", "topright", "left", "center", "right", "bottomleft", "bottom", "bottomright"].includes(pos)) {
        document.getElementById(pos).append(object);
    } else {
        console.warn(pos + " is not a valid position. Defaultling to center.")
        document.getElementById("center").append(object);
    }
}

class ShortcutContainer {
    constructor(shortcuts = Array, id = String, direction = String, styleType = String, wrapperVisibility = Boolean, position = String) {
        this.shortcuts = shortcuts;
        this.id = id;
        this.direction = direction;
        this.styleType = styleType;
        this.wrapperVisibility = wrapperVisibility;
        this.position = position;
    }

    build() {
        // Set up the container for all links
        let wrapper = document.createElement("div");
        if (this.id === String) {
            console.warn("A Shortcut Container has been built without an ID.");
        } else {
            wrapper.id = this.id;
        }

        if (this.direction !== String) {
            if (this.direction === "v" || this.direction === "vertical") {
                wrapper.classList.add("containerVertical");
            } else if (this.direction === "h" || this.direction === "horizontal") {
                wrapper.classList.add("containerHorizontal");
            } else {
                console.warn("Provided direction property is invalid, defaulting to Horizontal.")
                wrapper.classList.add("containerHorizontal");
            }
        } else {
            console.info("You can define a custom direction for your Shortcut Container. Please refer to the manual for more info.");
            wrapper.classList.add("containerHorizontal");
        }

        if (this.wrapperVisibility !== Boolean) {
            if (this.wrapperVisibility === true) {
                wrapper.classList.add("wrapperVisible");
            }
        } 

        

        // Add links
        for (let i = 0; i < this.shortcuts.length; i++) {
            let text = document.createElement("a");

            if (this.shortcuts[i] instanceof Array) {
                text.innerText = this.shortcuts[i][0];
                text.href = this.shortcuts[i][1];
            } else {
                text.innerText = this.shortcuts[i];
                text.href = this.shortcuts[i];
            }
            if (this.styleType !== String) {
                if (this.styleType === "button") {
                    text.classList.add("button")
                }
            }

            wrapper.append(text);
        }
        appendDocument(wrapper, this.position);
        return;
    }
}