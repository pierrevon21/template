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
              class="text-xl leading-6 font-bold text-gray-900"
              id="modal-title"
            >
              Choose Dormitory
            </h3>
          </div>
          <input
            type="search"
            id="default-search"
            class="mt-2 w-full p-3.5 ps-10 text-sm text-gray-900 border border-gray-400 shadow-md rounded-lg"
            placeholder="Search here..."
          />

          <div
            class="pt-4 text-center sm:mt-0 sm:text-left flex flex-col items-center"
          >
            <div class="flex w-full space-x-4">
              <div class="flex-1">
                <div class="flex items-center justify-between">
                  <div class="flex flex-col w-full">
                    <template
                      v-for="(dorm, index) in dormitoryData"
                      :key="index"
                    >
                      <div
                        class="mt-4 flex items-center hover:bg-blue-200 w-full rounded-lg p-4 shadow-md cursor-pointer"
                        @click="selectDorm(dorm)"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 384 512"
                          class="h-16 w-16 text-gray-600 mr-4"
                        >
                          <path
                            d="M48 0C21.5 0 0 21.5 0 48V464c0 26.5 21.5 48 48 48h96V432c0-26.5 21.5-48 48-48s48 21.5 48 48v80h96c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H48zM64 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V240zm112-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V240zM80 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V112zM272 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16z"
                          />
                        </svg>

                        <div class="">
                          <div class="text-lg font-semibold">
                            {{ dorm.name }}
                          </div>
                          <div class="text-sm text-gray-600">
                            {{ dorm.alias }}
                          </div>
                          <div class="text-sm text-gray-600 italic">
                            {{ dorm.address }}
                          </div>

                          <div class="text-sm text-gray-600 ml-auto">
                            Other Information: {{ dorm.otherInformation }}
                          </div>
                        </div>
                      </div>
                    </template>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Modal Footer -->
          <div class="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <!-- <button
              type="button"
              class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
              @click="selectDorm"
            >
              Save
            </button> -->
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
        <label class="font-bold text-3xl">Dorm Booking</label>
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
                    >Book a dorm</span
                  >
                </div>
              </li>
            </ol>
          </div>
        </nav>
      </div>
    </div>
    <main class="mt-4 p-4" v-if="!isFetching">
      <div class="shadow-2xl p-8 bg-white rounded-lg">
        <div @click="back">
          <button
            class="rounded-full border-2 border-blue-400 p-2 w-20 hover:bg-blue-300 hover:text-white font-medium flex items-center justify-center gap-2"
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
          <label class="text-3xl font-bold">BOOKING FORM</label>
        </div>
        <div class="form grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div v-if="!showSearch">
              <div class="col-span-1 md:col-span-2 flex items-center">
                <input
                  type="radio"
                  id="employeeYes"
                  name="employeeStatus"
                  class="mr-2"
                  @click="toggleSearch"
                />
                <label for="employeeYes" class="font-medium"
                  >Employee of Fast</label
                >
              </div>
              <div class="col-span-1 md:col-span-2 flex items-center">
                <input
                  checked
                  type="radio"
                  id="employeeNo"
                  name="employeeStatus"
                  class="mr-2"
                />
                <label for="employeeNo" class="font-medium">Not Employee</label>
              </div>
            </div>

            <div v-else class="mb-4">
              <div class="relative h-10">
                <div
                  class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                >
                  <svg
                    class="w-4 h-4 text-gray-500"
                    aria-hidden="true"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <div class="flex flex-row">
                  <input
                    type="search"
                    id="default-search"
                    class="placeholder:italic placeholder:text-xs float-right h-8 md:h-10 block float-left md:w-full p-4 pl-10 text-sm border border-gray-300 rounded-2xl focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Search here..."
                    v-model="searchMember"
                    @keypress.enter="searchEmployee()"
                  />
                  <button
                    @click="toggleSearch"
                    class="ml-2 bg-red-400 rounded p-2 font-bold text-white rounded-xl"
                  >
                    Cancel
                  </button>
                </div>

                <div
                  class="flex items-center mt-2 ml-2"
                  v-if="employeeSearchData.length === 0"
                >
                  <input
                    id="checkbox"
                    type="checkbox"
                    v-model="checked"
                    class="form-checkbox h-5 w-5 text-blue-600"
                    @change="populateFields"
                  />
                  <label for="checkbox" class="ml-2 text-gray-700"
                    >Auto-fill with my details</label
                  >
                </div>
              </div>

              <main class="w-full">
                <ul
                  v-if="employeeSearchData && employeeSearchData.length > 0"
                  class="px-3 pb-3 overflow-y-auto border-2 rounded-lg border-gray-300 text-sm text-back scrollable-list overflow-y-auto h-[8rem]"
                  aria-labelledby="dropdownSearchButton"
                >
                  <span class="italic">Search Result: </span>
                  <li
                    v-for="user in employeeSearchData"
                    :key="user.id"
                    class="hover:bg-gray-300"
                  >
                    <div class="flex items-center pl-2 rounded">
                      <label
                        @click="selectEmployee(user)"
                        class="w-full py-2 ml-2 text-sm font-medium text-gray-900 rounded"
                        style="cursor: pointer"
                      >
                        {{ user.employeename }}
                      </label>
                    </div>
                  </li>
                </ul>
                <div
                  v-else
                  class="text-xl font-bold flowbite-heading w-full"
                ></div>
                <!-- <div class="container mx-auto">
                          <div class="flex items-center justify-center">
                           
                          </div>
                        </div> -->
              </main>
            </div>
          </div>

          <div class="col-span-1 md:col-span-2">
            <label class="font-medium"
              >Dormitory <span class="text-red-400">*</span></label
            >

            <input
              v-model="dormitorySelected"
              id="dropdown"
              class="mt-2 p-2 border rounded w-full border-gray-400"
              readonly
              @click="toggleModal"
            />
          </div>
          <div>
            <label class="font-medium"
              >Full Name <span class="text-red-400">*</span></label
            >
            <input
              type="text"
              id="fullName"
              class="mt-2 p-2 border rounded w-full border-gray-400 border-gray-400"
              placeholder="Enter your full name"
              v-model="fullName"
            />
          </div>
          <div>
            <label class="font-medium"
              >Employee Id <span class="text-red-400">*</span></label
            >
            <input
              type="text"
              id="employeeId"
              class="mt-2 p-2 border rounded w-full border-gray-400"
              placeholder="Enter your employee id"
              v-model="employeeId"
              @input="validateNumber"
            />
          </div>
          <div>
            <label class="font-medium"
              >Contact Number <span class="text-red-400">*</span></label
            >
            <input
              type="text"
              id="contactNumber"
              class="mt-2 p-2 border rounded w-full border-gray-400"
              placeholder="Enter your contact number"
              v-model="contactNumber"
            />
          </div>
          <div>
            <label class="font-medium"
              >Email <span class="text-red-400">*</span></label
            >
            <input
              type="email"
              id="email"
              class="mt-2 p-2 border rounded w-full border-gray-400"
              placeholder="Enter your email"
              v-model="email"
            />
          </div>
          <div>
            <label class="font-medium"
              >Start Date <span class="text-red-400">*</span></label
            >
            <input
              type="date"
              id="startDate"
              class="mt-2 p-2 border rounded w-full border-gray-400"
              v-model="startDate"
              :min="minStartDate"
            />
          </div>
          <div>
            <label class="font-medium"
              >End Date <span class="text-red-400">*</span></label
            >
            <input
              type="date"
              id="endDate"
              class="mt-2 p-2 border rounded w-full border-gray-400"
              v-model="endDate"
              :min="minEndDate"
            />
          </div>
          <div class="col-span-1 md:col-span-2">
            <label class="font-medium"
              >Site / Branch <span class="text-red-400">*</span></label
            >

            <select
              v-model="selectedBranch"
              id="dropdown"
              class="mt-2 p-2 border rounded w-full border-gray-400"
            >
              <option disabled value="" selected hidden>Select Branch</option>

              <option
                v-for="branch in branchData"
                :key="branch.id"
                :value="branch"
              >
                {{ branch.siteName }} - {{ branch.siteCode }}
              </option>
            </select>
          </div>

          <div class="col-span-1 md:col-span-2">
            <label class="font-medium">Remarks </label>
            <textarea
              type="text"
              id="endDate"
              class="mt-2 p-2 border rounded w-full"
              v-model="bookingRemarks"
              rows="5"
            ></textarea>
          </div>
          <div class="col-span-1 md:col-span-2 mt-6">
            <button
              @click="submitForm"
              class="bg-blue-500 text-white p-3 rounded w-full hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </main>
    <div v-else>
      <loading />
    </div>
  </div>
