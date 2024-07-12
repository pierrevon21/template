<template>
  <div>
    <div
      v-if="showDormitoryModal"
      class="fixed z-10 inset-0 overflow-y-auto flex items-center justify-center"
    >
      <!-- Modal Overlay -->
      <div class="fixed inset-0 transition-opacity" aria-hidden="true">
        <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
      </div>

      <!-- Modal Content -->
      <div
        class="bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:max-w-lg w-full mx-4"
      >
        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 relative">
          <!-- Close Button -->
          <div class="absolute top-0 right-0 pt-4 pr-4">
            <button
              @click="toggleModal"
              class="text-gray-900 hover:text-red-500 focus:outline-none hover:bg-gray-400"
            >
              <svg
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <!-- Modal Header -->
          <div class="sm:flex sm:items-start">
            <h3
              class="text-lg leading-6 font-bold text-gray-900"
              id="modal-title"
            >
              Choose Dormitory
            </h3>
          </div>
          <div
            class="pt-4 text-center sm:mt-0 sm:text-left flex flex-col items-center"
          >
            <div class="flex w-full max-w-6xl space-x-4">
              <div class="flex-1">
                <div class="flex items-center justify-between mb-4">
                  <div class="flex flex-col">
                    <template
                      v-for="(dorm, index) in dormitoryData"
                      :key="index"
                    >
                      <label class="inline-flex items-center mb-2">
                        <input
                          type="radio"
                          class="form-radio h-5 w-5 text-gray-600"
                          :name="dorm.name"
                          :value="dorm"
                          v-model="selectedDormitory"
                        />
                        <span class="ml-2"
                          >{{ dorm.name }} - {{ dorm.address }}</span
                        >
                      </label>
                    </template>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Modal Footer -->
          <div class="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
              @click="selectDorm"
            >
              Save
            </button>
            <!-- <button
          type="button"
          class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
          @click="toggleModal"
        >
          Cancel
        </button> -->
          </div>
        </div>
      </div>
    </div>

    <div>
      <div class="">
        <label class="font-bold text-3xl">Add Approver</label>
      </div>
      <div class="flex justify-between items-center">
        <nav>
          <div
            class="bg-white rounded-lg shadow-lg flex justify-between py-2 px-2"
          >
            <ol
              class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse"
            >
              <li class="inline-flex items-center">
                <router-link
                  to="/main"
                  class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                >
                  Home
                </router-link>
              </li>
              <li class="inline-flex items-center">
                <svg
                  class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <router-link
                  to="/main"
                  class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                >
                  Maintenance
                </router-link>
              </li>

              <li>
                <div class="flex items-center">
                  <svg
                    class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                  <span
                    class="ms-1 text-sm font-medium text-blue-500 cursor-not-allowed"
                    >Add Approver</span
                  >
                </div>
              </li>
            </ol>
          </div>
        </nav>
      </div>
    </div>
    <main class="mt-4 p-4">
      <div class="shadow-2xl p-8 bg-white rounded-lg">
        <div @click="back">
          <button
            class="rounded-full p-2 w-20 hover:bg-blue-300 hover:text-white font-medium flex items-center justify-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              class="h-5 w-5"
              fill="blue"
            >
              <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
              <path
                d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
              />
            </svg>
            Back
          </button>
        </div>
        <div class="header mb-6 flex items-center justify-center">
          <label class="text-3xl font-bold">Approver Details</label>
        </div>
        <div class="form grid grid-cols-1 md:grid-cols-2 gap-4">
          <!-- <div>
            <label class="font-medium">Dormitory</label>
            <input
              type="text"
              id="fullName"
              class="mt-2 p-2 border rounded w-full"
              placeholder="ex. ALA"
              v-model="alias"
            />
          </div> -->
          <div>
            <label class="font-medium">Dormitory</label>
            <input
              @click="toggleModal"
              id="email"
              class="mt-2 p-2 border rounded w-full"
              placeholder=""
              v-model="dormitorySelected"
              readonly
            />
          </div>
          <div>
            <label class="font-medium">Employee ID</label>
            <input
              placeholder=""
              type="text"
              id="startDate"
              class="mt-2 p-2 border rounded w-full"
              v-model="approverEmpId"
            />
          </div>
          <div>
            <label class="font-medium">Name</label>
            <input
              type="email"
              id="email"
              class="mt-2 p-2 border rounded w-full"
              placeholder=""
              v-model="approverName"
            />
          </div>

          <div>
            <label class="font-medium">Email Address</label>
            <input
              placeholder=""
              type="text"
              id="startDate"
              class="mt-2 p-2 border rounded w-full"
              v-model="approverEmail"
            />
          </div>
          <div class="col-span-1 md:col-span-2">
            <label class="font-medium">Contact Number</label>
            <input
              type="text"
              id="endDate"
              class="mt-2 p-2 border rounded w-full"
              v-model="approverContact"
            />
          </div>

          <div class="col-span-1 md:col-span-2 mt-6">
            <button
              @click="submitForm"
              class="bg-blue-500 text-white p-3 rounded w-full hover:bg-blue-600"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<script setup>
