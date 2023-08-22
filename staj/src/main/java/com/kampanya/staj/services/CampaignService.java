package com.kampanya.staj.services;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Service;

import com.kampanya.staj.models.Campaign;
import com.kampanya.staj.repositories.CampaignRepository;

import java.math.BigDecimal;
import java.util.Optional;

@Service
public class CampaignService {

    private CampaignRepository campaignRepository;

    @Autowired
    public CampaignService(CampaignRepository campaignRepository){
        this.campaignRepository = campaignRepository;
    }

    public Iterable<Campaign> getcampaignsList(){
        return campaignRepository.findAll();
    }

    public Optional<Campaign> findCampaignByID(Long id){
        return campaignRepository.findById(id);
    }

    public Campaign addCampaign(Campaign campaign){
        return campaignRepository.save(campaign);
    }

    public void deleteCampaignByID(Long id){
        campaignRepository.deleteById(id);
    }

    public Campaign updateCampaign(Campaign newCampaign, Long id){
        newCampaign.setCampaignID(id);
        return campaignRepository.save(newCampaign);
    }

    @EventListener(ApplicationReadyEvent.class)
    public void fillDataBase(){
        addCampaign(new Campaign(1L, "Kampanya1", "kategori1", "Açıklama1", true));
        addCampaign(new Campaign(2L, "Kampanya2", "kategori2", "Açıklama2", true));
    }

}
