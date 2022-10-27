import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { CustomPipeDemoComponent } from './custom-pipe-demo/custom-pipe-demo.component';
import { GenderPipe } from './gender.pipe';
import { UsingServiceComponent } from './using-service/using-service.component';

@NgModule({
  declarations: [
    AppComponent,
    PipeDemoComponent,
    CustomPipeDemoComponent,
    GenderPipe,
    UsingServiceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
