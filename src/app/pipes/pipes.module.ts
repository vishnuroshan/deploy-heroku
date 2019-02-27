import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderPipe } from './header/header.pipe';
import { TypeformatPipe } from './typeformat/typeformat.pipe';

@NgModule({
    imports: [CommonModule],
    declarations: [HeaderPipe, TypeformatPipe],
    exports: [HeaderPipe, TypeformatPipe]
})

export class PipesModule { }

