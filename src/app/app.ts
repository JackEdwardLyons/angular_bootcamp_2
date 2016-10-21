import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Component } from '@angular/core';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ App ],
  bootstrap:    [ App ]
})


@Component({
  selector: 'app',
  template: `
    <div>
      <h3>
        Yo, world!
      </h3>
    </div>
  `
})
export class App {}