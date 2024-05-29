import { Component, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

import { ResultsData } from '../results-data.model';

@Component({
    selector: 'app-investment-results',
    standalone: true,
    imports: [CurrencyPipe],
    templateUrl: './investment-results.component.html',
    styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
    @Input() results?: ResultsData[];
}
