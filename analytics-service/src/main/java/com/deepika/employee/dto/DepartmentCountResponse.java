package com.deepika.employee.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class DepartmentCountResponse {

    private String department;

    private long totalEmployees;
}