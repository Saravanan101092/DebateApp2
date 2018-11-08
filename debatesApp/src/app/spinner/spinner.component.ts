import {Component, Input, OnDestroy} from '@angular/core';

@Component({
    selector: 'app-spinner',
    template: `
    <div [hidden]="!isDelayedRunning" class="spinnercontainer">
        <div class="spinner">  
           <div class="double-bounce1"></div>
            <div class="double-bounce2"></div>
            <!-- <img id="loadIcon"  width="80px" height="80px" src="/assets/img/loading.gif">-->
        </div>
    </div>  
    `,
    styleUrls:['./spinner.component.css']
})
export class SpinnerComponent implements OnDestroy {  
    private currentTimeout: any;
    private isDelayedRunning: boolean = false;
    @Input()
    public delay: number = 300;

    @Input()
    public set isRunning(value: boolean) {
        if (!value) {
            this.cancelTimeout();
            this.isDelayedRunning = false;
        }

        if (this.currentTimeout) {
            return;
        }

        this.currentTimeout = setTimeout(() => {
            this.isDelayedRunning = value;
            this.cancelTimeout();
        }, this.delay);
    }

    private cancelTimeout(): void {
        clearTimeout(this.currentTimeout);
        this.currentTimeout = undefined;
    }

    ngOnDestroy(): any {
        this.cancelTimeout();
    }
}