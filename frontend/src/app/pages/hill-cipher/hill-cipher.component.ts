import { HttpEventType } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { DomSanitizer } from "@angular/platform-browser";
import { ConnectionService } from "../services/connection.service";
import { correctKey, correctKeyHill } from "../shared/correct-key.directive";

@Component({
  selector: "app-hill-cipher",
  templateUrl: "./hill-cipher.component.html",
  styleUrls: ["./hill-cipher.component.scss"],
})
export class HillCipherComponent implements OnInit {
  public arguments: FormGroup;
  public file: File;
  public fileUrl: any;
  public notAdmit: boolean;

  public sending: boolean;
  public errorUpload: boolean;
  public progress: string;

  public encrypted: boolean;
  public responseDymcMess: string;
  public imageToShow: any;

  constructor(
    private connection: ConnectionService,
    public domS: DomSanitizer
  ) {
    this.arguments = new FormGroup({
      key: new FormControl("", [
        Validators.required,
        correctKey([4, 9, 16], 0, 255),
        correctKeyHill(),
      ]),
    });
    this.file = null;
    this.fileUrl = null;
    this.notAdmit = false;

    this.sending = false;
    this.errorUpload = false;
    this.progress = "";

    this.encrypted = false;
    this.responseDymcMess = "";
  }

  ngOnInit(): void {}

  random(): void {
    let keyLen = Math.floor(Math.random() * 2 + 2);
    let arrBase = Array.from({ length: keyLen * keyLen }, () => 0);

    let invMaxDigVal: number[] = Array.from(
      { length: keyLen },
      () => 2 * Math.floor(Math.random() * 127) + 1
    );

    for (let i = 0; i < keyLen; i++) {
      for (let j = 0; j < keyLen; j++) {
        if (i == j) {
          arrBase[i * keyLen + j] = invMaxDigVal[i];
        }
        if (j > i) {
          arrBase[i * keyLen + j] = Math.floor(Math.random() * 255);
        }
      }
    }

    this.arguments.patchValue({
      key: arrBase.toString(),
    });
  }

  submit(): void {}

  addFileGroup(event) {
    /*
     * Adds image file from selection, only admits valid image file types
     */
    let auxType: string;
    this.encrypted = false;
    auxType = event.target.files[0].name
      .substring(event.target.files[0].name.indexOf("."))
      .toLowerCase();

    if (auxType === ".png" || auxType === ".jpeg" || auxType === ".jpg") {
      this.file = event.target.files[0];
      this.fileUrl = this.domS.bypassSecurityTrustResourceUrl(
        URL.createObjectURL(event.target.files[0])
      );
      this.notAdmit = false;
    } else {
      this.notAdmit = true;
    }
  }

  removeFile() {
    this.encrypted = false;
    this.file = null;
    this.notAdmit = false;
  }

  encrypt() {
    /*
     * Encrypts an image. Sends formData with the plain image and matrix key to
     * the server API.
     */
    const formData = new FormData();
    formData.append(
      "file",
      this.file,
      "img" +
        this.file.name.substring(this.file.name.indexOf(".")).toLowerCase()
    );
    formData.append("key", this.key.value);

    this.sending = true;
    this.connection.hillEncrypt(formData).subscribe((events) => {
      // sending
      if (events.type === HttpEventType.UploadProgress) {
        const auxProgress = Math.round((events.loaded / events.total) * 100);
        if (auxProgress === 100) {
          this.progress = "Encrypting";
        } else {
          this.progress = "Uploading: " + auxProgress.toString() + "%";
        }

        // response
      } else if (events.type === HttpEventType.Response) {
        // Can't properly handle errors with blob response type, so this if
        // statement does nothing
        if (events.body["error"]) {
          this.errorUpload = true;
          this.encrypted = false;
        } else {
          this.createImageFromBlob(events.body);
          this.encrypted = true;
          this.responseDymcMess = "Encrypted";
        }
        this.sending = false;
      }
    });
  }

  decrypt() {
    /*
     * Decrypts an image. Sends formData with the plain image and matrix key to
     * the server API.
     */
    const formData = new FormData();
    formData.append(
      "file",
      this.file,
      "img" +
        this.file.name.substring(this.file.name.indexOf(".")).toLowerCase()
    );
    formData.append("key", this.key.value);

    this.sending = true;
    this.connection.hillDecrypt(formData).subscribe((events) => {
      // sending
      if (events.type === HttpEventType.UploadProgress) {
        const auxProgress = Math.round((events.loaded / events.total) * 100);
        if (auxProgress === 100) {
          this.progress = "Decypting";
        } else {
          this.progress = "Uploading: " + auxProgress.toString() + "%";
        }

        // response
      } else if (events.type === HttpEventType.Response) {
        // Can't properly handle errors with blob response type, so this if
        // statement does nothing
        if (events.body["error"]) {
          this.errorUpload = true;
          this.encrypted = false;
        } else {
          this.createImageFromBlob(events.body);
          this.encrypted = true;
          this.responseDymcMess = "Decrypted";
        }
        this.sending = false;
      }
    });
  }

  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener(
      "load",
      () => {
        this.imageToShow = reader.result;
      },
      false
    );

    if (image) {
      reader.readAsDataURL(image);
    }
  }

  get key(): AbstractControl {
    return this.arguments.get("key");
  }
}
