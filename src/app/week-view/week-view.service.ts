import { Injectable } from '@angular/core';
import { Week } from './models/week';
import { Dictionary } from '../tools/dictionary';

@Injectable({
    providedIn: 'root'
})
export class WeekViewService {
    weeks = new Dictionary<Week>();

    constructor() {
        // TODO - Initialize weeks from file
        this.weeks.Add('Week 1', new Week('Week 1'));
    }

    getWeeks(): Dictionary<Week> {
        if (this.weeks.Count() <= 0) {
            this.weeks.Add('Week 1', new Week('Week 1'));
        }

        return this.weeks;
    }

    // addWeek(newWeek: Week) {
    //     this.weeks.push(newWeek);
    // }

    // removeWeek(weekName: string) {
    //     this.weeks = this.weeks.filter(function (obj) {
    //         return obj.name !== weekName;
    //     });
    // }

    // updateWeek(newWeekData: Week) {
    //     const updateItem = this.weeks.find(this.findIndexToUpdate, newWeekData.name);
    //     const index = this.weeks.indexOf(updateItem);
    //     this.weeks[index] = newWeekData;
    // }

    // findIndexToUpdate(newItem) {
    //     return newItem.name === this;
    // }
}
