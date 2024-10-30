package com.nguyensao.nguyensao_javaspringboot.dto;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ProductDTO {
    private String name;
    private String slug;
    private Long categoryId;
    private Long brandId;
    private String content;
    private String description;
    private Double pricebuy;
    private List<String> thumbnail;

}
