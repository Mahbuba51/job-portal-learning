package com.jobportal.backend.service;

import com.jobportal.backend.repository.ApplicationRepository;
import org.springframework.stereotype.Service;

import com.jobportal.backend.dto.ApplicationRequest;
import com.jobportal.backend.model.Application;
import java.util.List;

@Service
public class ApplicationService {
    
    private final ApplicationRepository applicationRepository;

    public ApplicationService(ApplicationRepository applicationRepository) {
        this.applicationRepository = applicationRepository;
    }

    public Application saveApplication(ApplicationRequest application) {
        // System.out.println(application);
        Application app = new Application();
        app.setApplicantName(application.applicantName());
        app.setEmail(application.applicantEmail());
        // You might need to set the job as well if Application has a job field
        return applicationRepository.save(app);
    }

    public List<ApplicationRequest> findByJobId(Long jobId) {
        System.out.println(applicationRepository.findByJobId(jobId));
        return applicationRepository.findByJobId(jobId)
                .stream()
                .map(app -> new ApplicationRequest(app.getApplicantName(), app.getEmail()))
                .toList();
    }

}
