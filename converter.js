"use strict";
var ProjectInput = /** @class */ (function () {
    function ProjectInput() {
        this.templateElement = document.getElementById('project-input');
        this.hostElement = document.getElementById('converter');
        var importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild;
        this.amountInputElement = this.element.querySelector('#amount');
        this.fromSelectElement = this.element.querySelector('#from');
        this.toSelectElement = this.element.querySelector('#to');
        this.attach();
        this.configure();
    }
    ProjectInput.prototype.submitHandler = function (event) {
        event.preventDefault();
        var selcFrom = document.getElementById('convertFrm');
        var choiceFrom = selcFrom.value;
        var selcTo = document.getElementById('convertTo');
        var choiceTo = selcTo.value;
        if (choiceFrom === 'USD' && choiceTo === 'EUR') {
            var excRate = 0.7618;
            var amount = +this.amountInputElement.value * excRate;
            console.log(amount);
        }
        else if (choiceFrom === 'ZAR' && choiceTo === 'USD') {
            var excRate = 0.067;
            var amount = +this.amountInputElement.value * excRate;
            console.log(amount);
        }
        else if (choiceFrom === 'USD' && choiceTo === 'ZAR') {
            var excRate = 14.71;
            var amount = +this.amountInputElement.value * excRate;
            console.log(amount);
        }
    };
    ProjectInput.prototype.attach = function () {
        this.hostElement.insertAdjacentElement('afterbegin', this.element);
    };
    ProjectInput.prototype.configure = function () {
        this.element.addEventListener('submit', this.submitHandler.bind(this));
    };
    return ProjectInput;
}());
var prjInput = new ProjectInput();
