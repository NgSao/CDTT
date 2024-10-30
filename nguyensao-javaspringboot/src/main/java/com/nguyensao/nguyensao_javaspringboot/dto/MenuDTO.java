package com.nguyensao.nguyensao_javaspringboot.dto;

import com.nguyensao.nguyensao_javaspringboot.enums.PositionMenu;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class MenuDTO {
    private String name;
    private String link;
    private Integer tableId;
    private String type;
    private PositionMenu positionMenu = PositionMenu.mainmenu;
    private Integer parentId;
    private String description;
}
