package com.jobportal.backend.dto;

public record JobResponse(
        Long id,
        String title,
        String company,
        String location,
        String description) {

}
