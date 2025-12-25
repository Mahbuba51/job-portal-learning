// JobService.java
package com.jobportal.backend.service;

import com.jobportal.backend.model.Job;
import com.jobportal.backend.dto.JobRequest;
import com.jobportal.backend.dto.JobResponse;
import com.jobportal.backend.mapper.JobMapper;
import com.jobportal.backend.repository.JobRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class JobService {

    private final JobRepository jobRepository;

    public JobService(JobRepository jobRepository) {
        this.jobRepository = jobRepository;
    }

    public List<JobResponse> getAllJobs() {
        return jobRepository.findAll()
            .stream()
            .map(JobMapper::toJobResponse)
            .collect(Collectors.toList());
    }

    public JobResponse createJob(JobRequest request) {
        // Convert JobRequest to Job Entity
        Job job = JobMapper.toJob(request);
        
        // Save the entity
        Job savedJob = jobRepository.save(job);
        
        // Convert saved entity back to JobResponse DTO
        return JobMapper.toJobResponse(savedJob);
    }

    public java.util.Optional<JobResponse> findById(Long id) {
        return jobRepository.findById(id)
            .map(JobMapper::toJobResponse);
    }
    
    // Optional: Add a method to get the Job entity directly (for internal use)
    public Job getJobEntityById(Long id) {
        return jobRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Job not found"));
    }
}