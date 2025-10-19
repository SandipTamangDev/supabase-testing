
  // Initialize Supabase
  const supabaseUrl = 'https://wwqeknzjrzjmhupsodck.supabase.co';
  const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind3cWVrbnpqcnpqbWh1cHNvZGNrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA0Njc1NjUsImV4cCI6MjA3NjA0MzU2NX0.sXHW0QWwqAEfRfTy3H5TGTn7QiY0Pk_eCg4SpNBtTJc';
  const supabase = supabase.createClient(supabaseUrl, supabaseKey);

  // Make sure DOM is fully loaded
  document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signupForm');

    form.addEventListener('submit', async (e) => {
      e.preventDefault(); // Prevent default form submission

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value;
      const confirmPassword = document.getElementById('confirmPassword').value;

      // Password mismatch check
      if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return; // Stop execution
      }

      // Sign up with Supabase
      const { data, error } = await supabase.auth.signUp({ email, password });

      if (error) {
        alert("Error signing up: " + error.message);
        return;
      }

      if (!data.user) {
        alert("Signup failed. Please try again.");
        return;
      }

      // Insert into users table
      const { data: userData, error: tableError } = await supabase
        .from('users')
        .insert([{ id: data.user.id, name, email }]);

      if (tableError) {
        alert("Error saving user info: " + tableError.message);
        return;
      }

      alert("Signup successful! Please check your email for verification.");
      window.location.href = "login.html";
    });
  });
