package code.four.devdoc.model;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;

@Embeddable
public class Section {

    @Column(name = "section_title")
    private String title;

    @Column(name = "section_content", columnDefinition = "TEXT")
    private String content;

    // 기본 생성자
    public Section() {}

    // 생성자
    public Section(String title, String content) {
        this.title = title;
        this.content = content;
    }

    // getter와 setter
    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }
}