import { connecttoapi } from "@/connection/apiservices";
import Swal from "sweetalert2";
import { decryptor } from "../../connection/aes";

const details = JSON.parse(decryptor());
const dormitoryData = ref([]);
const router = useRouter();
const route = useRoute();
const branches = [
  {
    id: 1,
    code: "ALA",
    name: "Alabang",
  },
  {
    id: 2,
    code: "TC",
    name: "Training Center",
  },
];

function back() {
  router.push("/main/maintenance/dormitoryroom");
}
const approverName = ref("");
const approverEmail = ref("");
const approverEmpId = ref("");
const approverContact = ref("");
const showDormitoryModal = ref(false);
const selectedDormitory = ref("");
const dormitorySelected = ref(route.query.name);

onMounted(() => {
  getDormitory();

  if (!dormitorySelected.value) {
    showDormitoryModal.value = true;
  } else {
    showDormitoryModal.value = false;
    selectedDormitory.value = route.query.Id;
  }
});

// Function to toggle modal visibility
const toggleModal = () => {
  showDormitoryModal.value = !showDormitoryModal.value;
  console.log("ASd");
};
const selectDorm = () => {
  if (selectedDormitory.value) {
    console.log("Selected Dormitory Name:", selectedDormitory.value.id);
    dormitorySelected.value = selectedDormitory.value.name;
    toggleModal(); // Assuming this function toggles a modal
  } else {
    console.log("No dormitory selected.");
  }
};

async function submitForm() {
  try {
    const dormId = selectedDormitory.value.id || route.query.Id;
    const data = {
      DormitoryId: dormId,
      EmployeeId: approverEmpId.value,
      Name: approverName.value,
      EmailAddress: approverEmail.value,
      Contact: approverContact.value,
      CreatedByUserId: details.userid,
    };

    console.log(data);

    const response = await connecttoapi().post("Approver/AssignApprover", data);
    if (response.data === "Data Inserted") {
      await Swal.fire({
        icon: "success",
        title: "Approver Added",
        text: "Approver assigned successfully added to the record.",
        showConfirmButton: false,
        timer: 1500,
      });
      router.push("/main/maintenance/dormitoryApprover");
    }
  } catch (error) {
    console.error(error);
  } finally {
  }
}

async function getDormitory() {
  // isFetching.value = true;
  try {
    const response = await connecttoapi().get(`Dormitory/GetDormitory`);

    if (response.data != null) {
      dormitoryData.value = response.data;
      console.log(dormitoryData);
      //   isFetching.value = false;
    }
  } catch (error) {
    console.erro("An error occurred:", error);
  } finally {
    //isFetching.value = false;
    // isFetching.value = false;
  }
}
</script>
<style></style>
