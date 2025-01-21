// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Select all sections and nav links
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("#navbar .nav-link");
  
    // Function to update the active link based on the current section
    function updateActiveLink() {
      // Get the current section based on the scroll position
      const currentSection = getActiveSection();
  
      // Update the nav links to reflect the current section
      updateNavLinks(currentSection);
    }
  
    // Function to get the active section based on the scroll position
    function getActiveSection() {
      let currentSection = "";
  
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
  
        // Check if the current section is visible on the screen
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          currentSection = section.getAttribute("id");
        }
      });
  
      return currentSection;
    }
  
    // Function to update the nav links to reflect the current section
    function updateNavLinks(currentSection) {
      navLinks.forEach((link) => {
        // Remove the active class from all links
        link.classList.remove("text-red-500", "font-bold");
  
        // Add the active class to the link that matches the current section
        if (link.getAttribute("href").includes(currentSection)) {
          link.classList.add("text-red-500", "font-bold");
        }
      });
    }
  
    // Initialize the active link on page load
    updateActiveLink();
  
    // Update the active link on scroll
    window.addEventListener("scroll", updateActiveLink);
  });
// Initialize the active link on page load and update it on scroll
document.addEventListener("DOMContentLoaded", () => {
    const updateActiveLink = () => {
      // Your logic to update the active link goes here
    };
  
    updateActiveLink();
    window.addEventListener("scroll", updateActiveLink);
  });
  
  // Toggle Dark Mode
  document.addEventListener("DOMContentLoaded", () => {
    const modeToggle = document.getElementById("modeToggle");
    const darkModeIcon = document.getElementById("darkModeIcon");
    const lightModeIcon = document.getElementById("lightModeIcon");
    const html = document.documentElement;
  
    const toggleDarkMode = () => {
      const isDark = html.classList.toggle("dark");
      console.log("Dark Mode Active:", isDark); // Debugging
      localStorage.setItem("theme", isDark ? "dark" : "light");
    
      darkModeIcon.style.display = isDark ? "none" : "block";
      lightModeIcon.style.display = isDark ? "block" : "none";
    };
    
  
    modeToggle.addEventListener("click", toggleDarkMode);
  
    // Apply Initial Theme
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      html.classList.add("dark");
      darkModeIcon.style.display = "none";
      lightModeIcon.style.display = "block";
    } else {
      html.classList.remove("dark");
      darkModeIcon.style.display = "block";
      lightModeIcon.style.display = "none";
    }
  });