</template>
<script setup>
import { connecttoapi } from "@/connection/apiservices";
import Swal from "sweetalert2";
import { decryptor } from "../../connection/aes";
const details = JSON.parse(decryptor());
const searchMember = ref("");
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
const fullName = ref("");
const employeeId = ref("");
const email = ref("");
const contactNumber = ref("");
const startDate = ref("");
const endDate = ref("");
const selectedBranch = ref("");
const showDormitoryModal = ref(true);
const router = useRouter();
const dormitoryData = ref([]);
const branchData = ref([]);
const selectedDormitory = ref("");
const dormitorySelected = ref();
const dormitoryIdSelected = ref();
const isFetching = ref(false);
const showSearch = ref(false);
const bookingRemarks = ref("");
const employeeSearchData = ref([]);
const checked = ref(false);

onMounted(() => {
  getDormitory();
  getBranches();
  console.log(details);
});

const validateNumber = (event) => {
  employeeId.value = employeeId.value.replace(/\D/g, "");
};
const minStartDate = computed(() => {
  const today = new Date();
  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, "0");
  const day = today.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
});

const minEndDate = computed(() => {
  if (startDate.value) {
    return startDate.value;
  } else {
    return minStartDate.value;
  }
});

// Function to toggle modal visibility
const toggleModal = () => {
  showDormitoryModal.value = !showDormitoryModal.value;
};
const selectDorm = (dorm) => {
  dormitoryIdSelected.value = dorm.id;

  dormitorySelected.value = dorm.name;
  toggleModal();
};

