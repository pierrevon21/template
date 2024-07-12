<template>
  <div>
    <div v-if="showSearchModal" class="fixed z-10 inset-0 overflow-y-auto">
      <div
        class="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0"
      >
        <!-- Modal Overlay -->
        <div class="fixed inset-0 transition-opacity" aria-hidden="true">
          <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <!-- Modal Content -->
        <div
          class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
        >
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <!-- Close Button -->
            <div class="absolute top-0 right-0 pt-4 pr-4">
              <button
                @click="addDorm"
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
                Add dormitory
              </h3>
            </div>
            <div
              class="pt-4 text-center sm:mt-0 sm:text-left flex flex-col items-center"
            >
              <div class="flex w-full max-w-6xl space-x-4">
                <div class="flex-1">
                  <div class="flex items-center justify-between mb-4">
                    <div class="relative inline-block w-full text-gray-700">
                      <div class="w-full px-3 mb-6 md:mb-0">
                        <div class="flex flex-wrap -mx-3 mb-2">
                          <!-- Position Input -->
                          <div class="w-full">
                            <label
                              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            >
                              Name
                            </label>
                            <input
                              type="text"
                              v-model="dormitoryName"
                              id="dormitoryName"
                              class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            />
                          </div>
                        </div>
                        <div class="flex flex-wrap -mx-3 mb-2">
                          <!-- Employee Name Input -->
                          <div class="w-full">
                            <label
                              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            >
                              Description
                            </label>

                            <input
                              type="text"
                              v-model="dormitoryDescription"
                              id="dormitoryDescription"
                              class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            />

                            <!-- <p v-show="errorBranch" class="text-red-500 text-xs italic">
                    Please fill out this field.
                  </p> -->
                          </div>
                        </div>

                        <!-- <p v-show="errorAlias" class="text-red-500 text-xs italic">
                    Please fill out this field.
                  </p> -->
                      </div>
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
                @click="addormitory"
              >
                Add
              </button>
              <button
                type="button"
                class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
                @click="toggleModal"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mb-2 ml-10">
      <label class="font-bold text-3xl">Approver</label>
    </div>
    <div class="flex justify-between items-center mb-5 mx-10">
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
                  class="ms-1 text-sm font-medium text-gray-400 cursor-pointer hover:text-500"
                  >Maintenance</span
                >
              </div>
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
                  >Dormitory</span
                >
              </div>
            </li>
          </ol>
        </div>
      </nav>
    </div>
    <main>
      <div class="pl-4">
        <div class="flex flex-row space-x-4">
          <!-- <button
            class="bg-green-500 p-4 rounded-md text-white flex flex-row items-center justify-center space-x-4 font-bold hover:bg-green-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              class="h-4 w-4 mr-2"
              fill="white"
            >
              <path
                d="M288 109.3V352c0 17.7-14.3 32-32 32s-32-14.3-32-32V109.3l-73.4 73.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l128-128c12.5-12.5 32.8-12.5 45.3 0l128 128c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L288 109.3zM64 352H192c0 35.3 28.7 64 64 64s64-28.7 64-64H448c35.3 0 64 28.7 64 64v32c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V416c0-35.3 28.7-64 64-64zM432 456a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"
              />
            </svg>
            Import
          </button> -->
          <!-- <button
            @click="toggleModal"
            class="bg-blue-500 p-4 rounded-md text-white flex flex-row items-center justify-center space-x-4 font-bold hover:bg-blue-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              class="h-4 w-4 mr-2"
              fill="white"
            >
             
              <path
                d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
              />
            </svg>
            Add
          </button> -->
        </div>
        <div class="flex space-x-4 items-center ml-auto">
          <label
            for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only"
            >Search</label
          >
          <div class="relative w-1/4">
            <div
              class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
            >
              <svg
                class="w-4 h-4 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
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
            <input
              type="search"
              id="default-search"
              class="w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg"
              placeholder="Search here..."
              @keyup.enter="search($event)"
            />
          </div>

          <button
            data-modal-target="add-user-modal"
            data-modal-toggle="add-user-modal"
            class="flex items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
            @click="addApprover"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="14"
              viewBox="0 0 448 512"
            >
              <path
                fill="#ffffff"
                d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
              />
            </svg>
            <span class="ml-2">Add</span>
          </button>
          <div class="flex-grow"></div>

          <div>
            <select
              id="Showentries"
              class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
              @change="showEntries($event)"
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
              <option value="50">70</option>
              <option value="100">100</option>
            </select>
          </div>
          <h5 class="card-title text-black text-lg font-bold">
            Page:{{ page }}
          </h5>
        </div>
        <div class="">
          <div class="flex flex-col p-4">
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div class="overflow-hidden rounded-t-md">
                  <table
                    class="min-w-full text-center text-sm font-light border border-gray-400"
                  >
                    <thead class="font-medium dark:border-white/10">
                      <tr>
                        <th
                          scope="col"
                          class="px-6 py-4 border-b-2 border-gray-400 bg-blue-400 text-white text-md"
                          v-for="header in tableHeader"
                        >
                          {{ header.name }}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <div v-if="isFetching"><loading /></div>
                      <template v-if="sortedItems && sortedItems.length > 0">
                        <tr
                          class="border-b-2 border-gray-400"
                          v-for="(approver, index) in sortedItems"
                        >
                          <!-- <td class="w-1/2 b px-6 py-4 dark:border-white/10">
                            {{ reimbursement.concern }}
                          </td> -->
                          <td
                            class="whitespace-nowrap b px-6 py-4 dark:border-white/10"
                          >
                            {{ approver.dormitoryName }}
                          </td>
                          <td
                            class="whitespace-nowrap b px-6 py-4 dark:border-white/10"
                          >
                            {{ approver.name }}
                          </td>
                          <td
                            class="whitespace-nowrap b px-6 py-4 dark:border-white/10"
                          >
                            {{ approver.employeeId }}
                          </td>
                          <td
                            class="whitespace-nowrap b px-6 py-4 dark:border-white/10"
                          >
                            {{ approver.emailAddress }}
                          </td>
                          <td
                            class="whitespace-nowrap b px-6 py-4 dark:border-white/10"
                          >
                            {{ approver.contactNumber }}
                          </td>
                          <td
                            class="whitespace-nowrap b px-6 py-4 dark:border-white/10"
                          >
                            {{ approver.statusName }}
                          </td>
                          <td
                            class="whitespace-nowrap b px-6 py-4 dark:border-white/10"
                          >
                            {{ formatDate(approver.createdDate) }}
                          </td>

                          <td
                            class="whitespace-nowrap b px-6 py-4 dark:border-white/10 flex items-center justify-center"
                          >
                            <button
                              class="flex items-center justify-center space-x-2 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 0"
                              @click="edit(reimbursement)"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="1em"
                                viewBox="0 0 512 512"
                              >
                                <path
                                  fill="white"
                                  d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"
                                />
                              </svg>
                            </button>
                            <button
                              class="space-x-2 flex items-center justify-center text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 0"
                              @click="addRoom(dormitory)"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                                class="h-4 w-4"
                                fill="white"
                              >
                                <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                                <path
                                  d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"
                                />
                              </svg>
                            </button>
                          </td></tr
                      ></template>
                      <template v-else>
                        <tr>
                          <td colspan="9" class="text-center">
                            <div class="container mx-auto mt-8">
                              <div class="flex items-center justify-center">
                                <!-- Your styled h1 element -->
                                <h1
                                  class="text-4xl font-bold text-red-500 mb-4 flowbite-heading w-full"
                                >
                                  No Data Found
                                </h1>

                                <!-- Your content goes here -->
                              </div>
                            </div>
                          </td>
                        </tr>
                      </template>
                    </tbody>
                  </table>
                </div>
                <div class="flex items-center justify-between">
                  <span class="small mr-3"
                    >Showing <span id="currentpage">{{ paginate }} </span> out
                    of
                    <span id="totalpages"
                      >{{ dormitoryApproverData.totalpages }} Entries</span
                    ></span
                  >

                  <nav
                    class="flex items-center justify-between pt-4"
                    aria-label="Table navigation"
                  >
                    <ul class="inline-flex items-center -space-x-px">
                      <Paginate
                        v-if="dormitoryApproverData.totalpages > 1"
                        class=""
                        v-model="paginate"
                        :page-count="dormitoryApproverData.totalpages"
                        :click-handler="goToPage"
                        prev-text="Prev"
                        next-text="Next"
                        first-button-text="First"
                        :first-last-button="true"
                        container-class="my-pagination flex justify-center items-center"
                        page-link-class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                        active-class="px-3 py-2 text-blue-500 border border-blue-500 bg-blue-100 hover:bg-blue-100 hover:text-blue-700 "
                        prev-class=" px-2 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                        next-class=" px-2 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                        next-link-class="'page-link'"
                        style="cursor: pointer"
                      />
                    </ul>
                  </nav>
                  <nav aria-label="Page navigation example">
                    <ul class="pagination flex items-center justify-between">
                      <li class="page-item">
                        <span class="small mr-1 ml-1">Page Number: </span>
                      </li>
                      <li class="page-item">
                        <input
                          id="gotopge"
                          type="number"
                          value="1"
                          min="1"
                          :max="dormitoryApproverData.totalpages"
                          class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                          style="width: 60px"
                          @change="SearchEntries($event)"
                        />
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<script lang="ts" setup>
import { connecttoapi } from "@/connection/apiservices";
import Paginate from "vuejs-paginate-next";
const dormitoryApproverData = ref([]);

