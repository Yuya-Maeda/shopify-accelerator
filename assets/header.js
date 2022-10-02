const parentMenu = document.getElementById("parent-menu");

const parentMenuItems = parentMenu.querySelectorAll("a");

const childMenus = document.getElementById("child-menu-container");

const childMenuItems = childMenus.querySelectorAll("a");

const grandchildMenus = document.getElementById("grandchild-menu-container");

parentMenuItems.forEach((parentMenuItem, childIndex) => {
	parentMenuItem.addEventListener("click", () => {
		// hide other Child Menu
		childMenus.querySelectorAll(".child-menu").forEach((menu) => {
			menu.style.display = "none";
			menu.setAttribute('aria-expanded', 'false')
		});
		// hide other Grandchild menu
		if( grandchildMenus.querySelectorAll('.grandchild-menu')){
			grandchildMenus.querySelectorAll(".grandchild-menu").forEach((menu) => {
				menu.style.display = "none";
				menu.setAttribute('aria-expanded', 'false')
			});
		}

		// toggle display Child Menu
		const childMenu = document.getElementById(`child-menu-index-${childIndex}`);
		console.log(childMenu.style, "childMenu style");

		if(childMenu.querySelector('div').querySelector('a')){
			
			childMenu.style.display =
			childMenu.style.display == "none" ? "block" : "none";
			if(childMenu.style.display == 'block') {
				childMenu.setAttribute('aria-expanded','open')
			}
		}


        // focus 
        // childMenuItems[0].focus()

		//======== Grand Child Menu ===========
		childMenuItems.forEach((childMenuItem, secondIndex) => {
			childMenuItem.addEventListener("click", () => {
				// hide other GrandChild Menu
				grandchildMenus.querySelectorAll(".grandchild-menu").forEach((menu) => {
					menu.style.display = "none";
					menu.setAttribute('aria-expanded', 'false')
				});

				// toggle display Grandchild Menu
				const grandchildMenu = document.getElementById(
					`grandchild-menu-index-${childIndex}-${secondIndex}`
				);
				console.log(grandchildMenu, "grandchild menu");

				grandchildMenu.style.display = grandchildMenu.style.display == 'none' ?  "block" : "none";
				if(grandchildMenu.style.display == 'block'){
					grandchildMenu.setAttribute('aria-expanded','open')
				}
			});
		});
	});
});

// === for hamburger menu

  const hamburger = document.getElementById('hamburger');
  const mobileNavItem = document.getElementById('mobile-nav-item');
  hamburger.addEventListener('click', () => { 
    console.log(hamburger, 'hamburger clicked');
    mobileNavItem.style.display = mobileNavItem.style.display == 'none' ?'block' : "none";
   });
