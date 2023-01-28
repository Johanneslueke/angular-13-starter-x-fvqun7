import { Component, OnInit } from '@angular/core';
import { UIStateService } from 'src/app/services/uistate.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css'],
})
export class FileUploadComponent implements OnInit {
  constructor(public uistate: UIStateService) {}

  ngOnInit(): void {}
}
