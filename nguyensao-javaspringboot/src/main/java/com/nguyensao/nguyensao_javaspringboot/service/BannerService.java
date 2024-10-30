package com.nguyensao.nguyensao_javaspringboot.service;

import java.util.List;

import com.nguyensao.nguyensao_javaspringboot.dto.BannerDTO;
import com.nguyensao.nguyensao_javaspringboot.entity.Banner;

public interface BannerService {
    List<Banner> index();

    List<Banner> trash();

    Banner show(Long id);

    Banner store(BannerDTO bannerDTO);

    Banner update(Long id, BannerDTO bannerDTO);

    void status(Long id);

    void delete(Long id);

    void restore(Long id);

    void destroy(Long id);
}
