import {Page} from 'ionic-framework/ionic';
import {TimeReport} from '../timereport/timereport';
import {Calendar} from '../calendar/calendar';
import {Settings} from '../settings/settings';

// https://angular.io/docs/ts/latest/api/core/Type-interface.html
import {Type} from 'angular2/core';


@Page({
    templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    timereportRoot: Type = TimeReport;
    calendarRoot: Type = Calendar;
    settingsRoot: Type = Settings;

    constructor() {

    }
}
