import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { Main } from './containers';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ App, Main ],
  bootstrap:    [ App ]
})


@Component({
  selector: 'app',
  template: `
    <div>
      <main-container></main-container>
    </div>
  `
})
export class App {}