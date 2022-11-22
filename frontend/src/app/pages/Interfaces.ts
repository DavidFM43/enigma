export interface textEncyptersReponse {
  cipherText: string;
  error: boolean;
  typeError: string;
}
export interface textDecyptersReponse {
  decipherText: string;
  error: boolean;
  typeError: string;
}
export interface textEncyptersRequest {
  keys: number[];
  plainText: string;
}
export interface shiftAttackerResponse {
  options: string[];
  error: boolean;
  typeError: string;
}
export interface vigenereKeyAttackResponse {
  possibleKey: string;
  possiblePlainText: string;
  error: boolean;
  typeError: string;
}
export interface vigenereNoKeyAttackResponse {
  ioc: {
    mean_iocs: number[];
    m_ioc: number;
  };
  kasiski: {
    trg: string[];
    trg_indices: number[];
    m_kasiski: number;
  };
  error: boolean;
  typeError: string;
}
export interface affineAttackerResponse {
  plainText: string;
  key: number[];
  error: boolean;
  typeError: string;
}
export interface hillAttackerResponse {
  possibleKeys: [number[]];
  error: boolean;
  typeError: string;
}
export interface substitutionAttackerResponse {
  analysis: {
    bigrams: [string, number[]];
    letters: [string, number];
    trigrams: [string, number[]];
  };
  error: boolean;
  typeError: string;
}
export interface gammaEncyptersReponse {
  error?: boolean,
  cipherText: string[],
  percentage: number,
  grapgJSON: string
}
export interface gammaDecyptersReponse {
  decipherText: string;
  error: boolean;
  typeError: string;
}
export interface RSAPublicKey{
  N: string,
  E: number
}
export interface RSAPrivateKey{
  N: string,
  E?: number,
  D: string,
  P?: number,
  Q?: number,

}
export interface RSAND{
  N: string,
  D: string
}
export interface RSAKeys{
  publicKey: RSAPublicKey,
  privateKey: RSAPrivateKey
}
export interface ElGamalKeys{
  P: string,
  G: string,
  H?: string,
  X?: string
}