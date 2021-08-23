"use strict";
class ProjectInput {
    constructor() {
        this.templateElement = document.getElementById('project-input');
        this.hostElement = document.getElementById('converter');
        const importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild;
        this.amountInputElement = this.element.querySelector('#amount');
        this.fromSelectElement = this.element.querySelector('#from');
        this.toSelectElement = this.element.querySelector('#to');
        this.attach();
    }
    attach() {
        this.hostElement.insertAdjacentElement('afterbegin', this.element);
    }
}
new ProjectInput();
//# sourceMappingURL=converter.js.map