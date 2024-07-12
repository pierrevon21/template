<template>
  <div class="flex flex-col justify-center items-center h-screen">
    <label class="font-bold text-2xl mb-2"> Dorm Booking</label>
    <div
      class="w-full max-w-[400px] bg-white border-2 border-gray-400 rounded-lg shadow p-8 shadow-xl"
    >
      <h1 class="text-md font-bold mb-4 flex items-center justify-center">
        Sign in
      </h1>
      <form class="space-y-4 md:space-y-6" @submit.prevent="login()">
        <div style="position: relative; display: flex; align-items: center">
          <input
            v-model="emailInput"
            type="text"
            name="username"
            id="username"
            class="input-field"
            placeholder="Username"
            style="padding-right: 25px"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            class="h-5 w-5"
            fill="Gray"
            style="
              position: absolute;
              top: 50%;
              transform: translateY(-50%);
              right: 10px;
            "
          >
            <path
              d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
            />
          </svg>
        </div>

        <div
          style="position: relative; display: flex; align-items: center"
          class="mt-4"
        >
          <input
            v-model="passwordInput"
            type="password"
            name="password"
            id="password"
            class="input-field"
            placeholder="Password "
            style="padding-right: 25px"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            class="w-5 h-5"
            fill="gray"
            style="
              position: absolute;
              top: 50%;
              transform: translateY(-50%);
              right: 10px;
            "
          >
            <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
            <path
              d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"
            />
          </svg>
        </div>
        <div class="flex items-center justify-between mt-4">
          <div class="flex items-center">
            <!-- Adjusted to align vertically -->
            <input
              id="remember"
              aria-describedby="remember"
              type="checkbox"
              class="checkbox-field"
            />
            <label
              for="remember"
              class="ml-2 text-sm text-gray-500"
              style="white-space: nowrap"
              >Remember me</label
            >
            <!-- Adjusted margin -->
          </div>
        </div>
        <button v-if="!signing" type="submit" class="btn-primary mt-6">
          Sign in
        </button>
        <p
          v-else
          class="p-3 rounded-md mt-6 flex items-center justify-center bg-blue-400 text-white"
        >
          Please wait...
        </p>
      </form>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { connecttoapi } from "@/connection/apiservices";
import Swal from "sweetalert2";
// import Cookies from "js-cookie";
//import { decryptor } from "../connection/decryptor";
import { AES, enc } from "crypto-js";

const router = useRouter();

//const details = JSON.parse(decryptor());
const signing = ref(false);
const emailInput = ref("");
const passwordInput = ref("");
const loginEmpId = ref(false);
const isLoading = ref(false);

definePageMeta({
  alias: "/",
  layout: "empty",
});

const isEmpty = () => {
  if (emailInput.value.trim() === "" || passwordInput.value.trim() === "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please enter an email and password",
    });
    isLoading.value = false;
    return true;
  }
  return false;
};
onMounted(() => {
  // console.log(details.empid);
});
async function login() {
  signing.value = true;
  if (isEmpty()) {
    return;
  }
  try {
    const response = await connecttoapi().post("Access", {
      loginname: emailInput.value,
      password: passwordInput.value,
    });

    const data = response.data;
    // console.log(response.data)
    if (response.status === 200) {
      verifyUser(response);
    } else if (response.data === "medReimbursementAdmin") {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Succesfully Logged in!",
        showConfirmButton: false,
        timer: 1500,
      });
      const credentials = JSON.stringify(data.data.objParam1);
      const EncryptedSystem = credentials;
      const EncryptedSystemData = AES.encrypt(
        JSON.stringify(EncryptedSystem),
        "DORM-BOOKING-FAST-LOGISCTICS-JWT-KEY-2024"
      );

      // localStorage.setItem("userCreds", EncryptedSystemData.toString());
      // localStorage.setItem("medReimbursementUserCreds", credentials);
      // Cookies.set("medReimbursementUserCreds", credentials);
      //localStorage.setItem("userCreds", credentials);
    } else {
      Swal.fire({
        title: "Failed to login.",
        icon: "warning",
      });
      signing.value = false;
    }
    if (data.error) {
      console.error("Login failed: ", data.error);
    }
  } catch (error) {
    console.error(error.message);

    // Handle different types of errors
    if (error.response) {
      Swal.fire({
        icon: "error",
        iconColor: "red",
        title: "Invalid Email or Password.",
      });
    } else {
      Swal.fire({
        title: error.message,
        icon: "warning",
      });
    }
  } finally {
    signing.value = false; // Stop loading
  }
}

async function verifyUser(data) {
  try {
    const header = data.data.stringParam1;
    const response = await connecttoapi().get("Authenticate", {
      headers: {
        Authorization: header,
      },
    });
    if (response.status == 200) {
      signing.value = false;

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Succesfully Logged in!",
        showConfirmButton: false,
        timer: 1500,
      });
      const token = response.data.tokenresult;
      const credentials = data.data.objParam1;
      const EncryptedSystem = credentials;
      const encryptedUserCreds = AES.encrypt(
        JSON.stringify(EncryptedSystem),
        "DORM-BOOKING-FAST-LOGISCTICS-JWT-KEY-2024"
      );

      const isApprover = data.data.objParam2;
      const EncryptedApprover = isApprover;
      const encryptedApproverData = AES.encrypt(
        JSON.stringify(EncryptedApprover),
        "DORM-BOOKING-FAST-LOGISCTICS-JWT-KEY-2024"
      );
      console.log(isApprover);
      localStorage.setItem(
        "dormbookingUserCreds",
        encryptedUserCreds.toString()
      );
      localStorage.setItem(
        "dormApproverCreds",
        encryptedApproverData.toString()
      );
      localStorage.setItem("dormbookingUserToken", token);

      //localStorage.setItem("userCreds", credentials);
      router.push("/main/dashboard");
    }
  } catch (error) {
    console.log(error);
    Swal.fire({
      icon: "error",
      title: "Unauthorized",
      text: "You are not authorized",
    });
  }
}
</script>

<style>
.input-field,
.checkbox-field,
.btn-primary {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.input-field:focus,
.checkbox-field:focus {
  outline: none;
  border-color: #4f46e5;
  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
}

.btn-primary {
  background-color: #4f46e5;
  color: #fff;
  cursor: pointer;
}

.btn-primary:hover {
  background-color: #4338ca;
}
</style>
