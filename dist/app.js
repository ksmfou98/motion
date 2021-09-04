import { PageComponent } from "./components/page.js";
class App {
    constructor(appRoot) {
        this.page = new PageComponent();
        this.page.attactTo(appRoot);
    }
}
new App(document.querySelector(".document"));
