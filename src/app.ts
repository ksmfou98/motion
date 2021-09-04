import { PageComponent } from "./components/page.js";

class App {
  private readonly page: PageComponent;
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent();
    this.page.attactTo(appRoot);
  }
}

new App(document.querySelector(".document")! as HTMLElement); // 얘는 무조건 HTMLElement를 받아야 한다. 할때 쓰는 표현식이다.
