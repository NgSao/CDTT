package com.nguyensao.nguyensao_javaspringboot.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class TopicDTO {
    private String name;
    private String slug;
    private String description;
}
