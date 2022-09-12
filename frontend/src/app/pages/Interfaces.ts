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
export interface shiftAttackerResponse{
    options:string[];
    error: boolean;
    typeError: string;
}
export interface vigeneretAttackerResponse{
    possibleKey:string;
    possiblePlainText: string;
    error: boolean;
    typeError: string;
}
export interface vigeneretKasiskiResponse{
    options:string[];
    error: boolean;
    typeError: string;
}
export interface vigeneretIocResponse{
    options:string[];
    error: boolean;
    typeError: string;
}