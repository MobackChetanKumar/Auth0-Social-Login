import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // Import the module into the application, with configuration
    AuthModule.forRoot({
      domain: 'dev-ujzgl0vq.us.auth0.com',
      clientId: '74yO5k3rBtwyGewCDtbxm2Ub7gNjXR3n',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
