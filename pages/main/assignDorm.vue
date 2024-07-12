<template>
  <div>
    <div>
      <div class="">
        <label class="font-bold text-3xl">Assign Room</label>
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
                  Transaction
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
                    >Assign Room</span
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
        <div class="flex justify-between items-center">
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
          <div
            @click="toggleLogsModal"
            class="flex items-center justify-center space-x-2 text-xl cursor-pointer hover:bg-blue-200 p-2 rounded-lg"
          >
            <label class="font-bold cursor-pointer">Logs</label>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              class="h-10 w-10 cursor-pointer"
            >
              <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
              <path
                d="M0 80v48c0 17.7 14.3 32 32 32H48 96V80c0-26.5-21.5-48-48-48S0 53.5 0 80zM112 32c10 13.4 16 30 16 48V384c0 35.3 28.7 64 64 64s64-28.7 64-64v-5.3c0-32.4 26.3-58.7 58.7-58.7H480V128c0-53-43-96-96-96H112zM464 480c61.9 0 112-50.1 112-112c0-8.8-7.2-16-16-16H314.7c-14.7 0-26.7 11.9-26.7 26.7V384c0 53-43 96-96 96H368h96z"
              />
            </svg>
          </div>

          <div
            v-if="showLogsModal"
            class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75"
          >
            <div class="bg-white rounded-lg shadow-lg p-6 w-3/4 max-w-3xl">
              <div class="flex justify-between items-center mb-4">
                <h2 class="text-xl font-bold">Logs</h2>
                <button
                  @click="toggleLogsModal"
                  class="text-gray-600 hover:text-red-900 text-3xl"
                >
                  &times;
                </button>
              </div>
              <table class="min-w-full">
                <thead class="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      v-for="header in tableHeader"
                    >
                      {{ header.name }}
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  <tr v-for="(logs, index) in logData">
                    <td
                      class="whitespace-nowrap b px-6 py-4 dark:border-white/10"
                    >
                      {{ logs.body }}
                    </td>
                    <td
                      class="whitespace-nowrap b px-6 py-4 dark:border-white/10"
                    >
                      {{ logs.createdByUserId }}
                    </td>

                    <td
                      class="whitespace-nowrap b px-6 py-4 dark:border-white/10"
                    >
                      {{ formatDate(logs.createdDate) }}
                    </td>
                  </tr>

                  <!-- Add more rows as needed -->
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div class="header mb-6 flex flex-col items-center justify-center">
          <label class="text-3xl font-bold">Booking Details</label>
          <div class="flex flex-row items-center justify-center space-x-4 mt-4">
            <!-- <div>
              <label class="font-medium"> Status : </label>
              <span
                class="border border-gray-200 p-1.5 rounded-lg"
                :class="{
                  'bg-green-500 text-white': transactionStatus === 2,
                  'bg-yellow-300 text-green-800': transactionStatus === 1,
                  'bg-red-100 text-red-800': transactionStatus === 3,
                  'bg-gray-100 text-gray-800': transactionStatus === 4,
                }"
              >
                {{
                  transactionStatus === 1
                    ? "Pending"
                    : transactionStatus === 2
                    ? "Approved"
                    : transactionStatus === 3
                    ? "Disapproved"
                    : transactionStatus === 4
                    ? "Cancelled"
                    : "Unknown Status"
                }}
              </span>
            </div> -->
            <div class="space-x-4" v-if="intStatus === 1">
              <div>
                <div
                  class="col-span-1 md:col-span-2 flex items-center justify-center"
                >
                  <button
                    @click="fetchedDormitoryRooms"
                    class="bg-green-500 text-white p-3 rounded w-1/2 hover:bg-green-600 text-sm font-bold"
                  >
                    Assign Room
                  </button>
                </div>
                <div class="mt-3">
                  <label class="font-medium"> Room to assign : </label
                  ><span class="border border-gray-200 p-1.5 rounded-lg">
                    {{
                      isEmpty(assignedRoom)
                        ? "No room assigned"
                        : assignedRoom.dormitoryRoomName
                    }}
                  </span>
                </div>
              </div>
            </div>
            <div>
              <div class="flex space-x-4">
                <div v-if="intStatus === 2">
                  <button
                    @click="checkIn"
                    class="bg-blue-400 p-2 text-white rounded-md hover:bg-blue-600"
                  >
                    Check In
                  </button>
                </div>

                <div v-else-if="intStatus === 4">
                  <button
                    @click="checkOut()"
                    class="bg-red-400 p-2 text-white rounded-md hover:bg-red-600"
                  >
                    Check Out
                  </button>
                </div>
              </div>
            </div>
          </div>
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
            <label class="font-medium">Status</label>
            <input
              type="text"
              id="email"
              class="mt-2 p-2 border rounded w-full"
              placeholder=""
              readonly
              v-model="transactionStatus"
            />
          </div>
          <div>
            <label class="font-medium">Room Assign</label>
            <input
              type="text"
              id="email"
              class="mt-2 p-2 border rounded w-full"
              placeholder=""
              readonly
              v-model="roomAssigned"
            />
          </div>
          <div>
            <label class="font-medium">Employee Id</label>
            <input
              type="text"
              id="email"
              class="mt-2 p-2 border rounded w-full"
              placeholder=""
              readonly
              v-model="bookerEmpId"
            />
          </div>
          <div>
            <label class="font-medium">Name</label>
            <input
              placeholder=""
              type="text"
              id="startDate"
              class="mt-2 p-2 border rounded w-full"
              v-model="bookerName"
              readonly
            />
          </div>
          <div>
            <label class="font-medium">Email Address</label>
            <input
              type="email"
              id="email"
              class="mt-2 p-2 border rounded w-full"
              placeholder=""
              v-model="bookerEmail"
              readonly
            />
          </div>
          <div>
            <label class="font-medium">Contact Number</label>
            <input
              placeholder=""
              type="text"
              id="startDate"
              class="mt-2 p-2 border rounded w-full"
              v-model="bookerContact"
              readonly
            />
          </div>
          <div>
            <label class="font-medium">Branch Code</label>
            <input
              type="text"
              class="mt-2 p-2 border rounded w-full"
              placeholder=""
              v-model="bookerBranchCode"
              readonly
            />
          </div>
          <div>
            <label class="font-medium">Branch Name</label>
            <input
              placeholder=""
              type="text"
              id="startDate"
              class="mt-2 p-2 border rounded w-full"
              v-model="bookerBranchName"
              readonly
            />
          </div>
          <div
            class="grid grid-cols-1 md:grid-cols-3 gap-4 col-span-1 md:col-span-2"
          >
            <div>
              <label class="font-medium">Date From</label>
              <input
                placeholder=""
                type="text"
                id="startDate"
                class="mt-2 p-2 border rounded w-full"
                v-model="dateFrom"
                readonly
              />
            </div>
            <div>
              <label class="font-medium">Date To</label>
              <input
                placeholder=""
                type="text"
                id="startDate"
                class="mt-2 p-2 border rounded w-full"
                v-model="dateTo"
                readonly
              />
            </div>
            <div>
              <label class="font-medium">Duration Days</label>
              <input
                placeholder=""
                type="text"
                id="startDate"
                class="mt-2 p-2 border rounded w-full"
                v-model="durationDays"
                readonly
              />
            </div>
          </div>
          <div class="col-span-1 md:col-span-2">
            <label class="font-medium">Remarks</label>
            <textarea
              type="text"
              id="endDate"
              class="mt-2 p-2 border rounded w-full"
              v-model="bookingRemarks"
              rows="5"
              readonly
            ></textarea>

            <!-- <div class="col-span-1 md:col-span-2">
              <label class="font-medium">Transaction Status</label>
              <div class="mt-2 p-2 border rounded w-full">
                <span
                  :class="{
                    'bg-green-100 text-green-800':
                      transactionStatus === 'approved',
                    'bg-red-100 text-red-800': transactionStatus === 'rejected',
                    'bg-gray-100 text-gray-800':
                      transactionStatus === 'pending',
                  }"
                  class="px-2 py-1 rounded-full"
                >
                  {{ transactionStatus }}
                </span>
              </div>
            </div> -->
          </div>

          <div class="col-span-1 md:col-span-2 mt-6">
            <button
              v-if="intStatus === 1"
              @click="submitRoom"
              class="bg-blue-500 text-white p-3 rounded w-full hover:bg-blue-600"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </main>

    <div v-else>
      <loading />
    </div>

    <div
      v-if="showDormitoryRoomModal"
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
              class="text-lg leading-6 font-bold text-gray-900 mb-4"
              id="modal-title"
            >
              Choose Room
            </h3>
          </div>
          <hr />
          <div
            class="pt-4 text-center sm:mt-0 sm:text-left flex flex-col items-center overflow-y-auto h-[30rem]"
          >
            <div class="flex w-full space-x-4">
              <div class="flex-1">
                <div class="flex items-center justify-between">
                  <div class="flex flex-col w-full">
                    <template
                      v-for="(dorm, index) in dormitoryRoomData"
                      :key="index"
                    >
                      <div
                        class="mt-4 flex items-center hover:bg-blue-200 w-full rounded-lg p-4 shadow-md cursor-pointer"
                        :class="{
                          'cursor-not-allowed opacity-50':
                            dorm.availableCount === 0,
                        }"
                        @click="
                          dorm.availableCount > 0 ? selectRoom(dorm) : null
                        "
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          class="h-16 w-16 text-gray-600 mr-4"
                        >
                          <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                          <path
                            d="M320 32c0-9.9-4.5-19.2-12.3-25.2S289.8-1.4 280.2 1l-179.9 45C79 51.3 64 70.5 64 92.5V448H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H96 288h32V480 32zM256 256c0 17.7-10.7 32-24 32s-24-14.3-24-32s10.7-32 24-32s24 14.3 24 32zm96-128h96V480c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H512V128c0-35.3-28.7-64-64-64H352v64z"
                          />
                        </svg>

                        <div class="">
                          <div class="text-lg font-semibold">
                            {{ dorm.dormitoryRoomName }}
                          </div>
                          <div class="text-sm text-gray-600">
                            {{ dorm.alias }}
                          </div>
                          <div class="text-sm text-gray-600">
                            {{ dorm.details }}
                          </div>

                          <div class="text-sm text-gray-600 ml-auto">
                            Available: {{ dorm.availableCount }} /
                            {{ dorm.capacity }}
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
  </div>
