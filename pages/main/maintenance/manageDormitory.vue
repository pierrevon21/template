<template>
  <div>
    <div
      v-if="addDormitoryRoomModal"
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
              class="text-gray-900 hover:text-red-500 focus:outline-none hover:bg-gray-400 rounded-full p-1"
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
              {{ modalRoomheader }} Dormitory Room
            </h3>
          </div>
          <div class="pt-4 sm:mt-0 sm:text-left flex flex-col items-center">
            <div class="w-full">
              <div class="flex items-center justify-between mb-4">
                <main class="w-full">
                  <div class="bg-white p-4 rounded-lg">
                    <div class="header mb-6 flex items-center justify-center">
                      <label class="text-xl font-bold">Room Details</label>
                    </div>
                    <div class="form grid grid-cols-1 gap-4">
                      <div>
                        <label class="font-medium"
                          >Alias <span class="text-red-500">*</span></label
                        >
                        <input
                          type="text"
                          id="alias"
                          class="mt-2 p-3 border rounded w-full"
                          v-model="roomAlias"
                          placeholder="ex. RM101"
                        />
                      </div>
                      <div>
                        <label class="font-medium"
                          >Name <span class="text-red-500">*</span></label
                        >
                        <input
                          type="text"
                          id="name"
                          class="mt-2 p-3 border rounded w-full"
                          v-model="roomName"
                          placeholder="ex. Room 101"
                        />
                      </div>
                      <div>
                        <label class="font-medium"
                          >Capacity <span class="text-red-500">*</span></label
                        >
                        <input
                          type="number"
                          id="capacity"
                          class="mt-2 p-3 border rounded w-full"
                          v-model="roomCapacity"
                          placeholder="ex. 10"
                        />
                      </div>
                      <div>
                        <label class="font-medium">Details</label>
                        <textarea
                          id="details"
                          class="mt-2 p-3 border rounded w-full"
                          v-model="roomDetails"
                          rows="5"
                          placeholder="Enter room details"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </main>
              </div>
            </div>
          </div>

          <!-- Modal Footer -->
          <div class="px-4 py-3 sm:px-6 sm:flex sm:justify-between">
            <div>
              <button
                v-if="modalRoomheader === 'Edit'"
                class="w-full inline-flex justify-center rounded-md border border-red-200 shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
                @click="deleteRoom"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  class="h-4 w-4 fill-white mr-2 mt-0.5"
                >
                  <path
                    d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"
                  />
                </svg>
                Delete
              </button>
            </div>
            <div class="sm:flex sm:flex-row-reverse">
              <button
                v-if="modalRoomheader === 'Add'"
                type="button"
                class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
                @click="addRoom"
              >
                Save
              </button>
              <button
                v-else-if="modalRoomheader === 'Edit'"
                type="button"
                class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
                @click="editRoom"
              >
                Save Changes
              </button>
              <button
                type="button"
                class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                @click="toggleModal"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="addApproverModal"
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
              @click="toggleApproverModal"
              class="text-gray-900 hover:text-red-500 focus:outline-none hover:bg-gray-400 rounded-full p-1"
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
              Add Approver
            </h3>
          </div>
          <div class="pt-4 sm:mt-0 sm:text-left flex flex-col items-center">
            <div class="w-full">
              <div class="flex items-center justify-between mb-4">
                <main class="w-full">
                  <div class="bg-white p-4 rounded-lg">
                    <div class="header mb-6 flex items-center justify-center">
                      <label class="text-xl font-bold">Approver Details</label>
                    </div>

                    <div class="flex items-center justify-center mb-2">
                      <div class="relative h-10 w-full">
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
                            class="placeholder:italic placeholder:text-xs float-right h-8 md:h-10 block float-left md:w-full p-4 pl-10 text-sm border border-gray-700 rounded-md focus:ring-blue-500 focus:border-blue-500 shadow-md"
                            placeholder="Search here..."
                            v-model="searchApprover"
                            @keypress.enter="searchEmployee"
                          />
                        </div>
                      </div>
                    </div>
                    <main class="w-full">
                      <ul
                        v-if="
                          employeeSearchData && employeeSearchData.length > 0
                        "
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
                    <div class="form grid grid-cols-1 gap-4">
                      <div>
                        <label class="font-medium"
                          >Employee ID
                          <span class="text-red-500">*</span></label
                        >
                        <input
                          type="number"
                          id="alias"
                          class="mt-2 p-3 border rounded w-full"
                          v-model="approverEmpId"
                        />
                      </div>
                      <div>
                        <label class="font-medium"
                          >Name <span class="text-red-500">*</span></label
                        >
                        <input
                          type="text"
                          id="name"
                          class="mt-2 p-3 border rounded w-full"
                          v-model="approverName"
                        />
                      </div>
                      <div>
                        <label class="font-medium"
                          >Email Address
                          <span class="text-red-500">*</span></label
                        >
                        <input
                          type="text"
                          id="capacity"
                          class="mt-2 p-3 border rounded w-full"
                          v-model="approverEmail"
                        />
                      </div>
                      <div>
                        <label class="font-medium">Contact Number</label>
                        <input
                          id="details"
                          class="mt-2 p-3 border rounded w-full"
                          v-model="approverContact"
                          rows="5"
                        />
                      </div>
                    </div>
                  </div>
                </main>
              </div>
            </div>
          </div>

          <!-- Modal Footer -->
          <div class="px-4 py-3 sm:px-6 sm:flex sm:justify-between">
            <div></div>
            <div class="sm:flex sm:flex-row-reverse">
              <button
                type="button"
                class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
                @click="addApprover"
              >
                Save Changes
              </button>
              <button
                type="button"
                class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                @click="toggleApproverModal"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div>
      <div class="">
        <label class="font-bold text-3xl">Manage Dormitory</label>
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
                  to="/main/maintenance/dormitory"
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
                    >Manage Dormitory</span
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
        <div>
          <div class="header mb-6 flex items-center justify-center">
            <div class="line"></div>
            <label class="text-3xl font-bold mx-4">Dormitory Details</label>
            <div class="line"></div>
          </div>
          <div class="form grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label class="font-medium">Alias </label>
              <input
                type="text"
                id="fullName"
                class="mt-2 p-2 border rounded w-full"
                placeholder="ex. ALA"
                v-model="alias"
              />
            </div>
            <div>
              <label class="font-medium">Name </label>
              <input
                type="text"
                id="employeeId"
                class="mt-2 p-2 border rounded w-full"
                placeholder="ex. Alabang"
                v-model="name"
              />
            </div>
            <div class="col-span-1 md:col-span-2">
              <label class="font-medium">Address </label>
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
          </div>
          <div class="col-span-1 md:col-span-2 mt-4 flex justify-end w-full">
            <button
              @click="editDorm"
              class="bg-blue-500 text-white font-medium p-3 rounded hover:bg-blue-600"
            >
              Save Changes
            </button>
          </div>
        </div>
        <div>
          <div class="header mt-4 mb-6 flex items-center justify-center">
            <div class="line"></div>
            <label class="text-3xl font-bold mx-4">Dormitory Rooms</label>
            <div class="line"></div>
          </div>
          <div class="w-full sm:w-full space-x-2">
            <div class="flex items-center justify-center">
              <div class="relative h-10 w-1/2">
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
                    class="placeholder:italic placeholder:text-xs float-right h-8 md:h-10 block float-left md:w-full p-4 pl-10 text-sm border border-gray-700 rounded-md focus:ring-blue-500 focus:border-blue-500 shadow-md"
                    placeholder="Search here..."
                    v-model="searchRoomQuery"
                    @keypress.enter="handleEnterKey"
                  />
                  <button
                    @click="fetchedDormitoryRooms"
                    class="ml-2 bg-red-400 rounded-md p-2 font-medium text-white"
                  >
                    Clear
                  </button>
                </div>
              </div>
            </div>

            <div
              class="grid grid-cols-1 sm:grid-cols-4 gap-4 items-center justify-center w-full mt-4"
            >
              <template v-for="(dorm, index) in dormitoryRoomData" :key="index">
                <div
                  @click="editRoomModal(dorm)"
                  class="flex items-center justify-center w-full rounded-lg p-4 shadow-md border border-gray-100 hover:bg-gray-200 cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    class="h-10 w-10 text-gray-600 mr-4"
                  >
                    <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                    <path
                      d="M320 32c0-9.9-4.5-19.2-12.3-25.2S289.8-1.4 280.2 1l-179.9 45C79 51.3 64 70.5 64 92.5V448H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H96 288h32V480 32zM256 256c0 17.7-10.7 32-24 32s-24-14.3-24-32s10.7-32 24-32s24 14.3 24 32zm96-128h96V480c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H512V128c0-35.3-28.7-64-64-64H352v64z"
                    />
                  </svg>
                  <div>
                    <div class="text-lg font-semibold">
                      {{ dorm.dormitoryRoomName }}
                    </div>
                    <div class="text-sm text-gray-600">{{ dorm.alias }}</div>
                    <div class="text-sm text-gray-600">{{ dorm.details }}</div>
                    <div class="text-sm text-gray-600 ml-auto">
                      Available: {{ dorm.availableCount }} / {{ dorm.capacity }}
                    </div>
                  </div>
                </div>
              </template>
              <div
                @click="toggleModal"
                class="w-full h-full shadow-md border-dashed border-2 border-gray-300 rounded-lg flex flex-col items-center justify-center hover:bg-gray-200 cursor-pointer"
              >
                <div class="space-x-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    class="h-10 w-10"
                  >
                    <path
                      d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
                    />
                  </svg>
                </div>
                <label
                  class="no-wrap align-center justify-center cursor-pointer font-bold"
                  >Add Room</label
                >
              </div>
            </div>
          </div>
        </div>

        <div>
          <div class="header mt-4 flex items-center justify-center">
            <div class="line"></div>
            <label class="text-3xl font-bold mx-4">Approvers</label>
            <div class="line"></div>
          </div>
          <div class="flex items-center justify-center mt-4">
            <div class="">
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
                  <tr v-for="(approver, index) in approversData">
                    <td
                      class="whitespace-nowrap b px-6 py-4 dark:border-white/10"
                    >
                      {{ approver.employeeId }}
                    </td>
                    <td
                      class="whitespace-nowrap b px-6 py-4 dark:border-white/10"
                    >
                      {{ approver.name }}
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
                      {{ formatDate(approver.createdDate) }}
                    </td>

                    <td
                      class="whitespace-nowrap b px-6 py-4 dark:border-white/10 flex items-center justify-center"
                    >
                      <!-- <button
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
                      </button> -->
                      <button
                        class="space-x-2 flex items-center justify-center text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 0"
                        @click="remove(approver)"
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
                    </td>
                  </tr>

                  <!-- Add more rows as needed -->
                </tbody>
              </table>
              <div
                @click="toggleApproverModal"
                class="w-full h-full shadow-md border-dashed border-2 border-gray-300 rounded-lg flex flex-col items-center justify-center hover:bg-gray-200 cursor-pointer"
              >
                <div class="space-x-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    class="h-10 w-10"
                  >
                    <path
                      d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
                    />
                  </svg>
                </div>
                <label
                  class="no-wrap align-center justify-center cursor-pointer font-bold"
                  >Add Approver</label
                >
              </div>
            </div>
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

