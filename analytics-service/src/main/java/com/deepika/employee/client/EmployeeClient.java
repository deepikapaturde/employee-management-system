package com.deepika.employee.client;

import java.util.List;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.deepika.employee.dto.DepartmentCountDTO;
import com.deepika.employee.dto.EmployeePageResponse;

@FeignClient(name = "EMPLOYEE-SERVICE")
public interface EmployeeClient {

    @GetMapping("/employees/paginated")
    EmployeePageResponse getEmployees(

            @RequestParam int page,

            @RequestParam int size,

            @RequestParam String sortBy,

            @RequestParam(required = false)
            String department
    );
    @GetMapping("/employees/departmentCounts")
    List<DepartmentCountDTO>
    getDepartmentCounts();
}
