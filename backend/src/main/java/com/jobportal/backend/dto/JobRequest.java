package com.jobportal.backend.dto;

public record JobRequest(
    String title,
    String company,
    String location,
    String description
) {}