var tableHeader = [
  { name: "Employee ID" },
  { name: "Name" },

  { name: "Email Address" },
  { name: "Contact Number" },
  { name: "Assigned Date" },
  // { name: "Status" },
  { name: "Action" },
];
const searchRoomQuery = ref("");
const isFetching = ref(false);
const details = JSON.parse(decryptor());
const dormitoryData = ref([]);
const alias = ref("");
const name = ref("");
const address = ref("");
const latitude = ref("");
const longtitude = ref("");
const otherinfo = ref("");
const router = useRouter();
const route = useRoute();
const dormitoryRoomData = ref([]);
const addDormitoryRoomModal = ref(false);
const modalRoomheader = ref("");
const roomId = ref("");
const roomName = ref("");
const roomAlias = ref("");
const roomCapacity = ref("");
const roomDetails = ref("");
const employeeSearchData = ref([]);
const addApproverModal = ref(false);
const approverEmpId = ref("");
const approverName = ref("");
const approverEmail = ref("");
const approverContact = ref("");
const searchApprover = ref("");
// const showDormitoryModal = ref(false);
const selectedDormitory = ref("");
const dormitoryId = ref(route.query.Id);
const approversData = ref([]);

onMounted(() => {
  getDormitoryDetails();
  fetchedDormitoryRooms();
  fetchedApprovers();
});
function back() {
  router.push("/main/maintenance/dormitory");
}
// Function to toggle modal visibility
const toggleModal = () => {
  modalRoomheader.value = "Add";
  roomAlias.value = "";
  roomName.value = "";
  roomCapacity.value = "";
  roomDetails.value = "";
  addDormitoryRoomModal.value = !addDormitoryRoomModal.value;
};

