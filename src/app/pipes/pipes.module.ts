import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderPipe } from './header/header.pipe';
import { TypeformatPipe } from './typeformat/typeformat.pipe';
import { AgePipe } from './age/age.pipe';

@NgModule({
    imports: [CommonModule],
    declarations: [HeaderPipe, TypeformatPipe, AgePipe],
    exports: [HeaderPipe, TypeformatPipe, AgePipe]
})

export class PipesModule { }

