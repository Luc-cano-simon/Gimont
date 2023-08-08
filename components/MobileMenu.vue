<template>
  <div id="MobileMenu">
    <button v-if="currentStep === 0" @click="toggleMenu">Menu</button>

    <div v-if="isMenuOpen" class="menu-overlay">
      <transition name="slide-in-left-enter">
        <div class="menu-container">
          <button class="close-button" @click="toggleMenu">×</button>
          <template v-if="currentStep === 0">
            <ul>
              <li class="parent-item" v-for="item in menuItems" :key="item.id">
                <a @click="openSubMenu(item.id)">{{ item.label }}</a>
              </li>
            </ul>
          </template>
          <template v-else-if="currentStep === 1">
            <button @click="goBack"><i class="fa-solid fa-arrow-left"></i></button>
            <ul>
              <li class="sub-item" v-for="subItem in getCurrentStepSubMenu()" :key="subItem.id">
                <a v-if="subItem.redirect" @click="openNextStep(subItem.id)">{{ subItem.label }}</a>
                <a v-else-if="subItem.subSubMenu" @click="openSubSubMenu(subItem.id)">{{ subItem.label }}</a>
                <a v-else>{{ subItem.label }}</a>
              </li>
            </ul>
          </template>
          <template v-else-if="currentStep === 2">
            <button @click="goBack"><i class="fa-solid fa-arrow-left"></i></button>
            <ul>
              <li class="sub-sub-item" v-for="subItem in getCurrentStepSubMenu()" :key="subItem.id">
                <a v-if="subItem.redirect" @click="openNextStep(subItem.id)">{{ subItem.label }}</a>
                <a v-else-if="subItem.subSubMenu" @click="openSubSubMenu(subItem.id)">{{ subItem.label }}</a>
                <a v-else>{{ subItem.label }}</a>
              </li>
            </ul>
            <p>Je passe ici</p>
          </template>

        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
      currentStep: 0,
      currentSubMenuId: null,
      currentSubSubMenuId: null,
      menuItems: [
        {
          id: 1,
          label: 'La mairie',
          subMenu: [
            {
              id: 2,
              label: 'Le conseil municipal',
              subSubMenu: [
                { id: 3, label: 'Membre 1' },
                { id: 4, label: 'Membre 2' }
              ]
            },
            { id: 5, label: 'Service administratif' },
            { id: 6, label: 'Service financier' }
          ]
        },
        {
          id: 7,
          label: 'Menu Item 2',
          subMenu: [
            {
              id: 8,
              label: 'Submenu Item 2.1',
              subSubMenu: [
                { id: 9, label: 'Subsubmenu Item 2.1.1' },
                { id: 10, label: 'Subsubmenu Item 2.1.2' }
              ]
            },
            { id: 11, label: 'Submenu Item 2.2' }
          ]
        },
        {
          id: 12,
          label: 'Menu Item 3',
          redirect: '/page3'
        }
      ]
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    openSubMenu(itemId) {
       const menuItem = this.menuItems.find(item => item.id === itemId);
      if (menuItem.subMenu) {
        this.currentStep = 1;
        this.currentSubMenuId = itemId;
        this.currentSubSubMenuId = null; // Réinitialiser le sous-sous-menu
      } else if (menuItem.redirect) {
        // Rediriger vers la page correspondante s'il n'y a pas de sous-menu
        window.location.href = menuItem.redirect;
      }
    },

    openNextStep(itemId) {
      if (this.currentStep === 1 && this.currentSubMenuId !== null) {
        const subMenuItem = this.getCurrentStepSubMenu().find(item => item.id === this.currentSubMenuId);
        if (subMenuItem.subSubMenu) {
          this.currentStep = 2;
          this.currentSubMenuId = itemId; // Change to itemId instead of this.currentSubMenuId
          this.currentSubSubMenuId = null;
        } else if (subMenuItem.redirect) {
          window.location.href = subMenuItem.redirect;
        }
      }
    },

    openSubSubMenu(subSubMenuId) {
      console.log('subSubMenuId:', subSubMenuId);
      this.currentStep = 2;
      this.currentSubSubMenuId = subSubMenuId;
    },
    goBack() {
      if (this.currentStep === 1 || this.currentStep === 2) {
        this.currentStep--;
        this.currentSubSubMenuId = null; // Réinitialiser le sous-sous-menu
      } else {
        this.currentStep = 0;
        this.currentSubMenuId = null;
        this.currentSubSubMenuId = null;
      }
    },
    getCurrentStepSubMenu() {
      let subMenuItems = this.menuItems;
      for (let i = 0; i < this.currentStep; i++) {
        const currentItem = subMenuItems.find(item => item.id === this.currentSubMenuId);
        if (currentItem && currentItem.subMenu) {
          subMenuItems = currentItem.subMenu;
        } else {
          subMenuItems = [];
        }
      }
      return subMenuItems;
    },

  }
};
</script>
<style scoped>
.menu-overlay {
  z-index: 999999999;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.menu-container {
  background-color: white;
  padding: 20px;
  height: 100vh;
}

ul {
  list-style: none;
  padding: 0;
}

li.parent-item,
li.sub-item {
  margin-bottom: 10px;
  border-bottom: 1px solid;
  padding: 20px;
}



a {
  text-decoration: none;
  color: #000;
}

button {
  padding: 10px 20px;
  background-color: #000;
  color: #fff;
  border: none;
  cursor: pointer;
}

.slide-in-left-enter-active {
  transition: all 0.3s ease;
}

.slide-in-left-leave-active {
  transition: all 0.3s ease;
}

.slide-in-left-enter {
  transform: translateX(-100%);
  opacity: 0;
}

.slide-in-left-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
</style>