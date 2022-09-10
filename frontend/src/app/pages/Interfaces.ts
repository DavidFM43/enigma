export interface textEncyptersReponse{
    decryptedText: string;
    error: boolean;
    typeError: string;
}
export interface textEncyptersRequest{
    keys: number[];
    textToEncrypt: string; 
}