</template>
<script setup>
import { connecttoapi } from "@/connection/apiservices";
import Swal from "sweetalert2";
import { decryptor } from "../../connection/aes";
import { decryptor2 } from "../../connection/approveraes";

const showLogsModal = ref(false);
const assignedRoom = ref({});
const approverDetails = JSON.parse(decryptor2());
const details = JSON.parse(decryptor());
const dormitoryData = ref([]);
const router = useRouter();
const route = useRoute();
const dataId = ref(route.query.Id);
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
const logData = ref();
var tableHeader = [
  { name: "Status" },
  { name: "CreatedByUserId" },
  { name: "CreatedDate" },
];

const intStatus = ref();
const bookerEmpId = ref("");
const bookerName = ref("");
const bookerEmail = ref("");
const bookerBranchCode = ref("");
const bookerBranchName = ref("");
const bookerContact = ref("");
const dateFrom = ref("");
const dateTo = ref("");
const durationDays = ref("");
const bookingRemarks = ref("");
const selectedDormitory = ref("");
const transactionStatus = ref("");
const dormitorySelected = ref(route.query.name);
const dormitoryRoomData = ref([]);
const showDormitoryRoomModal = ref(false);
const roomAssigned = ref("");
const isFetching = ref(false);
const modalPosition = ref({ top: "50%", left: "50%" });

