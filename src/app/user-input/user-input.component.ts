import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { InvestmentService } from '../investment.service';

@Component({
    selector: 'app-user-input',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './user-input.component.html',
    styleUrl: './user-input.component.css',
})
export class UserInputComponent {
    enteredInitialInvestment: string = '0';
    enteredAnnualInvestment: string = '0';
    enteredExpectedReturn: string = '5';
    enteredDuration: string = '0';

    constructor(private investmentService: InvestmentService) {}

    onSubmit() {
        this.investmentService.calculateInvestmentResults({
            initialInvestment: +this.enteredInitialInvestment,
            annualInvestment: +this.enteredAnnualInvestment,
            expectedReturn: +this.enteredExpectedReturn,
            duration: +this.enteredDuration,
        });

        this.enteredInitialInvestment = '0';
        this.enteredAnnualInvestment = '0';
        this.enteredExpectedReturn = '5';
        this.enteredDuration = '0';
    }
}
