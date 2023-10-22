const body = document.querySelector("body"),
      sidebar = body.querySelector(".sidebar"),
      toggle = sidebar.querySelector(".toggle"),
      searchBtn = body.querySelector(".search-box"),
      modeSwitch = body.querySelector(".toggle-switch"),
      modeText = body.querySelector(".mode-text"),
      searchIcon = sidebar.querySelector(".search-icon"),
      searchBox = sidebar.querySelector(".search-bar");

      toggle.addEventListener("click", () => {
        sidebar.classList.toggle("close");
      });
      modeSwitch.addEventListener("click", () => {
        body.classList.toggle("dark");
      });
      searchIcon.addEventListener('click', () => {
        if (sidebar.classList.contains('close')) {
          sidebar.classList.toggle('close');
        }
        searchBox.focus();
      });