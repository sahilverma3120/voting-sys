import { Component, OnInit } from '@angular/core';
import { BlockchainService } from 'src/app/services/blockchain.service';

@Component({
  selector: 'app-pending-transactions',
  templateUrl: './pending-transactions.component.html',
  styleUrls: ['./pending-transactions.component.scss']
})
export class PendingTransactionsComponent implements OnInit {

  public pendingVotes = [];
  constructor(private blockchainService: BlockchainService) {
    this.pendingVotes = blockchainService.getPendingVotes();
   }

  ngOnInit(): void {
  }

  minePendingVotes(){
    this.blockchainService.minePendingVotes();
  }
}
