async function Login() {
  const loginUser = async () => {
    try {
      const response = await fetch(
        'https://port-0-minchelin-server-m3txb03taca4f465.sel4.cloudtype.app/auth/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: '1234@123551.com',
            password: '12341234',
          }),
        }
      );

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();
      console.log('Login successful:', data);
      return data;
    } catch (error) {
      console.error('Error during login:', error);
      throw error;
    }
  };

  const data = await loginUser();
  return (
    <div>
      {data.accessToken}
      {data.refreshToken}
    </div>
  );
}

export default Login;
