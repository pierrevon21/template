<template>
  <!-- Place nyo dito yung dynamic na menu -->
  <ul class="md:pl-3">
    <li>
      <button
        class="my-2 flex w-full items-center text-blue-50 justify-start p-4 font-thin uppercase transition-colors duration-200 lg:hover:text-blue-500"
      >
        <span><DashboardIcon /></span>
        <label v-if="sidebarOpen" class="ml-2">Dashboard</label>
      </button>
    </li>
    <!-- Parent Menu -->
    <li v-for="(item, index) in filteredMenuList" :key="index" class="relative">
      <button
        @click="toggleDropdown(item)"
        class="my-2 flex w-full items-center text-blue-50 justify-between p-4 font-thin uppercase transition-colors duration-200 lg:hover:text-blue-500"
        :class="item.isopen && ''"
      >
        <div class="flex">
          <span v-if="item.title == 'Title 1'"> <CompanyIcon /> </span>
          <span v-else> <AmbassadorIcon /> </span>

          <label v-if="sidebarOpen" class="ml-2"> {{ item.title }}</label>
        </div>
        <span v-if="sidebarOpen"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
            v-if="!item.isopen"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
            v-else
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m4.5 15.75 7.5-7.5 7.5 7.5"
            />
          </svg>
        </span>
      </button>
      <ul
        class="ml-8"
        :class="{
          hidden: !item.isopen,
          'absolute w-52 -right-52 top-0 bg-blue-950 rounded-lg': !sidebarOpen,
        }"
      >
        <li v-for="(sub, subIndex) in item.submenu" :key="subIndex">
          <button
            @click="
              SubOnClick(sub, item);
              toggleDropdown(item);
              navigateTo(sub.path);
            "
            class="my-2 flex w-full items-center text-blue-50 justify-start p-4 font-thin uppercase transition-colors duration-200 lg:hover:text-blue-500 cursor-pointer"
            :class="
              sub.isclick &&
              'bg-gradient-to-r border-r-4 border-green-500 from-green-800 to-green-100 cursor-pointer'
            "
          >
            <label class="ml-2 cursor-pointer font-medium">{{
              sub.title
            }}</label>
          </button>
        </li>
      </ul>
    </li>

    <!-- <SidebarItem title="Company" to="/main/maintenance/company">
      <CompanyIcon />
    </SidebarItem>

    <SidebarItem title="Checklist" to="/main/maintenance/checklist">
      <ChecklistIcon />
    </SidebarItem>

    <SidebarItem title="Facility" to="/main/maintenance/facility">
      <FacilityIcon />
    </SidebarItem>

    <SidebarItem title="Ambassador" to="/main/maintenance/ambassador">
      <AmbassadorIcon />
    </SidebarItem> -->
  </ul>
</template>

<script setup>
import SidebarItem from "./SidebarItem.vue";
import DashboardIcon from "./icons/DashboardIcon.vue";
import ChecklistIcon from "./icons/ChecklistIcon.vue";
import FacilityIcon from "./icons/FacilityIcon.vue";
import AmbassadorIcon from "./icons/AmbassadorIcon.vue";
import CompanyIcon from "./icons/CompanyIcon.vue";
import { sidebarOpen } from "../store";
import { decryptor2 } from "../../connection/approveraes";

const approverDetails = JSON.parse(decryptor2());
const router = useRouter();

onMounted(() => {
  console.log(approverDetails.role);
});
const menulist = ref([
  {
    title: "Maintenance",
    isopen: false,
    submenu: [
      {
        title: "Dormitory",
        isclick: false,
        path: "/main/maintenance/dormitory",
        // },
        // {
        //   title: "Room",
        //   isclick: false,
        //   path: "/main/maintenance/dormitoryroom",
        // },
        // {
        //   title: "Approver",
        //   isclick: false,
        //   path: "/main/maintenance/dormitoryApprover",
      },
    ],
  },
  {
    title: "Transaction",
    isopen: false,
    submenu: [
      {
        title: "Bookings",
        isclick: false,
        path: "/main/listbooking",
      },
      {
        title: "Book a dorm",
        isclick: false,
        path: "/main/bookingform",
      },
    ],
  },
]);

const filteredMenuList = computed(() => {
  if (approverDetails.role === "Approver" || approverDetails.role === "Admin") {
    return menulist.value; // Return all menu items if user is an approver
  } else if (approverDetails.role === "User is not an approver") {
    // Return all menu items except "Maintenance" if user is not an approver
    return menulist.value.filter((item) => item.title !== "Maintenance");
  }
});

const navigateTo = (urlpath) => {
  // Directly push to the specified path using Vue Router
  router.push({ path: urlpath });
};

// Toggle dropdown
const toggleDropdown = (menu) => {
  menu.isopen = !menu.isopen;
  closeOtherMenus(menu);
};

const closeOtherMenus = (currentMenu) => {
  menulist.value.forEach((menu) => {
    if (menu !== currentMenu) {
      menu.isopen = false;
    }
  });
};

const SubOnClick = (sub, menu) => {
  sub.isclick = !sub.isclick;
  closeOtherSubMenus(sub, menu);
};

const closeOtherSubMenus = (currentSubMenu, currentMenu) => {
  menulist.value.forEach((menu) => {
    if (menu === currentMenu) {
      menu.submenu.forEach((sub) => {
        if (sub !== currentSubMenu) {
          sub.isclick = false;
        }
      });
    } else {
      menu.submenu.forEach((sub) => {
        sub.isclick = false;
      });
    }
  });
};
</script>