const router = useRouter();

function addApprover() {
  router.push("addApprover");
}

function addRoom(dormitory) {
  router.push(
    `/main/maintenance/addDormitoryRoom?Id=${dormitory.id}&name=${dormitory.name}`
  );
}

var tableHeader = [
  { name: "Dormitory" },
  { name: "Name" },
  { name: "Employee Id" },
  { name: "Email Address" },
  { name: "Contact Number" },
  { name: "Status" },
  { name: "Created Date" },
  { name: "Action" },
];

onMounted(() => {
  GetUserSubMenu();
});

function formatDate(date) {
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "numeric",
    minute: "numeric",
    hour12: true, // Use 12-hour clock
  };
  const formattedDate = new Date(date).toLocaleString(undefined, options);
  return formattedDate;
}

const paginate = ref(1);
let page = 1;
let defaultentry = 5;
const currentPage = ref(1);
const Search = ref("");

// const dormitoryApproverData = ref([]);

function goToPage(numpage: any) {
  page = numpage;
  connecttoapi()
    .post(
      `ListOfDormitoryApprover/ListOfDormitoryApprovers?Page=${page}&ItemsPerPage=${defaultentry}`
    )
    .then((response) => {
      if (response.data != null) {
        dormitoryApproverData.value = response.data;
        console.log(dormitoryApproverData.value);
      }
    });
}

