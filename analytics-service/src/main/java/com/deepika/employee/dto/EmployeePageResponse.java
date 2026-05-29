package com.deepika.employee.dto;

import lombok.Data;

import java.util.List;

@Data
public class EmployeePageResponse {

    private List<EmployeeResponseDTO> content;

    private int totalPages;

    private long totalElements;

    private int size;

    private int number;
}