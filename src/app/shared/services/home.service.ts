import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Distribuidores } from "../interfaces/home.interface";
import { apiHomeUrl, apiHomeSendUrl } from "../constant/api.constant";
import { sendValues } from '../../shared/interfaces/home.interface';

@Injectable({
    providedIn: 'root'
})

export class HomeService {
    constructor(
        private _http: HttpClient
    ) {}

    getDistribuidores(): Observable<Distribuidores> {
        return this._http.get<Distribuidores>( apiHomeUrl );
    }

    sendCotizacion(values: sendValues): Observable<any> {
        console.log('antes del servicio', values);
        let dat = JSON.stringify(values);
        console.log('fomrt', dat);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.post<any>(apiHomeSendUrl, dat, {headers: headers});
    }
}