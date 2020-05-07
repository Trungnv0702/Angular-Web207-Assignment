import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';

interface ImageInfo {
  link: string;
}

@Injectable({
  providedIn: 'root'
})
export class UploadImageService {
  private images: object[] = [];
  private url: string = "https://api.imgur.com/3/image";
  private clientId: string = "68028fae8912fdb";
  private accessToken: string = "0c896e82286bc8978127dd4dbef1bf6f7da42658";
  imageLink: any;
  constructor(private http: HttpClient) { }


  uploadImage(imageFile: File) {
    let formData = new FormData();
    formData.append("image", imageFile, imageFile.name);

    let header = new HttpHeaders({
      authorization: "Bearer " + this.accessToken
    });

    const imageData = this.http
      .post(this.url, formData, { headers: header }).toPromise();
    return imageData;


  }

  getImages() {
    return this.imageLink;
  }
}
