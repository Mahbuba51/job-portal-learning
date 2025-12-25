// JobController.java
package com.jobportal.backend.controller;

import com.jobportal.backend.dto.ApplicationRequest;
import com.jobportal.backend.dto.JobRequest;
import com.jobportal.backend.dto.JobResponse;
import com.jobportal.backend.service.JobService;
import com.jobportal.backend.service.ApplicationService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/jobs")
@CrossOrigin(origins = "http://localhost:5173")
public class JobController {

    private final JobService jobService;
    private final ApplicationService applicationService;

    public JobController(JobService jobService,
            ApplicationService applicationService) {
        this.jobService = jobService;
        this.applicationService = applicationService;
    }

    @GetMapping
    public List<JobResponse> getAllJobs() { // Changed return type
        return jobService.getAllJobs();
    }

    @PostMapping
    public JobResponse createJob(@RequestBody JobRequest request) {
        return jobService.createJob(request);
    }

    @GetMapping("/{id}")
    public JobResponse getJobById(@PathVariable Long id) {
        return jobService.findById(id)
                .orElseThrow(() -> new RuntimeException("Job not found"));
    }

    @PostMapping("/{jobId}/apply")
    public ApplicationRequest applyToJob(
            @PathVariable Long jobId,
            @RequestBody ApplicationRequest application) {
        
        // Use the new method to get Job entity
        jobService.getJobEntityById(jobId);
        
        applicationService.saveApplication(application);
        return application;
    }

    @GetMapping("/{jobId}/applications")
    public List<ApplicationRequest> getApplicationsForJob(@PathVariable Long jobId) {
        
        // Check if job exists
        jobService.getJobEntityById(jobId);
        
        return applicationService.findByJobId(jobId);
    }
}