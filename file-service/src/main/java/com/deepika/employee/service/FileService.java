package com.deepika.employee.service;

import java.io.IOException;

import java.nio.file.*;

import org.springframework.stereotype.Service;

import org.springframework.web.multipart.MultipartFile;

@Service
public class FileService {


    private final String
    UPLOAD_DIR =
        "uploads/";

    public String uploadFile(
        MultipartFile file
    ) throws IOException {

        // CREATE DIRECTORY

        Path uploadPath =
            Paths.get(UPLOAD_DIR);

        if (
            !Files.exists(uploadPath)
        ) {

            Files.createDirectories(
                uploadPath
            );
        }

        // FILE PATH

        Path filePath =
            uploadPath.resolve(
                file.getOriginalFilename()
            );

        // SAVE FILE

        Files.copy(
            file.getInputStream(),
            filePath,
            StandardCopyOption.REPLACE_EXISTING
        );

        return
            "File uploaded successfully";
    }
}