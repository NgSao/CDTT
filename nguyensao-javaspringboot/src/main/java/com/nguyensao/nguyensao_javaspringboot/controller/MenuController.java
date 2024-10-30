package com.nguyensao.nguyensao_javaspringboot.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.nguyensao.nguyensao_javaspringboot.dto.MenuDTO;
import com.nguyensao.nguyensao_javaspringboot.entity.Menu;
import com.nguyensao.nguyensao_javaspringboot.enums.PositionMenu;
import com.nguyensao.nguyensao_javaspringboot.service.MenuService;

import jakarta.persistence.EntityNotFoundException;
import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
@RequestMapping("api/menu")
public class MenuController {
    private final MenuService menuService;

    @GetMapping
    public ResponseEntity<List<Menu>> index() {
        return ResponseEntity.ok(menuService.index());
    }

    @GetMapping("/trash")
    public ResponseEntity<List<Menu>> trash() {
        return ResponseEntity.ok(menuService.trash());
    }

    @GetMapping("/show/{id}")
    public ResponseEntity<Menu> show(@PathVariable Long id) {
        Menu menu = menuService.show(id);
        if (menu == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(menu);
    }

    @PostMapping("/store")
    public ResponseEntity<Menu> store(@RequestParam("name") String name,
            @RequestParam("link") String link,
            @RequestParam("table_id") Integer tableId,
            @RequestParam("type") String type,
            @RequestParam(value = "position", required = false) String position,
            @RequestParam(value = "parent_id", required = false) Integer parentId,
            @RequestParam(value = "description", required = false) String description) {
        if (parentId == null) {
            parentId = 0;
        }
        PositionMenu positionMenu = (position != null) ? PositionMenu.valueOf(position) : PositionMenu.mainmenu;
        MenuDTO menuDTO = new MenuDTO(name, link, tableId, type, positionMenu, parentId, description);
        return ResponseEntity.ok(menuService.store(menuDTO));
    }

    @PostMapping("/update/{id}")
    public ResponseEntity<Menu> update(@PathVariable Long id,
            @RequestParam(value = "name", required = false) String name,
            @RequestParam(value = "link", required = false) String link,
            @RequestParam(value = "table_id", required = false) Integer tableId,
            @RequestParam(value = "type", required = false) String type,
            @RequestParam(value = "position", required = false) String position,
            @RequestParam(value = "parent_id", required = false) Integer parentId,
            @RequestParam(value = "description", required = false) String description) {

        PositionMenu positionMenu = (position != null) ? PositionMenu.valueOf(position) : PositionMenu.mainmenu;
        MenuDTO menuDTO = new MenuDTO(name, link, tableId, type, positionMenu, parentId, description);
        return ResponseEntity.ok(menuService.update(id, menuDTO));
    }

    @GetMapping("status/{id}")
    public ResponseEntity<String> status(@PathVariable Long id) {
        menuService.status(id);
        return ResponseEntity.ok("Thay đổi trạng thái thành công");
    }

    @GetMapping("delete/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id) {
        menuService.delete(id);
        return ResponseEntity.ok("Đưa vào thùng rác thành công");
    }

    @GetMapping("restore/{id}")
    public ResponseEntity<String> restore(@PathVariable Long id) {
        menuService.restore(id);
        return ResponseEntity.ok("Khôi phục thành công");
    }

    @DeleteMapping("destroy/{id}")
    public ResponseEntity<String> destroy(@PathVariable Long id) {
        menuService.destroy(id);
        return ResponseEntity.ok("Xóa thành công");
    }

    // Khai báo lỗi
    @ExceptionHandler(EntityNotFoundException.class)
    public ResponseEntity<String> handleEntityNotFound(EntityNotFoundException ex) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(ex.getMessage());
    }

    // Khai báo đã có
    @ExceptionHandler(IllegalArgumentException.class)
    public ResponseEntity<String> handleIllegalArgument(IllegalArgumentException ex) {
        return ResponseEntity.badRequest().body(ex.getMessage());
    }

}
