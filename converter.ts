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
        this.configure();
      }

      private submitHandler(event: Event) {
        event.preventDefault();

        const selcFrom = document.getElementById('convertFrm') as HTMLSelectElement;
        const choiceFrom = selcFrom.value;
        const selcTo = document.getElementById('convertTo') as HTMLSelectElement;
        const choiceTo = selcTo.value;

        if(choiceFrom === 'USD' && choiceTo === 'EUR' ){
      
            let excRate= 0.7618;
                let amount  = +this.amountInputElement.value * excRate;
           
          console.log(amount);
        }
        else
        if(choiceFrom === 'ZAR' && choiceTo === 'USD' ){
      
          let excRate= 0.067;
              let amount  = +this.amountInputElement.value * excRate;
         
        console.log(amount);
        }
              else
        if(choiceFrom === 'USD' && choiceTo === 'ZAR' ){
      
          let excRate= 14.71;
              let amount  = +this.amountInputElement.value * excRate;
         
        console.log(amount);
        }
 
      }
    
      private attach() {
        this.hostElement.insertAdjacentElement('afterbegin', this.element);
      }

      private configure() {
        this.element.addEventListener('submit', this.submitHandler.bind(this));
      }    
}
const prjInput = new ProjectInput();



