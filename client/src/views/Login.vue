<template>
  <div class="flex items-center justify-center min-h-screen bg-background">
    <div class="w-full max-w-md mx-auto">
      <!-- Header -->
      <div class="flex justify-between items-center w-full px-2 pt-16 mb-12">
        <span class="text-2xl font-bold text-primary font-sans">SEF Hiring Portal</span>
        <div class="text-textPrimary font-medium hover:underline cursor-pointer">
          Create an account
        </div>
      </div>

      <div class="login-form-wrapper">

        <div class="form-field">
          <label for="email">Email</label>
          <div class="input-wrapper">
            <!-- placeholder for the mail icon -->
             <input 
              type="email"
              id="email"
              placeholder="example@gmail.com"
              required
            />
          </div>
        </div>

        <div class="form-field">
          <label for="password">Password</label>
          <div class="input-wrapper">
            <!-- placeholder for the lock icon -->
            <input
              type="password"
              id="password"
              v-model="password"
              placeholder="Enter your password"
              required
            />
          </div>
        </div>

        <div class="form-options">
          <div class="remember-me">
            <input 
              type="checkbox" 
              id="remember-me"
              name="rememberMe"
              />
            <label for="remember-me">Remember me</label>
          </div>
          <div class="forgot-password">
            <a href="#">Forgot password?</a>
        </div>

        <button
          type="submit"
          class="login-button"
        >
          Login
        </button>

        </div>
      </div>
    </div>
  </div>
</template>