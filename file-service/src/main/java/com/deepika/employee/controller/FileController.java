package com.deepika.employee.controller;

import java.io.IOException;

import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;

import org.springframework.web.multipart.MultipartFile;

import com.deepika.employee.service.FileService;

@RestController

@RequestMapping("/files")

public class FileController {

    private final FileService fileService;

    public FileController(
        FileService fileService
    ) {

        this.fileService =
            fileService;
    }

    @PostMapping("/upload")
    public ResponseEntity<String>
    uploadFile(

        @RequestParam("file")
        MultipartFile file

    ) throws IOException {

        String response =
            fileService
                .uploadFile(file);

        return ResponseEntity.ok(
            response
        );
    }
}