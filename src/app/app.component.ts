import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    isAll:boolean = true;
    showNav:boolean = true;


    public clickAll(): void{
      this.isAll = true;
    }

    public clickThis(): void{
      this.isAll = false;
    }


    public hideNav(){
        this.showNav = false;
    }

    public showNav1(){
      this.showNav = true;
    }


}
