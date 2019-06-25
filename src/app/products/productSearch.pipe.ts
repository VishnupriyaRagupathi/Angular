import {Pipe, PipeTransform} from '@angular/core';
import {iProduct} from './product.model';

@Pipe({
    name: 'searchFilter'
})

export class ProductSearchPipe implements PipeTransform{
    transform(value: iProduct[], userInput: string){
        userInput = userInput? userInput.toLowerCase() : null;
        return userInput ? value.filter((product) => 
        ((product.name.toLowerCase().indexOf(userInput)!==-1) || 
        (product.category.toLowerCase().indexOf(userInput)!==-1))
        ) : value;
    }
}