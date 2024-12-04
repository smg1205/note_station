<script setup>
import { ref } from 'vue';
import axios from 'axios';
import {getToken} from "@/module/TokenModule.js";
import {ElNotification} from "element-plus";

const isDragging = ref(false);
const file = ref(null);
const fileName = ref("");
const fileInput = ref(null);

// Trigger file selection dialog
const triggerFileInput = () => {
  fileInput.value.click();
};

// Handle file selection
const handleFileChange = (event) => {
  const selectedFile = event.target.files[0];
  if (selectedFile) {
    file.value = selectedFile;
    fileName.value = selectedFile.name;
  }
};

// Handle drag enter
const handleDragEnter = () => {
  isDragging.value = true;
};

// Handle drag leave
const handleDragLeave = () => {
  isDragging.value = false;
};

// Handle drop
const handleDrop = (event) => {
  isDragging.value = false; // Cancel dragging state
  const droppedFile = event.dataTransfer.files[0]; // Get the dropped file
  if (droppedFile) {
    file.value = droppedFile;
    fileName.value = droppedFile.name;
  }
};

// Upload file to server
const uploadFile = () => {
  if (!file.value) {
    console.error("No file selected for upload.");
    return;
  }

  console.log(file.value);

  // Use axios to upload the file
  const formData = new FormData();
  formData.append("file", file.value); // Append the selected file

  axios
      .post("http://localhost:8088/api/files/upload", {
        "file": file.value,
        "token" : getToken()
      }, {
        headers: {
          "Content-Type": "multipart/form-data; charset=utf-8",
        },
      })
      .then((response) => {
        ElNotification({
          title: 'Info',
          message: "文件上传" + response.data,
          type: 'info',
        })
      })
      .catch((error) => {
        console.error("File upload failed:", error);
      });
};
</script>

<template>
  <div id="app" class="centered-container">
    <div
        class="upload-container"
        @dragover.prevent
        @drop.prevent="handleDrop"
        @dragenter="handleDragEnter"
        @dragleave="handleDragLeave"
    >
      <div class="upload-zone" :class="{ 'is-dragging': isDragging }" @click="triggerFileInput">
        <p>将文件拖到此处上传，或点击选择文件</p>
        <input
            type="file"
            ref="fileInput"
            @change="handleFileChange"
            style="display: none"
        />
      </div>
    </div>
    <button @click="uploadFile">
      点击上传
    </button>
    <!-- Display uploaded file name -->
    <div v-if="fileName">
      <h3>上传的文件:</h3>
      <p>{{ fileName }}</p>
    </div>
  </div>
</template>

<style scoped>
/* Center the app container */
.centered-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh; /* Full viewport height */
  background-color: #222222;
  flex-direction: column;
}

/* Upload container styles */
.upload-container {
  width: 50vw;
  height: 50vh;
  border: 2px dashed #aaa;
  text-align: center;
  position: relative;
  cursor: pointer;
}

.upload-zone {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  cursor: pointer;
  font-size: 16px;
  color: #aaa;
  transition: background-color 0.3s;
}

.upload-zone.is-dragging {
  background-color: rgba(0, 0, 0, 0.1);
}

.upload-container input[type="file"] {
  display: none;
}

/* Add some margin to the upload button */
button {
  margin-top: 20px;
}
</style>