// Search Pagination//
function search($event: { target: { value: string } }) {
  page = 1;
  Search.value = $event.target.value;

  // loading.value = true;
  connecttoapi()
    .post(
      `ListOfDormitoryApprover/ListOfDormitoryApprovers?Page=${page}&ItemsPerPage=${defaultentry}&search=${Search.value}`
    )
    .then((response) => {
      if (response.data != null) {
        dormitoryApproverData.value = response.data;
        console.log(dormitoryApproverData.value);
      }
    });
  GetUserSubMenu();
}
// Search Pagination//

// TableShowentries //
const Showentries = ref("");
// TableShowentries //

// Show Entries Pagination//
function showEntries($event: { target: { value: any } }) {
  Showentries.value = $event.target.value;
  currentPage.value = page;
  defaultentry = Showentries.value;
  connecttoapi()
    .post(
      `ListOfDormitoryApprover/ListOfDormitoryApprovers?Page=${currentPage.value}&ItemsPerPage=${defaultentry}&search=${Search.value}`
    )
    .then((response) => {
      if (response.data != null) {
        dormitoryApproverData.value = response.data;
      }
    });
}
// Show Entries Pagination//

// Search Entries Pagination//
function SearchEntries($event: { target: { value: any } }) {
  gotopge.value = $event.target.value;
  page = gotopge.value;
  paginate.value = gotopge.value;
  connecttoapi()
    .post(
      `ListOfDormitoryApprover/ListOfDormitoryApprovers?Page=${paginate.value}&ItemsPerPage=${defaultentry}&search=${Search.value}`
    )
    .then((response) => {
      if (response.data != null) {
        dormitoryApproverData.value = response.data;
      }
    });
  if (gotopge.value == "") {
    FirstPage();
  }
  GetUserSubMenu();
}
// Search Entries Pagination//

async function GetUserSubMenu() {
  try {
    const response = await connecttoapi().post(
      `ListOfDormitoryApprover/ListOfDormitoryApprovers?Page=${page}&ItemsPerPage=${defaultentry}`
    );
    if (response.data != null) {
      dormitoryApproverData.value = response.data;
      console.log(dormitoryApproverData);
    }
  } catch (error) {
    console.error("An error occurred:", error);
  } finally {
  }
}

// First Page of Pagination //
function FirstPage() {
  page = 1;
  connecttoapi()
    .post(
      `ListOfDormitoryApprover/ListOfDormitoryApprovers?Page=${page}&ItemsPerPage=${defaultentry}&search=${Search.value}`
    )
    .then((response) => {
      if (response.data != null) {
        dormitoryApproverData.value = response.data;
      }
    });
  GetUserSubMenu();
}
// First Page of Pagination //

//Sorting
const currentSortColumn = ref();
const currentSortDirection = ref();

const sortColumn = (columnName: any) => {
  if (columnName === currentSortColumn.value) {
    currentSortDirection.value =
      currentSortDirection.value === "asc" ? "desc" : "asc";
  } else {
    currentSortColumn.value = columnName;
    currentSortDirection.value = "asc";
  }
};

const sortIcon = (columnName: any) => {
  if (!currentSortColumn.value || columnName !== currentSortColumn.value) {
    return "p-sortable-column-icon pi pi-fw pi-sort-alt";
  }
  return currentSortDirection.value === "asc"
    ? "pi pi-sort-amount-up"
    : "pi pi-sort-amount-down";
};

const sortedItems = computed(() => {
  return dormitoryApproverData?.value?.approverList
    ?.slice()
    ?.sort((a: { [x: string]: number }, b: { [x: string]: number }) => {
      const modifier = currentSortDirection.value === "desc" ? -1 : 1;
      if (a[currentSortColumn.value] < b[currentSortColumn.value]) {
        return -1 * modifier;
      }
      if (a[currentSortColumn.value] > b[currentSortColumn.value]) {
        return 1 * modifier;
      }
      return 0;
    });
});
//Sorting
</script>
<style></style>
