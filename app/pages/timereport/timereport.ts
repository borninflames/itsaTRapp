import {Type} from 'angular2/core';
import {Page} from 'ionic-framework/ionic';
import {Calendar} from '../calendar/calendar';

@Page({
    templateUrl: 'build/pages/timereport/timereport.html',
})
export class TimeReport {

    projects: Array<Project>;
    searchQuery: string;
    calendar: Type = Calendar;

    constructor() {
        this.searchQuery = '';
        this.getProjects();
    }

    getProjects() {
        this.projects = [];
        for (let i: number = 0; i < 20; i++) {
            this.projects.push({ id: 'ABC_F0' + i.toString(), name: 'Project name ' + i.toString() });
        }
    }

    searchItems(searchbar) {
        this.getProjects();

        // set q to the value of the searchbar
        var q = searchbar.value;

        // if the value is an empty string don't filter the items
        if (q.trim() == '') {
            return;
        }

        this.projects = this.projects.filter((v) => {
            if (v.name.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                return true;
            }
            return false;
        })
    }

    projectSelected(project: Project) {
        console.log(project);
    }
}

interface Project {
    id: string;
    name: string;
}