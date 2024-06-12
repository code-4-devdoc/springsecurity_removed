package code.four.devdoc.controller;

import code.four.devdoc.model.PersonalInfo;
import code.four.devdoc.service.PersonalInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/personalinfo")
public class PersonalInfoController {

    @Autowired
    private PersonalInfoService personalInfoService;

    @PostMapping
    public ResponseEntity<PersonalInfo> savePersonalInfo(@RequestBody PersonalInfo personalInfo) {
        try {
            PersonalInfo savedPersonalInfo = personalInfoService.savePersonalInfo(personalInfo);
            return ResponseEntity.status(HttpStatus.CREATED).body(savedPersonalInfo);
        } catch (Exception e) {
            e.printStackTrace(); // 오류 로그 출력
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
}

