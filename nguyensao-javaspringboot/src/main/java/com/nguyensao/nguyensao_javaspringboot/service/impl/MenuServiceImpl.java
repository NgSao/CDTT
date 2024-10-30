package com.nguyensao.nguyensao_javaspringboot.service.impl;

import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;

import org.hibernate.boot.model.naming.IllegalIdentifierException;
import org.springframework.stereotype.Service;

import com.nguyensao.nguyensao_javaspringboot.dto.MenuDTO;
import com.nguyensao.nguyensao_javaspringboot.entity.Menu;
import com.nguyensao.nguyensao_javaspringboot.repository.MenuRepository;
import com.nguyensao.nguyensao_javaspringboot.service.MenuService;

import jakarta.persistence.EntityNotFoundException;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class MenuServiceImpl implements MenuService {

    private final MenuRepository menuRepository;

    @Override
    public List<Menu> index() {
        return menuRepository.findByStatusIn(Arrays.asList(1, 2));

    }

    @Override
    public List<Menu> trash() {
        return menuRepository.findByStatus(0);
    }

    @Override
    public Menu show(Long id) {
        return menuRepository.findById(id).orElse(null);
    }

    @Override
    public Menu store(MenuDTO menuDTO) {
        Menu menu = new Menu();
        menu.setName(menuDTO.getName());
        menu.setLink(menuDTO.getLink());
        menu.setTableId(menuDTO.getTableId());
        menu.setType(menuDTO.getType());
        menu.setDescription(menuDTO.getDescription());
        menu.setParentId(menuDTO.getParentId());
        menu.setPositionMenu(menuDTO.getPositionMenu());
        menu.setCreatedAt(LocalDateTime.now());
        menu.setCreatedBy(1);
        menu.setStatus(1);
        return menuRepository.save(menu);
    }

    @Override
    public Menu update(Long id, MenuDTO menuDTO) {
        Menu menu = show(id);
        if (menu != null) {
            menu.setName(menuDTO.getName());
            menu.setLink(menuDTO.getLink());
            menu.setTableId(menuDTO.getTableId());
            menu.setDescription(menuDTO.getDescription());
            menu.setParentId(menuDTO.getParentId());
            menu.setPositionMenu(menuDTO.getPositionMenu());
            menu.setUpdatedAt(LocalDateTime.now());
            menu.setUpdatedBy(1);
            return menuRepository.save(menu);
        } else {
            throw new EntityNotFoundException("Không tồn tại");
        }
    }

    @Override
    public void status(Long id) {
        Menu menu = show(id);
        if (menu != null) {
            menu.setStatus(menu.getStatus() == 1 ? 2 : 1);
            menuRepository.save(menu);
        } else {
            throw new EntityNotFoundException("Không tồn tại");
        }
    }

    @Override
    public void delete(Long id) {
        Menu menu = show(id);
        if (menu != null) {
            if (menu.getStatus() == 0) {
                throw new IllegalIdentifierException("Không tồn tại");
            }
            menu.setStatus(0);
            menuRepository.save(menu);
        } else {
            throw new EntityNotFoundException("Không tồn tại");
        }
    }

    @Override
    public void restore(Long id) {
        Menu menu = show(id);
        if (menu != null) {
            if (menu.getStatus() == 1) {
                throw new IllegalArgumentException("Không tồn tại.");
            }
            menu.setStatus(1);
            menuRepository.save(menu);
        } else {
            throw new EntityNotFoundException("Không tồn tại");
        }
    }

    @Override
    public void destroy(Long id) {
        Menu menu = show(id);
        if (menu != null) {
            menuRepository.deleteById(id);
        } else {
            throw new EntityNotFoundException("Không tồn tại");
        }
    }

}
