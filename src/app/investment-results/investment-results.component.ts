import { Component, Input } from '@angular/core';
import { ResultsData } from '../results-data.model';

@Component({
    selector: 'app-investment-results',
    standalone: true,
    imports: [],
    templateUrl: './investment-results.component.html',
    styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
    @Input() results?: ResultsData[];
}