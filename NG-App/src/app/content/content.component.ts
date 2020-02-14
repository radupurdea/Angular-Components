import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Album } from '../models/album';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  @Input()  albums: Album[];
  @Output() selectedAlbum = new EventEmitter<Album>();
  
  constructor() { }

  ngOnInit() {
  }

  selectAlbum(album: Album){
    this.selectedAlbum.emit(album);
  }
}