onMounted(() => {
  getDormitory();
  fetchReimbursementData();
  fetchLogs();
  console.log(approverDetails);
});

async function fetchLogs() {
  isFetching.value = true;
  try {
    const response = await connecttoapi().get(
      `Log/GetLog?transactionId=${dataId.value}`
    );

    logData.value = response.data;
    console.log(logData);
  } catch (e) {
    console.error(e);
  } finally {
    isFetching.value = false;
  }
}
const isEmpty = (obj) => {
  return Object.keys(obj).length === 0;
};
function back() {
  router.push("/main/listbooking");
}
// Function to toggle modal visibility
const toggleModal = () => {
  showDormitoryRoomModal.value = !showDormitoryRoomModal.value;
};

const toggleLogsModal = () => {
  showLogsModal.value = !showLogsModal.value;
};

async function fetchReimbursementData() {
  isFetching.value = true;
  console.log(details);
  try {
    const response = await connecttoapi().get(
      `Transactions/GetTransactionId?transactId=${dataId.value}`
    );
    console.log(response);
    if (response.data != null) {
      console.log(response.data[0]);
      const data = response.data[0];
      bookerEmpId.value = data.employeeId;
      bookerName.value = data.fullname;
      bookerEmail.value = data.emailAddress;
      bookerBranchCode.value = data.branchCode;
      bookerBranchName.value = data.branchName;
      bookerContact.value = data.contactNumber;
      dateFrom.value = formatDate(data.dateFrom); // Assuming formatDate is a function to format date
      dateTo.value = formatDate(data.dateTo);
      durationDays.value = data.durationDays;
      bookingRemarks.value = data.remarks;
      intStatus.value = data.status;

      transactionStatus.value = data.statusName;

      roomAssigned.value = data.dormitoryRoomName
        ? data.dormitoryRoomName
        : "No Room assigned";
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
      title: "Fetching data from the server failed",
    });
  } finally {
    isFetching.value = false;
  }
}

