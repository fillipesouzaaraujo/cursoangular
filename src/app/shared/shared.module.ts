import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { BannerComponent } from './components/banner/banner.component';
import { LayoutComponent } from './components/layout/layout.component';
import { MenuComponent } from './components/menu/menu.component';
import { RodapeComponent } from './components/rodape/rodape.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule,
    CommonModule
  ],
  declarations: [
    CardComponent,
    BannerComponent,
    LayoutComponent,
    MenuComponent,
    RodapeComponent
  ],
  exports: [
    CardComponent,
    BannerComponent
  ]
})
export class SharedModule { }
