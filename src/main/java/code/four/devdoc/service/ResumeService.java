package code.four.devdoc.service;

import code.four.devdoc.model.Resume;
import code.four.devdoc.model.Section;
import code.four.devdoc.repository.ResumeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.itextpdf.text.Document;
import com.itextpdf.text.DocumentException;
import com.itextpdf.text.Paragraph;
import com.itextpdf.text.pdf.PdfWriter;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class ResumeService {

    @Autowired
    private ResumeRepository resumeRepository;

    public List<Resume> getAllResumes() {
        return resumeRepository.findAll();
    }

    public Resume getResumeById(Long id) {
        return resumeRepository.findById(id).orElse(null);
    }

    public Resume saveResume(Resume resume) {
        resume.setCreatedAt(LocalDateTime.now());
        return resumeRepository.save(resume);
    }

    public ByteArrayInputStream generatePdf(Long id) {
        Resume resume = resumeRepository.findById(id).orElseThrow(() -> new RuntimeException("Resume not found"));
        Document document = new Document();
        ByteArrayOutputStream out = new ByteArrayOutputStream();

        try {
            PdfWriter.getInstance(document, out);
            document.open();
            document.add(new Paragraph("Title: " + resume.getTitle()));
            for (Section section : resume.getSections()) {
                document.add(new Paragraph(section.getTitle() + ": " + section.getContent()));
            }
            document.close();
        } catch (DocumentException e) {
            throw new RuntimeException("Error generating PDF", e);
        }

        return new ByteArrayInputStream(out.toByteArray());
    }
}



/*
@Service
public class ResumeService {

    @Autowired
    private ResumeRepository resumeRepository;

    public List<Resume> getAllResumes() {
        return resumeRepository.findAll();
    }

    public Resume getResumeById(Long id) {
        return resumeRepository.findById(id).orElse(null);
    }

    public Resume saveResume(Resume resume) {
        resume.setCreatedAt(LocalDateTime.now());
        return resumeRepository.save(resume);
    }

    public ByteArrayInputStream generatePdf(Long id) {
        Resume resume = resumeRepository.findById(id).orElseThrow(() -> new RuntimeException("Resume not found"));
        Document document = new Document();
        ByteArrayOutputStream out = new ByteArrayOutputStream();

        try {
            PdfWriter.getInstance(document, out);
            document.open();
            document.add(new Paragraph("Title: " + resume.getTitle()));
            for (Section section : resume.getSections()) {
                document.add(new Paragraph(section.getTitle() + ": " + section.getContent()));
            }
            document.close();
        } catch (DocumentException e) {
            throw new RuntimeException("Error generating PDF", e);
        }

        return new ByteArrayInputStream(out.toByteArray());
    }
}
*/

/* save 성공 코드
@Service
public class ResumeService {

    @Autowired
    private ResumeRepository resumeRepository;

    public List<Resume> getAllResumes() {
        return resumeRepository.findAll();
    }

    public Resume saveResume(Resume resume) {
        resume.setCreatedAt(LocalDateTime.now());
        return resumeRepository.save(resume);
    }

    public ByteArrayInputStream generatePdf(Long id) {
        Resume resume = resumeRepository.findById(id).orElseThrow(() -> new RuntimeException("Resume not found"));
        Document document = new Document();
        ByteArrayOutputStream out = new ByteArrayOutputStream();

        try {
            PdfWriter.getInstance(document, out);
            document.open();
            document.add(new Paragraph("Title: " + resume.getTitle()));
            for (Section section : resume.getSections()) {
                document.add(new Paragraph(section.getTitle() + ": " + section.getContent()));
            }
            document.close();
        } catch (DocumentException e) {
            throw new RuntimeException("Error generating PDF", e);
        }

        return new ByteArrayInputStream(out.toByteArray());
    }
}

/*
@Service
public class ResumeService {

    @Autowired
    private ResumeRepository resumeRepository;

    // 이력서 목록 조회
    public List<Resume> getAllResumes() {
        return resumeRepository.findAll();
    }

    // 이력서 저장
    public Resume saveResume(Resume resume) {
        resume.setCreatedAt(LocalDateTime.now());
        return resumeRepository.save(resume);
    }

    public ByteArrayInputStream generatePdf(Long id) {


        return new ByteArrayInputStream(new byte[0]);
    }}
*/