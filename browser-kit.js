const mainpage = document.getElementById("mainpage");

class ShortcutContainer {
    constructor(shortcuts = Array, id = String, direction = String, styleType = String, wrapperVisibility = Boolean, hpos = String, vpos = String) {
        this.shortcuts = shortcuts;
        this.id = id;
        this.direction = direction;
        this.styleType = styleType;
        this.wrapperVisibility = wrapperVisibility;
        this.hpos = hpos;
        this.vpos = vpos;
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

        if (this.hpos !== String && this.vpos !== String ) {
            if (this.hpos == "left") { wrapper.classList.add("left") }
            else if (this.hpos == "right") { wrapper.classList.add("right") }
            if (this.hpos == "up") { wrapper.classList.add("up") }
            else if (this.hpos == "down") { wrapper.classList.add("down") }
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
        mainpage.append(wrapper);
        return;
    }
}

function classic() {
    var shortcuts = new ShortcutContainer()
    shortcuts.shortcuts = ["www.youtube.com", ["Maps", "https://maps.google.com/"], "www.you215tube.com", "w125ww.youtube.com"];
    shortcuts.id = "containerXD"
    shortcuts.direction = "h";
    shortcuts.styleType = "button";
    shortcuts.wrapperVisibility = true;
    shortcuts.hpos = "right";
    shortcuts.vpos = "bottom";
    shortcuts.build()
}