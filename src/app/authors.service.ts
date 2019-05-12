import { Injectable, Inject } from '@angular/core';
import { Author } from '../author';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthorsService {
    authors: Author[] = [];
    selectAuthor: Author;

    constructor(private http: HttpClient) { }
    getApiList() {
        return this.http.get('https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0').
            pipe(
                tap(data => {
                    // tslint:disable-next-line: forin
                    for (const key in data) {
                        this.authors.push(
                            {
                                urlsSmall: data[key].urls.small,
                                urlsRegular: data[key].urls.regular,
                                name: data[key].user.name
                            });
                    }
                }),
                map(data => {
                    return this.authors;
                })

            );
    }
}
