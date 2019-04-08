import {Component, OnInit, Input} from '@angular/core';
import {Skill} from '../core/models/Skill';
import {Developer} from '../core/models/Developer';

@Component({
    selector: 'app-skill',
    templateUrl: './skill.component.html',
    styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
    @Input() public skill: Skill;

    constructor() {
    }

    ngOnInit() {

    }

}
