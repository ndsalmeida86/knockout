let ViewModel = () => {
    this.text = ko.observable();
    this.array = ko.observableArray([]);
    this.addText = () => {
        if (this.text()) {
            this.array.push(this.text());
            this.text("");            
        }
        this.returnFocus();        
    }
    this.enterText = () => {
        this.addText();
    }
    this.returnFocus = () => {
        document.getElementById("txtValue").focus();
    }
};

ko.applyBindings(ViewModel);