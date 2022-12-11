import {
    Directive, ViewContainerRef, TemplateRef, Input, Attribute, SimpleChanges,ElementRef
} from "@angular/core"


@Directive({
    selector: '[counterOf]'
})

export class CounterDirective {
    constructor(private container: ViewContainerRef, private template: TemplateRef<Object>,private ef: ElementRef)
    {
        console.log('test-----')
    }
    
    
    
            

    @Input("counterOf")
    counter: any;
    

    ngOnChanges(changes: SimpleChanges) {
        this.container.clear()
        for (let i =0; i < this.counter; i++){
            this.container.createEmbeddedView(this.template, 
                new CounterDirectiveContext(i + 1))
        }
    }


}

class CounterDirectiveContext{
    constructor(public $implicit : any){}
}