function selectRoom(dorm) {
  assignedRoom.value = dorm;
  showDormitoryRoomModal.value = false;
}

async function submitRoom() {
  try {
    if (!assignedRoom.value.dormitoryRoomId) {
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
        title: "No Room Selected To Assign",
      });
      return;
    }
    const data = {
      Id: dataId.value,
      DormitoryRoomId: assignedRoom.value.dormitoryRoomId,
      TransactionApproverId: approverDetails.dormitoryId,
      ModifiedByUserId: details.userid,
    };

    console.log(data);
    const response = await connecttoapi().post("Transactions/AssignRoom", data);
    if (response.data === "Room assigned successfully") {
      await Swal.fire({
        icon: "success",
        title: "Assigned Room",
        text: "Transaction Assigned Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      window.location.reload();
    }
  } catch (error) {
    console.error(error);
  } finally {
  }
}

async function fetchedDormitoryRooms() {
  isFetching.value = true;
  showDormitoryRoomModal.value = true;
  try {
    const response = await connecttoapi().post(
      `DormitoryRoom/GetDormitoryRoomByDormId?dormId=${approverDetails.dormitoryId}`
    );
    console.log(response);
    if (response.data != null) {
      dormitoryRoomData.value = response.data;
    }
  } catch (error) {
    console.error(error);
  } finally {
    isFetching.value = false;
  }
}

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

async function getDormitory() {
  // isFetching.value = true;
  try {
    const response = await connecttoapi().get(`Dormitory/GetDormitory`);

    if (response.data != null) {
      dormitoryData.value = response.data;
      console.log(dormitoryData);
    }
  } catch (error) {
    console.erro("An error occurred:", error);
  } finally {
    //isFetching.value = false;
    // isFetching.value = false;
  }
}

async function checkIn() {
  try {
    isFetching.value = true;
    const result = await Swal.fire({
      title: "Booking Check-in Confirmation",
      text: "Are you sure you want to proceed with checking in this booking?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    });

    if (result.isConfirmed) {
      const data = {
        ModifiedByUserId: details.userid,
      };
      const response = await connecttoapi().post(
        `Transactions/CheckIn?id=${dataId.value}`,
        data
      );

      if (response.data === "Updated Successfully") {
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
          icon: "success",
          title: "Booking checked-in successfully",
        }).then(() => {
          isFetching.value = false;
          window.location.reload();
        });
      }
      // Handle response or further actions here
    }
  } catch (error) {
    console.error(error);
  } finally {
    //isFetching.value = false;
  }
}

async function checkOut() {
  try {
    isFetching.value = true;
    const result = await Swal.fire({
      title: "Booking Check-in Confirmation",
      text: "Are you sure you want to proceed with checking out this booking?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    });

    if (result.isConfirmed) {
      const data = {
        ModifiedByUserId: details.userid,
      };
      const response = await connecttoapi().post(
        `Transactions/CheckOut?id=${dataId.value}`,
        data
      );

      if (response.data === "Updated Successfully") {
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
          icon: "success",
          title: "Booking checked-out successfully",
        }).then(() => {
          isFetching.value = false;
          window.location.reload();
        });
      }
      // Handle response or further actions here
    }
  } catch (error) {
    console.error(error);
  } finally {
    // isFetching.value = false;
  }
}
</script>
<style></style>
