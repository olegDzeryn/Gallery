import { Component, OnInit, Input } from '@angular/core';
import { Author } from 'src/author';
import { AuthorsService } from 'src/app/authors.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-author-item',
  templateUrl: './author-item.component.html',
  styleUrls: ['./author-item.component.css']
})

export class AuthorItemComponent implements OnInit {
  @Input() author: Author;
  constructor(public authorsService: AuthorsService, public router: Router) { }

  ngOnInit() { }
  oneAuthor() {
    this.router.navigate(['authors/author']);
    this.authorsService.selectAuthor = this.author;
  }
}
