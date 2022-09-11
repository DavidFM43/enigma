export interface textEncyptersReponse{
    cipherText: string;
    error: boolean;
    typeError: string;
}
export interface textDecyptersReponse{
    decipherText: string;
    error: boolean;
    typeError: string;
}
export interface textEncyptersRequest{
    keys: number[];
    plainText: string; 
}