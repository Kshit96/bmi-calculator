import Controller from "./controller";
import View from "./view";

window.onload = () => {
    let view = new View(document.getElementById("list-view"));
    const c = new Controller(view);
    c.loadGists();
};