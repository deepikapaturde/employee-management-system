package com.deepika.employee.dto;

import lombok.Data;

import java.time.LocalDate;

@Data
public class EmployeeResponseDTO {

    private Long id;

    private String employeeCode;

    private String name;

    private String email;

    private String department;

    private Double salary;

    private LocalDate joiningDate;

    private Boolean status;
}