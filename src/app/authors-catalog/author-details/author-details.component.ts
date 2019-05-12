import { Component, OnInit, Input } from '@angular/core';
import { Author } from 'src/author';
import { AuthorsService } from 'src/app/authors.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-author-details',
  templateUrl: './author-details.component.html',
  styleUrls: ['./author-details.component.css']
})
export class AuthorDetailsComponent implements OnInit {
  author: Author;
  constructor(public authorsService: AuthorsService, public router: Router) { }

  ngOnInit() {
    this.author = this.authorsService.selectAuthor;
  }

}
