export class ImageComponent {
  private element: HTMLElement;

  constructor(title: string, url: string) {
    const template = document.createElement("template");
    template.innerHTML = `<section class="image">
    <div class="image__holder">
      <img class="image__thumbnail" />
    </div>
    <p class="image__title"></p>
  </section>`;

    // 위에 백틱 안에다가 직접 ${title} 이렇게 넣을 수도 있지만, ${<div>asdasd</div>} 이런식으로 코드로 입력되면 안되기 떄문에 아래와 같이 해주는 것이 좋다.

    this.element = template.content.firstElementChild! as HTMLElement;

    const imageElement = this.element.querySelector(
      ".image__thumbnail"
    )! as HTMLImageElement;

    imageElement.src = url;
    imageElement.alt = title;

    const titleElement = this.element.querySelector(
      ".image__title"
    )! as HTMLParagraphElement;

    titleElement.textContent = title;
  }

  attachTo(parent: HTMLElement, position: InsertPosition = "afterbegin") {
    parent.insertAdjacentElement(position, this.element);
  }
}
