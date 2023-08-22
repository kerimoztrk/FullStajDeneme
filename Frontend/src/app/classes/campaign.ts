export class Campaign {
    campaignID: number;
    campaignName: string;
    campaignCategory: string;
    campaignDescription: string;
    status: boolean;

    constructor(
        campaignID: number,
        campaignName: string,
        campaignCategory: string,
        campaignDescription: string,
        status: boolean
    ) {
        this.campaignID = campaignID;
        this.campaignName = campaignName;
        this.campaignCategory = campaignCategory;
        this.campaignDescription = campaignDescription;
        this.status = status;
    }
}
