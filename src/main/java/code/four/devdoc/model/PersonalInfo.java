package code.four.devdoc.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;



@Entity
public class PersonalInfo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String birthday;
    private String phone;
    private String email;
    private String githubAddress;
    private String blogAddress;
    private String selfIntroduction;
    private String image;

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getBirthday() { return birthday; }
    public void setBirthday(String birthday) { this.birthday = birthday; }

    public String getPhone() { return phone; }
    public void setPhone(String phone) { this.phone = phone; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getGithubAddress() { return githubAddress; }
    public void setGithubAddress(String githubAddress) { this.githubAddress = githubAddress; }

    public String getBlogAddress() { return blogAddress; }
    public void setBlogAddress(String blogAddress) { this.blogAddress = blogAddress; }

    public String getSelfIntroduction() { return selfIntroduction; }
    public void setSelfIntroduction(String selfIntroduction) { this.selfIntroduction = selfIntroduction; }

    public String getImage() { return image; }
    public void setImage(String image) { this.image = image; }
}
