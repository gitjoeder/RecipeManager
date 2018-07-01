import { Component, OnInit } from '@angular/core';
import { Week } from './models/week';
import { WeekViewService } from './week-view.service';
import { Dictionary } from '../tools/dictionary';

@Component({
    selector: 'app-week-view',
    templateUrl: './week-view.component.html',
    styleUrls: ['./week-view.component.css']
})
export class WeekViewComponent implements OnInit {
    title = 'Week Editor';
    displayedColumns = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    weeks = new Dictionary<Week>();
    currentWeek: Week;

    constructor(private weekViewService: WeekViewService) {
        this.initWeeks();
    }

    initWeeks() {
        this.weeks = this.weekViewService.getWeeks();

        if (this.weeks.Count() > 0) {
            this.currentWeek = this.weeks.Item(this.weeks.Keys()[0]);
        } else {
            this.currentWeek = this.weeks.Item(this.weeks.Keys()[0]) !== null ? this.weeks[0] : new Week('New Week');
        }
    }

    ngOnInit(): void {
    }
}
