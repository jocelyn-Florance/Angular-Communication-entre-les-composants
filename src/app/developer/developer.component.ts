import {Component, Input, OnInit} from '@angular/core';
import {Developer} from '../core/models/Developer';
import {Skill} from '../core/models/Skill';

@Component({
    selector: 'app-developer',
    templateUrl: './developer.component.html',
    styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit {
    public developer: Developer;

    constructor() {
    }

    ngOnInit() {
        this.developer = new Developer('Simba', 'hello', 27, 'Homme', 'test bio', [
            new Skill('PHP', 'Logo PHP', 'php'),
            new Skill('ANGULAR', 'logo Angular', 'Angular'),
            new Skill('SYMFONY', 'logo symfony', 'symfony'),
            new Skill('NODE', 'logo node', 'node'),
        ]);
    }

}
