import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './error.component';
import { PipesModule } from '../pipes/pipes.module';


@NgModule({
    declarations: [ErrorComponent],
    exports: [ErrorComponent],
    imports: [CommonModule, PipesModule]
})
export class ErrorModule { }
