package com.nguyensao.nguyensao_javaspringboot.dto;

import com.nguyensao.nguyensao_javaspringboot.enums.TypePost;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class PostDTO {
    private String title;
    private String slug;
    private String content;
    private String description;
    private String thumbnail;
    private TypePost typePost = TypePost.post;
    private Long topicId;

}