const toggleApproverModal = () => {
  // modalRoomheader.value = "Add";
  // roomAlias.value = "";
  // roomName.value = "";
  // roomCapacity.value = "";
  // roomDetails.value = "";
  addApproverModal.value = !addApproverModal.value;
};

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
const editRoomModal = (roomData) => {
  modalRoomheader.value = "Edit";
  roomId.value = roomData.dormitoryRoomId;
  roomName.value = roomData.dormitoryRoomName;
  roomCapacity.value = roomData.capacity;
  roomDetails.value = roomData.details;
  roomAlias.value = roomData.alias;
  addDormitoryRoomModal.value = !addDormitoryRoomModal.value;
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

async function addRoom() {
  isFetching.value = true;
  try {
    if (!roomAlias.value || !roomName.value || !roomCapacity.value) {
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
        title: "Fill all the required fields.",
      });
      return;
    }

    const data = {
      Alias: roomAlias.value,
      DormitoryId: dormitoryId.value,
      Name: roomName.value,
      Details: roomDetails.value,
      Capacity: roomCapacity.value,
      CreatedByUserId: details.userid,
    };

    console.log(data);

    const response = await connecttoapi().post(
      "DormitoryRoom/AddDormitoryRoom",
      data
    );
    if (response.data === "Data Inserted") {
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
        title: "Room Added Successfully",
      }).then(() => {
        isFetching.value = false;
        window.location.reload();
      });
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
    //isFetching.value = false;
  }
}
async function editRoom() {
  isFetching.value = true;
  try {
    console.log(roomId.value);
    const data = {
      Alias: roomAlias.value,
      DormitoryId: dormitoryId.value,
      Name: roomName.value,
      Details: roomDetails.value,
      Capacity: roomCapacity.value,
      CreatedByUserId: details.userid,
    };

    console.log(data);

    const response = await connecttoapi().post(
      `DormitoryRoom/EditDormitoryRoom?id=${roomId.value}`,
      data
    );
    if (response.data === "Data Updated") {
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
        title: "Room Updated Successfully",
      }).then(() => {
        window.location.reload();
        isFetching.value = false;
      });
    }
  } catch (error) {
    console.error(error);
  } finally {
    // isFetching.value = false;
  }
}

