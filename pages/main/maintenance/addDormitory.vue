<template>
  <div>
    <div>
      <div class="">
        <label class="font-bold text-3xl">Add Dormitory</label>
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
                    >Add Dorm</span
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
          <label class="text-3xl font-bold">Dormitory Details</label>
        </div>
        <div class="form grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="font-medium"
              >Alias <span class="text-red-500">*</span>
              <p v-show="errorAlias" class="text-red-500 text-xs italic">
                Please fill out this field.
              </p></label
            >
            <input
              type="text"
              id="fullName"
              class="mt-2 p-2 border rounded w-full"
              placeholder="ex. ALA"
              v-model="alias"
            />
          </div>
          <div>
            <label class="font-medium"
              >Name
              <span class="text-red-500"
                >*
                <p v-show="errorName" class="text-red-500 text-xs italic">
                  Please fill out this field.
                </p></span
              >
            </label>
            <input
              type="text"
              id="employeeId"
              class="mt-2 p-2 border rounded w-full"
              placeholder="ex. Alabang"
              v-model="name"
            />
          </div>
          <div class="col-span-1 md:col-span-2">
            <label class="font-medium"
              >Address <span class="text-red-500">*</span>
              <p v-show="errorAddress" class="text-red-500 text-xs italic">
                Please fill out this field.
              </p></label
            >
            <input
              type="text"
              id="contactNumber"
              class="mt-2 p-2 border rounded w-full"
              placeholder="ex. FMW Building, Tierra Nueva Subd, 235 Alabang–Zapote Rd, Alabang, Muntinlupa, Metro Manila"
              v-model="address"
            />
          </div>
          <div>
            <label class="font-medium">Longitude</label>
            <input
              type="email"
              id="email"
              class="mt-2 p-2 border rounded w-full"
              placeholder=""
              v-model="longtitude"
            />
          </div>
          <div>
            <label class="font-medium">Latitude</label>
            <input
              placeholder=""
              type="text"
              id="startDate"
              class="mt-2 p-2 border rounded w-full"
              v-model="latitude"
            />
          </div>
          <div class="col-span-1 md:col-span-2">
            <label class="font-medium">Other Information</label>
            <textarea
              type="text"
              id="endDate"
              class="mt-2 p-2 border rounded w-full"
              v-model="otherinfo"
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
  </div>
</template>
<script setup>
import { connecttoapi } from "@/connection/apiservices";
import Swal from "sweetalert2";

const isFetching = ref(false);
const router = useRouter();
const alias = ref("");
const name = ref("");
const address = ref("");
const longitude = ref("");
const latitude = ref("");
const otherinfo = ref("");

const errorAlias = ref(false);
const errorName = ref(false);
const errorAddress = ref(false);

function back() {
  router.push("/main/maintenance/dormitory");
}

async function submitForm() {
  isFetching.value = true;
  errorAlias.value = !alias.value;
  errorName.value = !name.value;
  errorAddress.value = !address.value;
  if (!alias.value || !name.value || !address.value) {
    isFetching.value = false;

    return;
  }

  try {
    const data = {
      Alias: alias.value,
      Name: name.value,
      Address: address.value,
      Longitude: longitude.value,
      Latitude: latitude.value,
      OtherInformation: otherinfo.value,
      CreatedByUserId: 1,
    };

    const response = await connecttoapi().post("Dormitory/AddDormitory", data);
    if (response.data === "Data Inserted") {
      await Swal.fire({
        icon: "success",
        title: "Dorm Added",
        text: "Dorm successfully added to the record.",
        showConfirmButton: false,
        timer: 3500,
      });
      window.location.reload();
    }
  } catch (error) {
    console.error(error);
  } finally {
  }
}
</script>
<style></style>
