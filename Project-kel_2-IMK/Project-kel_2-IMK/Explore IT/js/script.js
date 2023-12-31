function moveIconNav() {
    var iconNavContainer = document.getElementById('iconNavContainer');
    var iconNav = document.getElementById('iconNav');

    if (iconNavContainer.contains(iconNav)) {
      // Move to new location
      document.getElementById('navnew').appendChild(iconNav);
    } else {
      // Move back to original location
      document.getElementById('iconNavContainer').appendChild(iconNav);
    }
  }