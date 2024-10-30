package com.nguyensao.nguyensao_javaspringboot.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class BrandDTO {
    private String name;
    private String slug;
    private String thumbnail;
    private String description;
}
