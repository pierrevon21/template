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
                    >View Booking</span
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
        <div class="header mb-6 flex flex-col items-center justify-center">
          <label class="text-3xl font-bold">Booking Details</label>
          <div
            class="flex flex-row items-center justify-center space-x-4 mt-4"
          ></div>
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
            <label class="font-medium">Room Assigned</label>
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
            <label class="font-medium">Employee ID</label>
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
import { decryptor2 } from "../../connection/approveraes";

const approverDetails = JSON.parse(decryptor2());
const details = JSON.parse(decryptor());
const dormitoryData = ref([]);
const router = useRouter();
const route = useRoute();
const dataId = ref(route.query.Id);

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

const transactionStatus = ref("");

const roomAssigned = ref("");
const isFetching = ref(false);

onMounted(() => {
  getDormitory();
  fetchReimbursementData();
  console.log(approverDetails);
});

function back() {
  router.push("/main/listbooking");
}
// Function to toggle modal visibility

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
</script>
<style></style>
