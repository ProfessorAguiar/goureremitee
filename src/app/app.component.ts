import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public logado=false
  public loginTest:string='root'
  public senhaTest:string='123456'
  public logar(login:any, senha:any) {
    if(login===this.loginTest && senha===this.senhaTest){
      this.logado=true
    }
  }
  constructor() {}
}
