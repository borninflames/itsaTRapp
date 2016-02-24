import {Type} from 'angular2/core';
import {Page} from 'ionic-framework/ionic';

@Page({
    templateUrl: 'build/pages/timereport/timereport.html',
})
export class TimeReport {
    project: Project;
    datetime: Date;
    day: number;
    month: number;
    year: number;
    hours: number;

    projects: Array<Project>;
    days: Array<number>;
    months: Array<number>;
    years: Array<number>;

    constructor() {
        this.getProjects();
        this.getYears();
        this.getMonths();
        this.getDays();
        let today = new Date();
        this.datetime = today;
        this.year = today.getFullYear();
        this.month = today.getMonth();
        this.day = today.getDate();
    }

    getProjects() {
        this.projects = [];
        for (let i: number = 0; i < 20; i++) {
            this.projects.push({ id: 'ABC_F0' + i.toString(), name: 'Project name ' + i.toString() });
        }
    }

    getYears() {
        this.years = [];
        let startYear: number = new Date().getFullYear() - 10;
        for (let i: number = startYear; i < startYear + 11; i++) {            
            this.years.push(i);
        }
    }

    getMonths() {
        this.months = [];
        for (let i: number = 1; i < 13; i++) {
            this.months.push(i);
        }
    }

    getDays() {
        this.days = [];
        for (let i: number = 1; i < 32; i++) {
            this.days.push(i);
        }
    }
}

interface Project {
    id: string;
    name: string;
}