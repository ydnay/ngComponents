import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyNestedComponent } from './my-nested/my-nested.component';
import { MyNested2Component } from './my-nested2/my-nested2.component';
import { MyPropertyBindingComponent } from './my-property-binding/my-property-binding.component';
import { MyEventBindingComponent } from './my-event-binding/my-event-binding.component';
import { MyMixedBindingComponent } from './my-mixed-binding/my-mixed-binding.component';
import { MyTwoWayBindingComponent } from './my-two-way-binding/my-two-way-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    MyNestedComponent,
    MyNested2Component,
    MyPropertyBindingComponent,
    MyEventBindingComponent,
    MyMixedBindingComponent,
    MyTwoWayBindingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
