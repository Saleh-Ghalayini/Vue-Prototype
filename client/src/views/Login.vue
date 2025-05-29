<template>
  <div class="flex h-screen w-full bg-background">

    <!-- Left Column - Login Form -->
    <div class="w-full lg:w-1/2 flex flex-col relative bg-primary p-8">

      <!-- Header -->
      <div class="absolute top-8 left-0 right-0 flex justify-between items-center px-8">
        <div class="flex items-center gap-2">
          <span class="text-2xl font-bold text-white font-sans">SEF Hiring Portal</span>
        </div>        <div>
          <a href="#" class="text-white hover:underline transition-all duration-200 hover:text-accent/90">Create an account</a>
        </div>
      </div>
      <!-- End of Header -->

    </div>
    <!-- End of Left Column - Login Form -->
    
    <!-- Right Column - Illustration -->
    <div class="hidden lg:flex lg:w-1/2 bg-white justify-center items-center p-8">
      <img src="../assets/images/login-illustration.png" alt="Login Illustration" class="max-w-full max-h-[80vh] object-contain" />
    </div>
  </div>
</template>
