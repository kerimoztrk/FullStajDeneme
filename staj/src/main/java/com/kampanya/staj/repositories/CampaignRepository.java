package com.kampanya.staj.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.kampanya.staj.models.Campaign;

@Repository
public interface CampaignRepository extends CrudRepository<Campaign, Long> {
}
