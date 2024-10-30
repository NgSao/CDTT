package com.nguyensao.nguyensao_javaspringboot.dto;

import com.nguyensao.nguyensao_javaspringboot.enums.PositionBanner;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class BannerDTO {
    private String name;
    private String link;
    private String image;
    private PositionBanner positionBanner = PositionBanner.slideshow;
    private String description;
}
