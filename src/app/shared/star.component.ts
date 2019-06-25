import {Component, OnInit, OnChanges, OnDestroy,
     Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class starComponent implements OnInit, OnChanges,OnDestroy{
    @Input() rating: number;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
    starWidth: number;

    constructor(){
        console.log(">>>>>>constructor<<<<<");
    }
    ngOnInit(){
        console.log(">>>>>>>oninit<<<<<<<<<");
    }
    ngOnChanges(){
        console.log(">>>>>>>onchanges<<<<<<<",this.rating);
        this.starWidth = 86 / 6 * this.rating;
        console.log("width", this.starWidth);
    }
    ngOnDestroy(){
        console.log(">>>>>>ondestroy<<<<<<");
    }

    onStar(): void{
        this.ratingClicked.emit(`Rating clicked is ${this.rating}`);
    }

}