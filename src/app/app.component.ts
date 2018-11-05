import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  listePosts = [
    {
      title : "Mon premier Post",
      desc : "J'ai essayer de faire un test, mais celui ci a echouer, alors j'ai refais un autre test... mais il a echouer encore. alors j'ai refait un test... et il a encore echouer mais j'ai alors refait un test..."
    },
    {
      title : "Mon Deuxième Post",
      desc : "Error : NullPointerException founded (ceci une fausse erreur)"
    },
    {
      title : "Encore un Post",
      desc : "Description ????"
    },
    {
      title : "TOUCHE PAS A MON POST!",
      desc : "vous avez compris la reference ? 8D"
    },
  ]



}
