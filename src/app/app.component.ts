import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts = [
    {
      title: 'Premier Post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam architecto autem dicta eius facilis ' +
        'laborum neque tempora. Alias asperiores, aspernatur fugiat, laudantium neque nobis repellendus saepe, sapiente ' +
        'similique suscipit unde!'
    },
    {
      title: 'Deuxième Post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam architecto autem dicta eius facilis ' +
        'laborum neque tempora. Alias asperiores, aspernatur fugiat, laudantium neque nobis repellendus saepe, sapiente ' +
        'similique suscipit unde!'
    },
    {
      title: 'Troisième Post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam architecto autem dicta eius facilis ' +
        'laborum neque tempora. Alias asperiores, aspernatur fugiat, laudantium neque nobis repellendus saepe, sapiente ' +
        'similique suscipit unde!'
    }
  ];
}