async function editDorm() {
  isFetching.value = true;
  try {
    console.log(roomId.value);
    const data = {
      Alias: alias.value,
      Name: name.value,
      Address: address.value,
      Longitude: longtitude.value,
      Latitude: latitude.value,
      OtherInformation: otherinfo.value,
      ModifiedByUserId: details.userid,
    };

    console.log(data);

    const response = await connecttoapi().post(
      `Dormitory/EditDormitory?id=${dormitoryId.value}`,
      data
    );
    if (response.data === "Data Updated") {
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
        title: "Dorm Updated Successfully",
      }).then(() => {
        isFetching.value = false;
        window.location.reload();
      });
    }
  } catch (error) {
    console.error(error);
  } finally {
    //isFetching.value = false;
  }
}

async function submitForm() {
  try {
    const dormId = selectedDormitory.value.id || route.query.Id;
    const data = {
      Alias: roomAlias.value,
      DormitoryId: dormId,
      Name: roomName.value,
      Details: roomDetails.value,
      Capacity: roomCapacity.value,
      CreatedByUserId: details.userid,
    };

    console.log(data);

    const response = await connecttoapi().post(
      "DormitoryRoom/AddDormitoryRoom",
      data
    );
    if (response.data === "Data Inserted") {
      await Swal.fire({
        icon: "success",
        title: "Dorm Added",
        text: "Dorm successfully added to the record.",
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

async function getDormitoryDetails() {
  isFetching.value = true;
  try {
    const response = await connecttoapi().get(
      `Dormitory/GetDormitoryDetails?dormId=${dormitoryId.value}`
    );

    if (response.data != null) {
      name.value = response.data[0].name;
      alias.value = response.data[0].alias;
      latitude.value = response.data[0].latitude;
      longtitude.value = response.data[0].longitude;
      address.value = response.data[0].address;
      otherinfo.value = response.data[0].otherInformation;
      console.log(response.data);
    }
  } catch (error) {
    console.erro("An error occurred:", error);
  } finally {
    isFetching.value = false;
    // isFetching.value = false;
  }
}

async function fetchedDormitoryRooms() {
  isFetching.value = true;
  console.log(dormitoryId);
  try {
    const response = await connecttoapi().post(
      `DormitoryRoom/GetDormitoryRoomByDormId?dormId=${dormitoryId.value}`
    );
    console.log(response);
    if (response.data != null) {
      dormitoryRoomData.value = response.data;
      console.log(dormitoryRoomData);
    }
  } catch (error) {
    console.error(error);
  } finally {
    isFetching.value = false;
  }
}

async function fetchedApprovers() {
  isFetching.value = true;
  console.log(dormitoryId);
  try {
    const response = await connecttoapi().post(
      `Approver/GetApproverByDormId?id=${dormitoryId.value}`
    );
    console.log(response);
    if (response.data != null) {
      approversData.value = response.data;
      console.log(approversData);
    }
  } catch (error) {
    console.error(error);
  } finally {
    isFetching.value = false;
  }
}

const handleEnterKey = async (event) => {
  event.preventDefault();
  await searchRoom();
};

const searchRoom = async () => {
  isFetching.value = true;
  dormitoryRoomData.value = [];

  try {
    const response = await connecttoapi().get(
      `DormitoryRoom/SearchDormRoom?search=${searchRoomQuery.value}&dormitoryId=${dormitoryId.value}`
    );

    if (response.status == 200) {
      dormitoryRoomData.value = response.data;
      console.log(response.data);
    }
  } catch (e) {
    console.log(e);
    return;
  } finally {
    await nextTick();
    isFetching.value = false;
  }
};

async function remove(approver) {
  isFetching.value = true;

  const confirmationResult = await Swal.fire({
    title: "Unassign Approver?",
    text: "You will not be able to revert this item!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Sure",
    cancelButtonText: "Cancel",
    reverseButtons: true,
  });

  if (confirmationResult.isConfirmed) {
    try {
      const response = await connecttoapi().post(
        `Approver/UnassignApprover?id=${approver.id}`
      );
      if (response.status === 200) {
        console.log(response.data);
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
          title: "Approver Unassigned",
        }).then(() => {
          isFetching.value = false;
          window.location.reload();
        }); // Reload the current page
      }
    } catch (error) {
      console.error(error);
      Swal.fire(
        "Error",
        "Failed to cancel the transaction. Please try again.",
        "error"
      );
    } finally {
      isFetching.value = false;
    }
  } else {
    isFetching.value = false;
  }
}

async function addApprover() {
  isFetching.value = true;
  try {
    if (
      !dormitoryId.value ||
      !approverEmpId.value ||
      !approverName.value ||
      !approverEmail.value
    ) {
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
        title: "Fill all the required fields.",
      });
      return;
    }

    const data = {
      DormitoryId: dormitoryId.value,
      EmployeeId: approverEmpId.value,
      Name: approverName.value,
      EmailAddress: approverEmail.value,
      ContactNumber: approverContact.value,
      CreatedByUserId: details.userid,
    };

    console.log(data);

    const response = await connecttoapi().post("Approver/AssignApprover", data);
    if (response.data === "Data Inserted") {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      Toast.fire({
        icon: "success",
        title: "Approver Added Successfully",
      }).then(() => {
        isFetching.value = false;
        window.location.reload();
      });
    }
  } catch (error) {
    console.error(error);
  } finally {
  }
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
      `Employee/SearchEmployee?search=${searchApprover.value}`
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
  approverName.value = param.employeename;
  approverEmail.value = param.email;
  approverEmpId.value = param.employeeId;
  approverContact.value = param.contact;

  employeeSearchData.value = "";
  searchApprover.value = "";
};
</script>
<style scoped>
.line {
  flex-grow: 1;
  height: 2px;
  background: #9ca3af; /* Adjust color as needed */
}

.header {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
</style>
