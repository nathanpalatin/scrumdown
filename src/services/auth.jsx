export default function signInData(){
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: '3g6cmlae3eaf5bbd74411v7f7gb',
        user: {
          name: 'Nathan Palatin',
          email: 'nathan@scrumdown.com.br',
        },
      });
    }, 500)
  })
}