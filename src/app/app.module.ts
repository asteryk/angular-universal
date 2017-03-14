import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TransferHttpModule } from '../modules/transfer-http/transfer-http.module';


@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        TransferHttpModule,
        RouterModule.forRoot([
            { path: '', component: HomeComponent, pathMatch: 'full' },
            { path: 'lazy', loadChildren: './+lazy/lazy.module#LazyModule' }
        ])
    ],
    providers: [
        { provide: APP_BASE_HREF, useValue: '/' }
    ],
    declarations: [AppComponent, HomeComponent],
    exports: [AppComponent]
})
export class AppModule { }
