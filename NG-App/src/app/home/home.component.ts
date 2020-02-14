import { Component, OnInit } from '@angular/core';
import { first, map } from 'rxjs/operators';

import { User } from '../models/user';
import { Album } from '../models/album';
import { Track } from '../models/track';
import { AuthenticationService } from '../services/authentication.service';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  currentUser: User;
  selectedAlbum: Album;
  albums: Album[] = [];
  tracks: Track[] = [];

  constructor(
    private authenticationService: AuthenticationService,
    private http: HttpClient
  ) {
      this.currentUser = this.authenticationService.currentUserValue;
  }

  ngOnInit() {

    let getAlbums = this.http.get<Array<Album>>("/assets/albums.json");

      let getPhotos = this.http.get<Array<Track>>("/assets/photos.json");

      return forkJoin([getAlbums, getPhotos]).subscribe(data => {
        this.albums = data[0];
        this.tracks = data[1];

        this.albums.forEach(album => {
          album.tracks = this.tracks.filter(x => x.albumId === album.id);
        });
      });
  }

  onSelectedAlbum(album: Album) {
    this.selectedAlbum = album;
  }

}
