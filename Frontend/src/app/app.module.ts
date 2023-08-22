import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CampaignListComponent } from './modules/campaign-list/campaign-list.component';
import { NewCampaignComponent } from './modules/new-campaign/new-campaign.component';
import { UpdateCampaignComponent } from './modules/update-campaign/update-campaign.component';
import { NavbarComponent } from './modules/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CampaignService } from './services/campaign.service';


@NgModule({
  declarations: [
    AppComponent,
    CampaignListComponent,
    NewCampaignComponent,
    UpdateCampaignComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CampaignService],
  bootstrap: [AppComponent]
})
export class AppModule { }
