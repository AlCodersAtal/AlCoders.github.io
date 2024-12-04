// Show the search pop-up
function showSearchPopup() {
    document.getElementById("searchPopup").style.display = "flex";
  }
  
  // Hide the search pop-up
  function hideSearchPopup() {
    document.getElementById("searchPopup").style.display = "none";
  }
  
  // Show recommendations
  function showRecommendations() {
    const searchInput = document.getElementById("searchBar").value.toLowerCase();
    const resultBox = document.getElementById("resultBox");
  
    // Sample recommendations (these could be dynamically fetched)
    const keywords = ["Home", "Home Page", "More Info", "About Us", "Who are Alcoders", "Courses", "What is an Arduino", "WHat is Sensors", "Login Page", "How to Login In this Website"];
    const filtered = keywords.filter((word) =>
      word.toLowerCase().includes(searchInput)
    );
  
    // Render recommendations
    resultBox.innerHTML = filtered
      .map((word) => `<li onclick="redirectToPage('${word}')">${word}</li>`)
      .join("");
      
  }
  
  // Redirect to the selected page
  function redirectToPage(keyword) {
    const pages = {
      Home: "index.html",
      "More Info": "More info.html",
      "About Us": "about us.html",
      Courses: "Courses.html",
      Login: "loginpage.html",
      "Home Page": "index.html",
      "Who are Alcoders": "about us.html",
      "What is an Arduino": "arduinoCourse.html",
      "WHat is Sensors": "sensorCourse.html.html",
      "Login Page":"loginpage.html", 
      "How to Login In this Website": "loginpage.html"
    };
  
    if (pages[keyword]) {
      window.location.href = pages[keyword];
    }
  }
  