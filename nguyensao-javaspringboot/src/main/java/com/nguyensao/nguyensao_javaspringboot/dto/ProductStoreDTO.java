package com.nguyensao.nguyensao_javaspringboot.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ProductStoreDTO {
    private Long productId;
    private Double priceroot;
    private Integer qty;
}
