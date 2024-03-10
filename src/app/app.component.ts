import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public collection_1: any = [5, 2, 4, 6, 0, 3, 1];
    public collection_2: any = [9, 12, 7, 10, 11, 8];
    public collection_3: any = [14, 13, 16, 17, 15, 18];
    public mergedAll: any = [];

    constructor() {
        this.testFunction();
    }


    testFunction() {
        let setNewCollection_1 = [];
        let setNewCollection_2 = [];
        let setNewCollection_3 = [];

        let i = 0;
        let min = Math.min(...this.collection_1);

        for (let i = 0; i <= this.collection_1.length; i++) {
            if (this.collection_1[i] == min) {
                setNewCollection_1.push(this.collection_1[i]);
                this.collection_1.splice(i, 1);
                min = Math.min(...this.collection_1);
                i = -1;
            }
        }
        console.log('setNewCollection1: ', setNewCollection_1);


        i = 0;
        min = Math.min(...this.collection_3);

        for (let i = 0; i <= this.collection_3.length; i++) {
            if (this.collection_3[i] == min) {
                setNewCollection_3.push(this.collection_3[i]);
                this.collection_3.splice(i, 1);
                min = Math.min(...this.collection_3);
                i = -1;
            }
        }
        console.log('setNewCollection3: ', setNewCollection_3);

      
        i = 0;
        min = Math.max(...this.collection_2);

        for (let i = 0; i <= this.collection_2.length; i++) {
            if (this.collection_2[i] == min) {
                setNewCollection_2.push(this.collection_2[i]);
                this.collection_2.splice(i, 1);
                min = Math.max(...this.collection_2);
                i = -1;
            }
        }

        console.log('setNewCollection2: ', setNewCollection_2);

        this.mergedAll = [...setNewCollection_1,...setNewCollection_2,...setNewCollection_3];
        console.log('mergedAll: ', this.mergedAll);
    }

}
