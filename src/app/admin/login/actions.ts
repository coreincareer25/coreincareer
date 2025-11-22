'use server';

export async function login(
  prevState: string | undefined,
  formData: FormData
) {
  const email = formData.get('email');
  const password = formData.get('password');

  if (email !== 'admin@coreincareer.in' || password !== 'password123') {
    return 'Invalid email or password.';
  }

  // NOTE: Session creation and redirect are removed as there's no dashboard yet.
  return 'Login successful (redirect not implemented).';
}

export async function logout() {
  // NOTE: Logout logic is removed as session management is not implemented yet.
}
