<script setup>
import { toggleSidebar } from "./store";
import { decryptor } from "../../connection/aes";

const details = JSON.parse(decryptor());
const router = useRouter();

async function singout() {
  try {
    localStorage.removeItem("medReimbursementUserCreds");
    localStorage.removeItem("medReimbursementToken");

    router.push("/");
  } catch (error) {
    console.log(error);
  } finally {
  }
}
const droptogg = ref(false);
</script>

<template>
  <header
    class="relative z-10 h-16 py-9 w-full items-center bg-[#4F5373] shadow md:h-20"
  >
    <div class="relative mx-auto flex h-full flex-col justify-center px-3">
      <div class="relative flex w-full items-center pl-1 sm:ml-0 sm:pr-2">
        <div class="relative left-0 flex h-full w-3/4">
          <div class="group relative flex h-full w-12 items-center">
            <button
              type="button"
              aria-expanded="false"
              aria-label="Toggle sidenav"
              class="text-4xl text-white focus:outline-none"
              @click="toggleSidebar"
            >
              &#8801;
            </button>
          </div>
        </div>

        <div
          class="relative ml-5 flex w-1/4 items-center justify-end p-1 sm:right-auto sm:mr-0 space-x-2"
        >
          <span
            class="block text-sm text-gray-900 text-white hidden md:block"
            >{{ details.requestorname }}</span
          >
          <span class="block text-sm text-gray-900 text-white md:hidden">{{
            details.firstname
          }}</span>
          <button
            @click="droptogg = !droptogg"
            class="relative block bg-white rounded-full flex items-center justify-center hover:bg-gray-400 flex-shrink-0"
            style="width: 40px; height: 40px"
          >
            <img
              alt="user_image"
              src="../assets/icons/user_menu.svg"
              class="rounded-full"
              style="width: 30px; height: 30px"
            />
          </button>

          <div
            v-if="droptogg"
            class="absolute right-2 top-7 z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow"
            id="user-dropdown"
          >
            <div class="px-4 py-3">
              <!--FullName-->
              <span class="block text-sm text-gray-900">{{
                details.requestorname
              }}</span>
              <!--UserName-->
              <span
                class="block text-sm text-gray-500 truncate dark:text-gray-400"
              >
              </span>
            </div>
            <ul class="py-2" aria-labelledby="user-menu-button">
              <!-- <li class="cursor-pointer">
                <h3
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  My Account
                </h3>
              </li> -->
              <li @click="singout">
                <h3
                  class="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Signout
                </h3>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
