import { Component, OnInit } from '@angular/core';
import { Campaign } from 'src/app/classes/campaign';
import { CampaignService } from 'src/app/services/campaign.service';

@Component({
  selector: 'app-campaign-list',
  templateUrl: './campaign-list.component.html',
  styleUrls: ['./campaign-list.component.css']
})
export class CampaignListComponent implements OnInit {
  campaigns: Campaign[] = [];
  trueStatusCount: number = 0;
  falseStatusCount: number = 0;

  constructor(private campaignService: CampaignService) {}

  ngOnInit(): void {
    this.getCampaigns();
  }

  getCampaigns() {
    this.campaignService.getAllCampaigns().subscribe(data => {
      this.campaigns = data;
      this.countStatusValues();
    });
  }

  countStatusValues() {
    this.trueStatusCount = this.campaigns.filter(campaign => campaign.status === true).length;
    this.falseStatusCount = this.campaigns.filter(campaign => campaign.status === false).length;
  }

  deleteCampaign(id : number){
    this.campaignService.deleteCampaing(id);
  }

  reloadCurrentPage() {
    window.location.reload();
  }
}


  
