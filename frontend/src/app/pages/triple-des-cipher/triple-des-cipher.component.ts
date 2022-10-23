import { HttpEventType } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { DomSanitizer } from "@angular/platform-browser";
import { ConnectionService } from "../services/connection.service";

@Component({
  selector: "app-triple-des-cipher",
  templateUrl: "./triple-des-cipher.component.html",
  styleUrls: ["./triple-des-cipher.component.scss"],
})
export class TripleDesCipherComponent implements OnInit {
  cipherParams!: FormGroup;

  public file: File;
  public fileUrl: any;
  public notAdmit: boolean;

  public sending: boolean;
  public errorUpload: boolean;
  public progress: string;

  public encrypted: boolean;
  public responseDymcMess: string;
  public imageToShow: any;

  modes = ["ECB", "CBC", "OFB", "CFB", "CTR"];
  ivModes = ["CBC", "OFB", "CFB"];

  ngOnInit(): void {
    this.cipherParams = new FormGroup({
      key: new FormControl("AA 07 63 77 AE 1B 8E A6 B7 42 01 59 0B 2C B8 14", [
        Validators.required,
        Validators.pattern("([0-9A-F]{2} ){15}[0-9A-F]{2}"),
      ]),
      mode: new FormControl("ECB", Validators.required),
      initializationVector: new FormControl(
        "C0 93 86 36 11 F7 41 A7 E2 4B 15 66 B8 A5 CD 9B",
        [
          Validators.required,
          Validators.pattern("([0-9A-F]{2} ){15}[0-9A-F]{2}"),
        ]
      ),
      counter: new FormControl(
        "D4 68 48 C7 A1 44 32 D9 B7 B4 EF 13 D5 D0 92 52",
        [
          Validators.required,
          Validators.pattern("([0-9A-F]{2} ){15}[0-9A-F]{2}"),
        ]
      ),
    });
  }

  constructor(
    private connection: ConnectionService,
    public domS: DomSanitizer
  ) {
    this.file = null;
    this.fileUrl = null;
    this.notAdmit = false;

    this.sending = false;
    this.errorUpload = false;
    this.progress = "";

    this.encrypted = false;
    this.responseDymcMess = "";
  }

  get key() {
    return this.cipherParams.get("key")!;
  }

  get mode() {
    return this.cipherParams.get("mode")!;
  }
  get initializationVector() {
    return this.cipherParams.get("initializationVector")!;
  }
  get counter() {
    return this.cipherParams.get("counter")!;
  }

  random() {
    let result = [];
    let hexRef = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ];
    for (let n = 0; n < 16; n++) {
      let hex = [
        hexRef[Math.floor(Math.random() * 16)],
        hexRef[Math.floor(Math.random() * 16)],
      ].join("");
      result.push(hex);
    }

    this.key.setValue(result.join(" "));
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
    formData.append("mode", this.mode.value);
    if (this.ivModes.indexOf(this.mode.value) > -1) {
      formData.append("initializationVector", this.initializationVector.value);
    } else if (this.mode.value === "CTR") {
      formData.append("counter", this.counter.value);
    }

    this.sending = true;
    this.connection.tripleDesEncrypt(formData).subscribe((events) => {
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
    formData.append("mode", this.mode.value);
    if (this.ivModes.indexOf(this.mode.value) > -1) {
      formData.append("initializationVector", this.initializationVector.value);
    } else if (this.mode.value === "CTR") {
      formData.append("counter", this.counter.value);
    }

    this.sending = true;
    this.connection.tripleDesDecrypt(formData).subscribe((events) => {
      // sending
      if (events.type === HttpEventType.UploadProgress) {
        const auxProgress = Math.round((events.loaded / events.total) * 100);
        if (auxProgress === 100) {
          this.progress = "Decrypting";
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
}
