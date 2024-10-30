package com.nguyensao.nguyensao_javaspringboot.file;

import java.io.IOException;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GetFileController {
    @GetMapping(value = "/img/{img}", produces = MediaType.IMAGE_PNG_VALUE)
    public @ResponseBody byte[] getImageWithMediaType(@PathVariable("img") String img) throws IOException {
        return getClass()
                .getResourceAsStream("/img/" + img).readAllBytes();

    }

}
