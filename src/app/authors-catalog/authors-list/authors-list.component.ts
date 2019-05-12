import { Component, OnInit } from '@angular/core';
import { AuthorsService } from 'src/app/authors.service';
import { Author } from 'src/author';

@Component({
  selector: 'app-authors-list',
  templateUrl: './authors-list.component.html',
  styleUrls: ['./authors-list.component.css']
})
export class AuthorsListComponent implements OnInit {
  authorsData: Array<Author>;
  constructor(public autorsService: AuthorsService) { }

  ngOnInit() {
    this.autorsService.getApiList().subscribe(data => {
      this.authorsData = data;
    });
  }

}
