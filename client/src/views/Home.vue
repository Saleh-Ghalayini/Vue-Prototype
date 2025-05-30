<script setup>
import { computed } from 'vue';
import { useAuthStore } from '../store/auth';
import { useAuth } from '../composables/useAuth';
import { useGraduates } from '../composables/useGraduates';

const { logout } = useAuth();
const authStore = useAuthStore();
const {
  filteredGraduates,
  searchQuery,
  selectedSkill,
  applyFilters,
  resetFilters,
  bookInterview,
  openLink
} = useGraduates();

const userName = computed(() => {
  return authStore.user?.name || 'Recruiter';
});

const handleLogout = async () => {
  await logout();
};
</script>

<template>
  <div class="min-h-screen p-8 bg-[#FFFBF7]">
    <div class="max-w-6xl mx-auto mb-8 flex justify-between items-center">
      <div>
        <h1 class="text-2xl font-bold text-primary">Welcome, {{ userName }}</h1>
        <p class="text-gray-600">SEF Hiring Portal - Graduates</p>
      </div>
      <button 
        @click="handleLogout" 
        class="px-4 py-2 bg-white hover:bg-gray-100 text-gray-800 rounded-md border border-gray-200 shadow-sm transition-colors flex items-center gap-2"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
        </svg>
        Logout
      </button>
    </div>
    
    <!-- Filter & Search Section -->
    <div class="max-w-6xl mx-auto mb-8 p-6 bg-white rounded-lg shadow-md">
      <h2 class="text-xl font-semibold text-primary mb-4">Find Graduates</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">        <div class="relative">
          <input 
            v-model="searchQuery"
            type="text" 
            placeholder="Search by name or skill..." 
            class="w-full pl-10 pr-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-primary"
          />
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <select 
          v-model="selectedSkill"
          class="py-2 px-4 rounded border border-gray-300 focus:outline-none focus:border-primary"
        >
          <option value="">Filter by skill</option>
          <option value="vue.js">Vue.js</option>
          <option value="react">React</option>
          <option value="node.js">Node.js</option>
          <option value="typescript">TypeScript</option>
          <option value="express">Express</option>
          <option value="figma">Figma</option>
          <option value="java">Java</option>
        </select>
        <button 
          @click="applyFilters"
          class="py-2 px-4 bg-primary text-white rounded hover:bg-primary/90 transition-colors"
        >
          Apply Filters
        </button>
      </div>
    </div>
    
    <!-- Graduate Profile Cards Grid: 2x2 -->
    <div class="max-w-6xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">

        <!-- Graduate Profile Cards -->        
        <div 
          v-for="graduate in filteredGraduates" 
          :key="graduate.id" 
          class="bg-white p-6 rounded-lg shadow-md transition-transform hover:translate-y-[-5px] border border-gray-100"
        >
          <!-- Profile Photo -->
          <div class="flex justify-center mb-4">
            <img 
              :src="graduate.photo" 
              :alt="`${graduate.name}'s photo`"
              class="w-24 h-24 rounded-full object-cover border-4 border-primary"
            />
          </div>
          
          <!-- Graduate Info -->          
           <div class="text-center mb-4">
            <h3 class="text-xl font-bold text-primary">{{ graduate.name }}</h3>
            <p class="text-gray-600">{{ graduate.email }}</p>
            
            <!-- Skills Tags -->
            <div class="flex flex-wrap justify-center gap-2 mt-2">
              <span
                v-for="(skill, index) in graduate.skills"
                :key="index"
                class="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
              >
                {{ skill }}
              </span>
            </div>
          </div>
          
          <!-- Action Buttons -->
          <div class="grid grid-cols-1 gap-2">

            <!-- Resume, Video, LinkedIn Button -->
            <div class="flex justify-center gap-2">              
              
              <!-- CV Button -->              
              <button 
                @click="openLink(graduate.cv, 'CV', graduate.name)"
                class="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors group relative" 
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 px-2 py-1 text-xs text-white bg-black/80 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity z-10">View CV</span>
              </button>
                <!-- Video CV Button -->
              <button 
                @click="openLink(graduate.videoCV, 'Video CV', graduate.name)"
                class="p-2 rounded-full bg-red-100 text-red-700 hover:bg-red-200 transition-colors group relative" 
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <span class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 px-2 py-1 text-xs text-white bg-black/80 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity z-10">Watch Video CV</span>
              </button>                
              <!-- LinkedIn Button -->
              <button 
                @click="openLink(graduate.linkedIn, 'LinkedIn profile', graduate.name)"
                class="p-2 rounded-full bg-blue-100 text-blue-700 hover:bg-blue-200 transition-colors group relative" 
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <span class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 px-2 py-1 text-xs text-white bg-black/80 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity z-10">View LinkedIn Profile</span>
              </button>
            </div>
            
            <!-- GitHub Projects Button -->
            <button 
              @click="openLink(graduate.github, 'GitHub projects', graduate.name)"
              class="w-full py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-md transition-colors flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              View Final Project
            </button>
            
            <!-- Book Interview Button -->
            <button 
              @click="bookInterview(graduate)"
              class="w-full py-2 bg-primary hover:bg-primary/90 text-white rounded-md transition-colors"
            >
              Book Interview
            </button>
          </div>
        </div>      
      </div>

        <!-- No results message -->
      <div v-if="filteredGraduates.length === 0" class="text-center py-8">
        <p class="text-gray-600">No graduates found matching your search criteria.</p>
        <button 
          @click="resetFilters"
          class="mt-4 px-4 py-2 bg-primary text-white rounded hover:bg-primary/90 transition-colors"
        >
          Reset Filters
        </button>
      </div>
      
    </div>  
    </div>
</template>
