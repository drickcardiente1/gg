import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKAvatar from "components/MKAvatar";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import profilePicture from "assets/images/my-pic.jpg";

function Profile() {
  return (
    <MKBox component="section" py={{ xs: 6, sm: 12 }}>
      <Container>
        <Grid container item xs={12} justifyContent="center" mx="auto">
          <MKBox mt={{ xs: -16, md: -20 }} textAlign="center">
            <MKAvatar src={profilePicture} alt="Burce Mars" size="xxl" shadow="xl" />
          </MKBox>
          <Grid container justifyContent="center" py={6}>
            <Grid item xs={12} md={7} mx={{ xs: "auto", sm: 6, md: 1 }}>
              <MKBox display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                <MKTypography variant="h3">Aileen Guigue</MKTypography>
                <MKButton variant="outlined" color="info" size="small">
                  Connect
                </MKButton>
              </MKBox>
              <MKTypography variant="body1" fontWeight="light" color="text">
                My name is [Your Name], and I am a [Your Age]-year-old [Your Occupation/Student/Professional]. I was born and raised in [Your Birthplace], and I currently reside in [Your Current City].

                I have always been passionate about [Your Main Interest/Hobby], which led me to [Any Achievements or Milestones]. My journey in [Your Field/Industry] began when I [Brief Background Story].

                Education has played a crucial role in shaping who I am today. I graduated from [Your University/College] with a degree in [Your Degree]. During my time there, I [Any Notable Experiences or Projects].

                Professionally, I have worked at [Previous Companies/Organizations] where I gained valuable experience in [Your Industry/Field]. My skills include [List of Skills], and I am proficient in [Any Relevant Software or Tools].

                Outside of work, I enjoy [Other Hobbies/Interests]. Whether it's [Favorite Activities], [Books, Movies, or Music Preferences], or [Any Special Talents], I find joy in [Your Interests].

                One of the things that define me is my commitment to [Any Causes or Values]. I believe in [Your Beliefs] and actively contribute to [Any Volunteering or Charity Work].

                In my free time, you can often find me [Your Favorite Pastime]. I also love to travel, and some of my favorite destinations include [Places You've Visited].

                Family is essential to me, and I cherish the moments spent with [Family Members]. They have been a constant support throughout my journey.

                Looking towards the future, I am excited about [Your Goals or Aspirations]. I aspire to [Your Dreams], and I am committed to [Your Future Plans].

                This is just a starting point, and feel free to personalize it based on your actual experiences, preferences, and achievements. <br />
              </MKTypography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Profile;
