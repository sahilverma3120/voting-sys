import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlockchainViewerComponent } from './pages/blockchain-viewer/blockchain-viewer.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { CreateVoteComponent } from './pages/create-vote/create-vote.component';
import { PendingTransactionsComponent } from './pages/pending-transactions/pending-transactions.component';


const routes: Routes = [
  { path: '', component: BlockchainViewerComponent},
  { path: 'settings', component:SettingsComponent},
  { path: 'new/vote', component:CreateVoteComponent},
  { path: 'new/vote/pending', component:PendingTransactionsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
