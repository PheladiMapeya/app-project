class ProjectInput {
    templateElement: HTMLTemplateElement;
    hostElement: HTMLDivElement;
    element: HTMLFormElement;

    amountInputElement: HTMLInputElement;
    fromSelectElement: HTMLSelectElement;
    toSelectElement: HTMLSelectElement;
    

    constructor() {
        this.templateElement = document.getElementById(
          'project-input'
        )! as HTMLTemplateElement;
        this.hostElement = document.getElementById('converter')! as HTMLDivElement;
    
        const importedNode = document.importNode(
          this.templateElement.content,
          true
        );
        this.element = importedNode.firstElementChild as HTMLFormElement;

        this.amountInputElement = this.element.querySelector('#amount') as HTMLInputElement;
        this.fromSelectElement = this.element.querySelector('#from') as HTMLSelectElement;
        this.toSelectElement = this.element.querySelector('#to') as HTMLSelectElement;

        this.attach();
        
      }
      
      private attach() {
        this.hostElement.insertAdjacentElement('afterbegin', this.element);
      }
  

}
new ProjectInput();



