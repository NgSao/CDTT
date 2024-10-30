package com.nguyensao.nguyensao_javaspringboot.dto;

import java.util.ArrayList;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrderDTO {
    private Long id;
    private Long userId;
    private String name;
    private String email;
    private String phone;
    private String address;
    private String note;
    private List<OrderDetailDTO> orderDetails = new ArrayList<>();
    private PaymentDTO payment;
    private Double totalAmount;
    private String orderStatus;
}
