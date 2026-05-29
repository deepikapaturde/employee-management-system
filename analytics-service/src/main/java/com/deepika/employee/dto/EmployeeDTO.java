package com.deepika.employee.dto;

import lombok.Data;

@Data
public class EmployeeDTO {

    private Long id;

    private String name;

    private String department;

    private Double salary;
}