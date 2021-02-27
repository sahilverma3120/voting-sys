import { Injectable } from '@angular/core';
import {BlockChain} from 'bc-javascript/src/blockchain';
import EC from 'elliptic';


@Injectable({
  providedIn: 'root'
})
export class BlockchainService {
  public blockchainInstance = new BlockChain();
  public walletKeys = [];
  
  constructor() { 
    this.blockchainInstance.difficulty = 1;
    this.blockchainInstance.minePendingVotes('Carlos Masson');

    this.generateWalletKeys();
  }

  getBlocks(){
    return this.blockchainInstance.chain;
  }

  addVote(vt){
    this.blockchainInstance.addVote(vt);
  }

  getPendingVotes(){
    return this.blockchainInstance.pendingVotes;
  }

  minePendingVotes(){
    this.blockchainInstance.minePendingVotes(this.walletKeys[0].publicKey);
    
  }

  private generateWalletKeys(){
    const ec = new EC.ec('secp256k1');
    const key = ec.genKeyPair();
    
    this.walletKeys.push({
      keyObj: key,
      publicKey: key.getPublic('hex'),
      privateKey: key.getPrivate('hex'),

    })
      
  }
}
