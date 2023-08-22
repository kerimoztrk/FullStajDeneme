package com.kampanya.staj.models;

import lombok.*;


import java.math.BigDecimal;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Entity
@Table(name = "Campaigns")
public class Campaign {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private Long campaignID;
    private String campaignName;
    private String campaignCategory;
    private String campaignDescription;
    private boolean status = false;
    
    
}

