import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

// import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';


@Injectable()
export class PostProvider {
    server: string = 'http://localhost/server_api/';

    constructor( public http: Http ) {
    }

    postData(body, file) {
        // modificado let para const
        const type = 'application/json; charset=UTF-8';
        const headers = new Headers({ 'Content-Type': type });
        const options = new RequestOptions({ headers: headers });

        // propriedade .map() mudou para .pipe(map()):
        return this.http.post(this.server + file, JSON.stringify(body), options).pipe(map(res => res.json()));
    }
}
