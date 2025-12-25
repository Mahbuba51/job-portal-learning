package com.jobportal.backend.mapper;

import com.jobportal.backend.dto.ApplicationRequest;
import com.jobportal.backend.model.Application;

public class ApplicationMapper {

    public static ApplicationRequest toApplicationRequest(Application application) {
        return new ApplicationRequest(
                application.getApplicantName(),
                application.getEmail()
        );
    }
    
}
