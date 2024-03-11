<script setup>
import SidebarItem from "./SidebarItem.vue";
import DashboardIcon from "./icons/DashboardIcon.vue";
import ChecklistIcon from "./icons/ChecklistIcon.vue";
import FacilityIcon from "./icons/FacilityIcon.vue";
import AmbassadorIcon from "./icons/AmbassadorIcon.vue";
import CompanyIcon from "./icons/CompanyIcon.vue";
</script>

<template>
  <!-- Place nyo dito yung dynamic na menu -->
  <ul class="md:pl-3">
    <SidebarItem title="Dashboard" to="/main/">
      <DashboardIcon />
    </SidebarItem>

    <SidebarItem title="Company" to="/main/maintenance/company">
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
    </SidebarItem>
  </ul>
</template>
