import { Component, OnInit } from '@angular/core';
import { BlockchainService } from 'src/app/services/blockchain.service';
import {Vote} from 'bc-javascript/src/blockchain';

@Component({
  selector: 'app-create-vote',
  templateUrl: './create-vote.component.html',
  styleUrls: ['./create-vote.component.scss']
})
export class CreateVoteComponent implements OnInit {
  public newVt;
  public walletKey;

  constructor(private blockchainService: BlockchainService) {
      this.walletKey = blockchainService.walletKeys[0];
   }

  ngOnInit(): void {
    this.newVt = new Vote();
  }

  createVote(){
    this.newVt.fromAddress = this.walletKey.publicKey;
    this.newVt.signVote(this.walletKey.keyObj);

    this.blockchainService.addVote(this.newVt);

    this.newVt = new Vote();
  }
}
