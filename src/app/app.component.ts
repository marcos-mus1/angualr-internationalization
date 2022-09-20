import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    public translate: TranslateService,
    private title: Title
  ){
    translate.addLangs(['fr-FR','en-GB']);
    const lang = translate.getBrowserLang();
    if((lang !== 'en-GB') && (lang !== 'fr-FR')){
      translate.setDefaultLang('fr-FR');
    }
    
  }
}
