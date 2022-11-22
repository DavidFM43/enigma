import { Component, OnInit } from "@angular/core";
import {
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from "@angular/forms";

import {
  rabinDecryptersResponse,
  rabinKeys,
  textEncyptersReponse,
} from "../Interfaces";
import { ConnectionService } from "../services/connection.service";
import { isPrimeVal } from "../shared/correct-key.directive";

@Component({
  selector: "app-rabin-cipher",
  templateUrl: "./rabin-cipher.component.html",
  styleUrls: ["./rabin-cipher.component.scss"],
})
export class RabinCipherComponent implements OnInit {
  cipherParams!: UntypedFormGroup;
  public submitted: boolean;
  public cipherText: string[];
  public responseDymcMess: string;

  constructor(private connection: ConnectionService) {
    this.cipherText = [];
    this.submitted = false;
    this.responseDymcMess = "";
  }

  ngOnInit(): void {
    this.cipherParams = new UntypedFormGroup({
      key: new UntypedFormControl(
        "14443403977770638083196388074072412771752027790723542214752600238839559282478036432190958080480983403567162424063045086776220245076110113721218865157184417970812309971792122386473221446050308937567624498512942890562368520503660118043639279301760715310642938008684951217964541488511935350354482809830166115393763556779195661854049003081420465314650369956615692937779924819875592272159252631301517464245861062082622169338580998538008704555516180612002034288665241495253548826314209874563807205642631828042192396071686788646015797612222048748515367920269250157047147985942627954931828511795003899934920947068931792634569",
        [Validators.required, Validators.pattern("[1-9][0-9]*")]
      ),
      primeP: new UntypedFormControl(
        "135648942413790849897897911838681155598521669805497911234458726600362059728976843982146138281723456386392185151013475677683211386965337970962725771733129761317202333164009440274059913083166889973115370669946795272878868079932904846472401237372813788562974453670113388297677484510268428898014357412803924175051",
        [Validators.required, isPrimeVal()]
      ),
      primeQ: new UntypedFormControl(
        "106476347848785282916716828087207671024561951299757411798047117398254813412031975039825077404473801563560893720170973231560091041645426113806470165200441948249009597935796606190421348849225640301842865031064597889227374739270777328243164882655362809416364056858184496320184376758645891256615120690684109378619",
        [Validators.required, isPrimeVal()]
      ),
      plainText: new UntypedFormControl("attack at dawn", [
        Validators.required,
        Validators.pattern("[+/=0-9a-zA-Z][ +/=0-9a-zA-Z]*"),
      ]),
    });
  }

  get key() {
    return this.cipherParams.get("key")!;
  }

  get primeP() {
    return this.cipherParams.get("primeP")!;
  }

  get primeQ() {
    return this.cipherParams.get("primeQ")!;
  }

  get plainText() {
    return this.cipherParams.get("plainText")!;
  }

  random(): void {
    this.connection.rabinGetKeys().subscribe((ansKeys: rabinKeys) => {
      this.key.setValue(ansKeys.publicKey.N);
      this.primeQ.setValue(ansKeys.privateKey.P);
      this.primeP.setValue(ansKeys.privateKey.Q);
    });
  }

  encrypt(): void {
    this.connection
      .rabinEncrypt(this.key.value, this.plainText.value.replace(/ /g, ""))
      .subscribe((ans: textEncyptersReponse) => {
        if (!ans.error) {
          this.cipherText = [ans.cipherText];
          this.responseDymcMess = "Cipher";
        }
        this.submitted = true;
      });
  }

  decrypt(): void {
    this.connection
      .rabinDecrypt(
        this.primeP.value,
        this.primeQ.value,
        this.plainText.value.replace(/ /g, "")
      )
      .subscribe((ans: rabinDecryptersResponse) => {
        if (!ans.error) {
          console.log(ans);
          this.cipherText = ans.decipherTextOps;
          this.responseDymcMess = "Decipher";
        }
        this.submitted = true;
      });
  }
}
