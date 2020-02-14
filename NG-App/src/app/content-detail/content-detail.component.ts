import { Component, OnInit, Input } from '@angular/core';
import { Album } from '../models/album';

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.scss']
})
export class ContentDetailComponent implements OnInit {
@Input() selectedAlbum: Album;

  constructor() { }

  ngOnInit() {
  }

}
