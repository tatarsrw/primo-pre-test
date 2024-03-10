import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExtraOptions, PreloadAllModules, RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { FuseModule } from '@fuse';
import { AppComponent } from 'app/app.component';
import { appRoutes } from 'app/app.routing';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { LottieModule } from 'ngx-lottie';
import player from "lottie-web";

const routerConfig: ExtraOptions = {
    preloadingStrategy: PreloadAllModules,
    scrollPositionRestoration: 'enabled'
};

export function playerFactory(): any {
    return player;
}

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(appRoutes, routerConfig),
        FuseModule,
        LottieModule.forRoot({ player: playerFactory }),
        MarkdownModule.forRoot({}),
        AngularFireAuthModule,
    ],
    bootstrap: [
        AppComponent
    ],
    providers: [
        { provide: MAT_DATE_LOCALE, useValue: 'th-TH' },
    ]
})
export class AppModule {
}


