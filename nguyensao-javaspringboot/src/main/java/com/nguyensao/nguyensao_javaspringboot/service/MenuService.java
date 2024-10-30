package com.nguyensao.nguyensao_javaspringboot.service;

import java.util.List;

import com.nguyensao.nguyensao_javaspringboot.dto.MenuDTO;
import com.nguyensao.nguyensao_javaspringboot.entity.Menu;

public interface MenuService {
    List<Menu> index();

    List<Menu> trash();

    Menu show(Long id);

    Menu store(MenuDTO menuDTO);

    Menu update(Long id, MenuDTO menuDTO);

    void status(Long id);

    void delete(Long id);

    void restore(Long id);

    void destroy(Long id);
}
