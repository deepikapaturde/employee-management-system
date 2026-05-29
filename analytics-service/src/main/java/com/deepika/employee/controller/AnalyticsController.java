package com.deepika.employee.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.deepika.employee.client.EmployeeClient;
import com.deepika.employee.dto.DepartmentCountDTO;
import com.deepika.employee.dto.DepartmentCountResponse;
import com.deepika.employee.dto.EmployeePageResponse;

@RestController
@RequestMapping("/analytics")
public class AnalyticsController {
	  private final EmployeeClient employeeClient;

	    public AnalyticsController(
	            EmployeeClient employeeClient) {

	        this.employeeClient = employeeClient;
	    }

	    @GetMapping("/departmentCounts")
	    public List<DepartmentCountDTO>
	    getDepartmentCounts() {

	        return employeeClient
	                .getDepartmentCounts();
	    }
	  @GetMapping("/departmentCount")
	    public DepartmentCountResponse getDepartmentCount(

	            @RequestParam String department) {

	        EmployeePageResponse response =
	                employeeClient.getEmployees(
	                        0,
	                        1000,
	                        "id",
	                        department);

	        long total = response.getTotalElements();

	        return new DepartmentCountResponse(
	                department,
	                total);
	    }
	  @GetMapping("/totalEmployees")
	    public ResponseEntity<Integer>
	    totalEmployees() {

	        RestTemplate restTemplate =
	            new RestTemplate();

	        String url =
	            "http://localhost:8080/employees";

	        List<?> employees =
	            restTemplate.getForObject(
	                url,
	                List.class
	            );

	        int total =
	            employees != null
	            ? employees.size()
	            : 0;

	        return ResponseEntity.ok(total);
	    }
	  @GetMapping("/totalIT")
	    public ResponseEntity<Integer>
	    totalIT() {

	        RestTemplate restTemplate =
	            new RestTemplate();

	        String url =
	            "http://localhost:8080/employees";

	        List<?> employees =
	            restTemplate.getForObject(
	                url,
	                List.class
	            );

	        int total =
	            employees != null
	            ? employees.size()
	            : 0;

	        return ResponseEntity.ok(total);
	    }
	  @GetMapping("/totalHR")
	    public ResponseEntity<Integer>
	    totalHR() {

	        RestTemplate restTemplate =
	            new RestTemplate();

	        String url =
	            "http://localhost:8080/employees";

	        List<?> employees =
	            restTemplate.getForObject(
	                url,
	                List.class
	            );

	        int total =
	            employees != null
	            ? employees.size()
	            : 0;

	        return ResponseEntity.ok(total);
	    }
	  @GetMapping("/totalNonIT")
	    public ResponseEntity<Integer>
	    totalNonIT() {

	        RestTemplate restTemplate =
	            new RestTemplate();

	        String url =
	            "http://localhost:8080/employees";

	        List<?> employees =
	            restTemplate.getForObject(
	                url,
	                List.class
	            );

	        int total =
	            employees != null
	            ? employees.size()
	            : 0;

	        return ResponseEntity.ok(total);
	    }
	  
}