import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampaignListComponent } from './modules/campaign-list/campaign-list.component';
import { NewCampaignComponent } from './modules/new-campaign/new-campaign.component';
import { UpdateCampaignComponent } from './modules/update-campaign/update-campaign.component';


const routes: Routes = [
  {path: 'campaignList', component: CampaignListComponent},
  {path: 'newCampaign', component: NewCampaignComponent},
  {path: 'editCampaign', component: UpdateCampaignComponent},
  {path: 'editCampaign/:id', component: UpdateCampaignComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
