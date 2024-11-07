<script setup>
import { ref } from 'vue'
import { ChevronDownIcon } from 'lucide-vue-next'
import PieChart from '@/components/PieChart.vue'
import LineChart from '@/components/LineChart.vue'

const performanceData = ref([
  { x: 1, y: 75 },
  { x: 2, y: 50 },
  { x: 3, y: 95 },
  { x: 4, y: 60 },
  { x: 5, y: 80 },
  { x: 6, y: 70 },
  { x: 7, y: 90 },
  { x: 8, y: 40 },
  { x: 9, y: 75 },
  { x: 10, y: 85 }
])

const progressBars = ref([90, 80, 70, 85])
</script>

<template>
  <div class="min-h-screen bg-gray-100 p-4">
    <div class="max-w-9xl mx-auto bg-white rounded-3xl shadow-lg overflow-hidden">
      <div class="grid grid-cols-1 gap-x-7  md:grid-cols-3">
        <!-- Student Overview -->
        <div class="bg-[#FF7A45] p-6 text-white rounded-3xl ">
          <h2 class="text-3xl font-bold mb-6 text-center">Student Overview</h2>
          <div class="flex flex-col items-center mb-8">
            <div class="w-32 h-32 bg-white rounded-full mb-4"></div>
            <p class="text-xl">Hello!</p>
            <h3 class="text-4xl font-bold">Ganesh L</h3>
          </div>
          <div class="bg-[#FF7A45] text-center rounded-xl p-4 mb-6 justify-items-center">
            <p class="mb-1 rounded-2xl h-8 w-60 text-center align-top bg-white text-[#FF7A45] text-base">Program ID</p>
            <p class="text-2xl font-bold border-2 h-10 w-80 rounded-2xl ">CSE21203A0005</p>
          </div>
          <div class="bg-white rounded-xl p-4 ">
            <h4 class="text-xl font-bold mb-4 text-center text-black">Test Details</h4>
            <div class="space-y-2">
              <div class="flex justify-between">
                <span class="bg-[#FF7A45] rounded-2xl px-28 py-3">Exam</span>
                <span class="font-bold text-black pt-3">JEE 2025</span>
              </div>
              <div class="flex justify-between">
                <span class="bg-[#FF7A45] rounded-2xl px-20 py-3">Test Portal ID</span>
                <span class="font-bold text-black pt-3">TEST05A</span>
              </div>
              <div class="flex justify-between">
                <span class="bg-[#FF7A45] rounded-2xl px-24 py-3">Subject</span>
                <span class="font-bold text-black pt-3">Chemistry</span>
              </div>
              <div class="flex justify-between">
                <span class="bg-[#FF7A45] rounded-2xl px-24 py-3">Faculty</span>
                <span class="font-bold text-black pt-3">ROHIT R</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Session Details -->
        <div class="p-6 rounded-3xl bg-[#dddddd]">
          <h2 class="text-3xl font-bold mb-6 text-center">Session Details</h2>
          <div class="flex justify-between items-center mb-6 ">
            <button class="bg-[#FF7A45] text-white px-4 py-2 rounded-lg hover:bg-[#FF9C6B] transition-colors duration-200">Fortnight</button>
            <div class="relative">
              <select class="appearance-none bg-white border rounded-lg px-4 py-2 pr-8 hover:border-[#FF7A45] transition-colors duration-200">
                <option>FEB [1] 2024</option>
                <option>FEB [2] 2024</option>
                <option>FEB [3] 2024</option>
                <option>FEB [4] 2024</option>
                <option>FEB [5] 2024</option>
                <option>FEB [5] 2024</option>
                <option>FEB [6] 2024</option>
                <option>FEB [8] 2024</option>
                <option>FEB [9] 2024</option>
                <option>FEB [10] 2024</option>
              </select>
              <ChevronDownIcon class="absolute right-2 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
          </div>
          <div class="bg-[#FFF8F0] rounded-xl p-6 mb-6">
            <div class="flex justify-between items-center">
              <span class="font-medium ">Sessions Conducted</span>
              <span class="text-4xl font-bold">4</span>
            </div>
          </div>
          <div class="mb-8 bg-[#dddddd]">
            <h3 class="text-xl font-bold mb-4 text-center">HW Completion</h3>
            <div class="relative">
              <PieChart :data="[50, 50]" :colors="['#FF7A45', '#FFD8CC']" />
              <div class="flex justify-between mt-4">
                <div>
                  <p class="text-sm text-gray-600">Incompleted</p>
                  <p class="font-bold">50%</p>
                </div>
                <div class="text-right">
                  <p class="text-sm text-gray-600">Completed</p>
                  <p class="font-bold">50%</p>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-8">
            <div class="bg-[#FFF8F0] rounded-xl p-6 mb-6">
              <div class="flex justify-between items-center ">
                <span class="font-medium text-center">Sessions Conducted</span>
                <span class="text-4xl font-bold">91</span>
              </div>
            </div>
            <div class="mb-8">
              <h3 class="text-xl font-bold mb-4 text-center">HW Completion</h3>
              <div class="relative">
                <PieChart :data="[67, 33]" :colors="['#FF7A45', '#FFD8CC']" />
                <div class="flex justify-between mt-4">
                  <div>
                    <p class="text-sm text-gray-600 ">Incompleted</p>
                    <p class="font-bold">33%</p>
                  </div>
                  <div class="text-right">
                    <p class="text-sm text-gray-600">Completed</p>
                    <p class="font-bold">67%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <!-- Test Details -->
        <div class="p-6 bg-[#dddddd] rounded-3xl">
          <h2 class="text-3xl font-bold mb-6 text-center">Test Details</h2>
          <div class="flex justify-between items-center mb-6">
            <button class="bg-[#FF7A45] text-white px-4 py-2 rounded-lg hover:bg-[#FF9C6B] transition-colors duration-200">Fortnight</button>
            <div class="relative">
              <select class="appearance-none bg-white border rounded-lg px-4 py-2 pr-8 hover:border-[#FF7A45] transition-colors duration-200">
                <option>FEB [1] 2024</option>
                <option>FEB [2] 2024</option>
                <option>FEB [3] 2024</option>
                <option>FEB [4] 2024</option>
                <option>FEB [5] 2024</option>
                <option>FEB [5] 2024</option>
                <option>FEB [6] 2024</option>
                <option>FEB [8] 2024</option>
                <option>FEB [9] 2024</option>
                <option>FEB [10] 2024</option>
              </select>
              <ChevronDownIcon class="absolute right-2 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
          </div>
          <div class="bg-[#FFF8F0] rounded-xl p-6 mb-6">
            <div class="flex justify-between items-center">
              <span class="text-[#FF7A45] font-medium text-center">Tests Conducted</span>
              <span class="text-4xl font-bold">25</span>
            </div>
          </div>
          <div class="mb-8">
            <LineChart :data="performanceData" />
          </div>
          <div class="space-y-4">
            <div v-for="(progress, index) in progressBars" :key="index" class="bg-[#FFF8F0] h-8 rounded-full overflow-hidden">
              <div class="bg-[#FF7A45] h-full" :style="{ width: `${progress}%` }"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

