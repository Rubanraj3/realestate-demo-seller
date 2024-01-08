import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegUserWebComponent } from './reg-user/reg-user-web/reg-user-web.component';
import { RegUserMobileComponent } from './reg-user/reg-user-mobile/reg-user-mobile.component';
import { RegUserComponent } from './reg-user/reg-user.component';
import { PropertyViewComponent } from './property-view/property-view.component';
import { PropertyViewMobileComponent } from './property-view/property-view-mobile/property-view-mobile.component';
import { PropertyViewWebComponent } from './property-view/property-view-web/property-view-web.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { OtpTimerPipe } from './otp-timer.pipe';
import { LoaderComponent } from './loader/loader.component';
import { LoaderInterceptor } from './interceptor.interceptor';
import { CompeletedStreamComponent } from './compeleted-stream/compeleted-stream.component';
import { WebCompletedStreamComponent } from './compeleted-stream/web-completed-stream/web-completed-stream.component';
import { MobileCompletedStreamComponent } from './compeleted-stream/mobile-completed-stream/mobile-completed-stream.component';
import { StreamDetailsComponent } from './stream-details/stream-details.component';
import { WebStreamDetailsComponent } from './stream-details/web-stream-details/web-stream-details.component';
import { MobileStreamDetailsComponent } from './stream-details/mobile-stream-details/mobile-stream-details.component';
import { CompletdStreamVideoComponent } from './completd-stream-video/completd-stream-video.component';
import { MobileViewComponent } from './completd-stream-video/mobile-view/mobile-view.component';
import { WebViewComponent } from './completd-stream-video/web-view/web-view.component';
import { VideoHlsComponent } from './completd-stream-video/video-hls/video-hls.component';

@NgModule({
  declarations: [
    AppComponent,
    RegUserWebComponent,
    RegUserMobileComponent,
    RegUserComponent,
    PropertyViewComponent,
    PropertyViewMobileComponent,
    PropertyViewWebComponent,
    OtpTimerPipe,
    LoaderComponent,
    CompeletedStreamComponent,
    WebCompletedStreamComponent,
    MobileCompletedStreamComponent,
    StreamDetailsComponent,
    WebStreamDetailsComponent,
    MobileStreamDetailsComponent,
    CompletdStreamVideoComponent,
    MobileViewComponent,
    WebViewComponent,
    VideoHlsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
