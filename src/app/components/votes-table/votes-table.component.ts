import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-votes-table',
  templateUrl: './votes-table.component.html',
  styleUrls: ['./votes-table.component.scss']
})
export class VotesTableComponent implements OnInit {
  @Input() public votes = [];
  
  constructor() { }

  ngOnInit(): void {
  }

}
