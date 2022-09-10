import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ConnectionService } from '../services/connection.service';

@Component({
  selector: 'app-hill-cipher',
  templateUrl: './hill-cipher.component.html',
  styleUrls: ['./hill-cipher.component.scss']
})
export class HillCipherComponent implements OnInit {

  
  
  public arguments: FormGroup;
  private loadChild: boolean;
  public file: File;
  public fileUrl: any;
  public notAdmit: boolean;

  public sending: boolean;
  public errorUpload: boolean;
  public progress: string;

  public added: boolean;

  constructor(private conn: ConnectionService, public domS: DomSanitizer) {
    this.arguments = new FormGroup(
      {
        key: new FormControl('', [Validators.required, Validators.pattern('^[1-9][0-9]?$|^26$')])
      }
    )
    this.loadChild = false;
    this.file = null;
    this.fileUrl = null;
    this.notAdmit = false;
    this.sending = false;
    this.errorUpload = false;
    this.progress = '';
        this.added = false;
   }

  ngOnInit(): void {
  }

  random(): void{
    let keyLen = Math.floor(Math.random() * 26)
    let arrBase = Array.from({length: keyLen}, () => Math.floor(Math.random() * 26));

    this.arguments.patchValue(
      {
        key: arrBase.toString()
      }
    );

  }

 

  submit():void{
    
  }

  /*submit(){
    this.added = false;
    this.conn.add(this.adder.edit.value).subscribe((ans: boolean) => {
      this.added = true;
    });
  }*/

  addFileGroup(event) {
    let auxType: string;
    this.added = false;
    auxType = event.target.files[0].name.substring(event.target.files[0].name.indexOf('.')).toLowerCase();
    if (auxType === '.png' || auxType === '.jpeg' || auxType === '.jpg') {

      this.file = event.target.files[0];

      this.fileUrl = this.domS.bypassSecurityTrustResourceUrl(URL.createObjectURL(event.target.files[0]));
      this.notAdmit = false;

    } else {
      this.notAdmit = true;
    }

    console.log(this.file);
  }
  removeFile() {
    this.added = false;
    this.file = null;
    this.notAdmit = false;
    console.log(this.file);
  }

  detecteItem() {
    const formData = new FormData();
    formData.append('file', this.file, 'img' + this.file.name.substring(this.file.name.indexOf('.')).toLowerCase());

    /*this.sending = true;
    this.conn.detecteItem(formData).subscribe((events) => {
        if (events.type === HttpEventType.UploadProgress) {
          const auxProgress = Math.round(events.loaded / events.total * 100);
          if (auxProgress === 100) {
            this.progress = 'Procesando';
          } else {
            this.progress = 'Subiendo: ' + auxProgress.toString() + '%';
          }
        } else if (events.type === HttpEventType.Response) {
          // tslint:disable-next-line:no-string-literal
          if (!(events.body['query'])) {
            this.errorUpload = true;
            this.recomendations = [];
          } else {
            this.progress = 'Guardado exitosamente.';
            // tslint:disable-next-line:no-string-literal
            this.recomendations = events.body['ans'];
          }
          this.sending = false;
        }
     });*/
  }



}
