package com.nguyensao.nguyensao_javaspringboot.dto;

import java.time.LocalDate;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CartDTO {
    private Long userId;
    private Double totalPrice;
    private LocalDate creatDate;
    private List<CartDetailDTO> cartDetails;
}
