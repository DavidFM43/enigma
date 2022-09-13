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
export interface vigenereKeyAttackResponse{
    possibleKey:string;
    possiblePlainText: string;
    error: boolean;
    typeError: string;
}
export interface vigenereNoKeyAttackResponse{
    ioc:{
        mean_iocs: number[],
        m_ioc: number
    },
    kasiski:{
        trg: string[],
        trg_indices: number[],
        m_kasiski: number

    },
    error: boolean;
    typeError: string;
}
