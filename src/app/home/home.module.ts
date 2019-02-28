import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { PipesModule } from '../pipes/pipes.module';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';

@NgModule({
    declarations: [HomeComponent],
    exports: [HomeComponent],
    imports: [CommonModule, PipesModule, MatExpansionModule, MatProgressBarModule, MatCardModule, MatTableModule]
})
export class HomeModule { }
