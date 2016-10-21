import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { App } from '../app';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ App, Main ],
  bootstrap:    [ App ]
})


@Component({
  selector: 'main-container',
  template: `
    <div>
      <main class="main">
       <h3>
         Content wil go here... 
        </h3>
      </main>
    </div>
  `
})
export class Main {}