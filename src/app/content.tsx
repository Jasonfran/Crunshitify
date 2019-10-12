import "../styles/content.css"
import { Menu } from "./menu";
import * as ReactDOM from "react-dom"
import * as React from "react"

class Crunshitify {
    
    mainContentContainer: HTMLElement;
    videoContainer: HTMLElement;
    menuContainer: HTMLDivElement;
    
    constructor(){
        console.log("Unshitifying Crunhcyroll");

        this.mainContentContainer = document.getElementById("template_container");
        this.videoContainer = document.getElementById("showmedia_video_box_wide");

        this.menuContainer = document.createElement("div");
        this.menuContainer.classList.add("crunshitify_menu-container");
        this.videoContainer.appendChild(this.menuContainer);

        this.videoContainer.onmouseover = () => {
            this.showMenu();
        }

        this.videoContainer.onmouseout = () => {
            this.hideMenu();
        }
        
        ReactDOM.render(<Menu theatreMode={() => this.theatreMode()}/>, this.menuContainer);
    }

    private theatreMode() {
        this.mainContentContainer.classList.toggle("crunshitify_template-container");
        this.videoContainer.classList.toggle("crunshitify_video-container");
        this.videoContainer.scrollIntoView();
    }

    private showMenu() {
        this.menuContainer.classList.add("crunshitify_menu-container--show");
    }

    private hideMenu() {
        this.menuContainer.classList.remove("crunshitify_menu-container--show");
    }
}

let crunshitify = new Crunshitify();