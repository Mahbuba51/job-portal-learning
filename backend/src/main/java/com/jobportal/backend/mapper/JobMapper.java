package com.jobportal.backend.mapper;

import com.jobportal.backend.dto.JobRequest;
import com.jobportal.backend.dto.JobResponse;
import com.jobportal.backend.model.Job;

public class JobMapper {
    
    public static JobResponse toJobResponse(Job job) {
        return new JobResponse(
            job.getId(),
            job.getTitle(),
            job.getCompany(),
            job.getLocation(),
            job.getDescription()
        );
    }
    
    public static Job toJob(JobRequest jobRequest) {
        Job job = new Job();
        job.setTitle(jobRequest.title());
        job.setCompany(jobRequest.company());
        job.setLocation(jobRequest.location());
        job.setDescription(jobRequest.description());
        return job;
    }
}