async function getDormitory() {
  isFetching.value = true;
  try {
    const response = await connecttoapi().get(`Dormitory/GetDormitory`);

    if (response.data != null) {
      dormitoryData.value = response.data;
      console.log(dormitoryData);
      //   isFetching.value = false;
    }
  } catch (error) {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });
    Toast.fire({
      icon: "error",
      title: `${error}`,
    });
  } finally {
    isFetching.value = false;
    // isFetching.value = false;
  }
}

async function getBranches() {
  isFetching.value = true;
  try {
    const response = await connecttoapi().get(`Site/GetBranch`);

    if (response.data != null) {
      branchData.value = response.data;
      console.log(branchData);
      //   isFetching.value = false;
    }
  } catch (error) {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });
    Toast.fire({
      icon: "error",
      title: `${error}`,
    });
  } finally {
    isFetching.value = false;
    // isFetching.value = false;
  }
}

async function submitForm() {
  isFetching.value = true;

  // if (
  //   !fullName.value ||
  //   !employeeId.value ||
  //   !email.value ||
  //   !contactNumber.value ||
  //   !startDate.value ||
  //   !endDate.value ||
  //   !selectedBranch.value
  // ) {
  //   isFetching.value = false;
  //   const Toast = Swal.mixin({
  //     toast: true,
  //     position: "top-end",
  //     showConfirmButton: false,
  //     timer: 3000,
  //     timerProgressBar: true,
  //     didOpen: (toast) => {
  //       toast.onmouseenter = Swal.stopTimer;
  //       toast.onmouseleave = Swal.resumeTimer;
  //     },
  //   });
  //   Toast.fire({
  //     icon: "error",
  //     title: "Fill all the required fields.",
  //   });
  //   return;
  // }

  if (endDate.value < startDate.value) {
    isFetching.value = false;
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });
    Toast.fire({
      icon: "error",
      title: "Invalid selection of Date",
    });
    return;
  }

  try {
    const data = {
      DormitoryId: dormitoryIdSelected.value,
      FullName: fullName.value,
      EmployeeId: employeeId.value,
      EmailAddress: email.value,
      ContactNumber: contactNumber.value,
      DateFrom: startDate.value,
      DateTo: endDate.value,
      BranchCode: selectedBranch.value.siteCode,
      BranchName: selectedBranch.value.siteName,
      CreatedByUserId: details.userid,
      Remarks: bookingRemarks.value,
    };

    console.log(data);
    const response = await connecttoapi().post(
      "Transactions/AddTransaction",
      data
    );
    if (response.data === "Data Inserted") {
      await Swal.fire({
        icon: "success",
        title: "Form Submitted",
        text: "Your form has been submitted successfully. Please wait for approval.",
        showConfirmButton: false,
        timer: 1500,
      });
      window.location.reload();
    }
  } catch (error) {
    console.error(error);
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });
    Toast.fire({
      icon: "error",
      title: `${error}`,
    });
  } finally {
    isFetching.value = false;
  }
}
const toggleSearch = () => {
  showSearch.value = !showSearch.value;
};

function back() {
  router.push("/main/listbooking");
}

const searchEmployee = async () => {
  isFetching.value = true;
  employeeSearchData.value = [];
  // errorSearch.value = !searchMember.value;

  // if (!searchMember.value || searchMember.value == null) {
  //   return;
  // }

  try {
    const response = await connecttoapi().get(
      `Employee/SearchEmployee?search=${searchMember.value}`
    );
    // .get(`User/SearchEmployee?employeename=${searchMember.value}`)
    if (response.status == 200) {
      employeeSearchData.value = response.data;
      console.log(response.data);
    }
    // console.log(userdata);
  } catch (e) {
    console.log(e);
    // Cancel the process
    return;
  } finally {
    isFetching.value = false;
  }
};

const selectEmployee = async (param) => {
  fullName.value = param.employeename;
  email.value = param.email;
  employeeId.value = param.employeeId;
  contactNumber.value = param.contact;

  employeeSearchData.value = "";
  searchMember.value = "";
};

const populateFields = () => {
  if (checked.value) {
    fullName.value = details.requestorname;
    email.value = details.email;
    employeeId.value = details.empid;
    contactNumber.value = details.contact;
  } else {
    fullName.value = "";
    email.value = "";
    employeeId.value = "";
    contactNumber.value = "";
  }
};
</script>
<style></style>
