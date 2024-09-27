useEffect(() => {
    const imageClasses = ['https://imgs.search.brave.com/smzUjMS1I8BajaCjhw0EC99a3BCSw1vDPY1qPlHkzQk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTI1/MjQyMTAxL3ZlY3Rv/ci9tYXRoLWJhY2tn/cm91bmQuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPXB4RFNQ/M2RZcjJWZldXZGNO/ZkNtUV9qd2hUR1Fi/NEZVVFp6VTU0YzFE/ams9', 'https://imgs.search.brave.com/27Z4vU9wgIrqoqobhPBqNlAm2L_DlVfdbFIj6PjfWgg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTYw/MTExMjI2L3Bob3Rv/L3BoeXNpY3MuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPXFJ/Tk5GMVd3OW5xZzRs/bHVKU0xFbnhGSlRS/T3NJQ3BIMklucENU/UngyVk09', 'https://imgs.search.brave.com/nyOzvcxmiJLxy_BE8To71Pm1zIjsURaU817bV8e1RV8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDg2/NjYxMzc2L3ZlY3Rv/ci9zY2llbmNlLW9u/LWNoYWxrYm9hcmQu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PWZPNUp6dDA5aFBY/RUpFYUJVcHJ3dWVw/M3RzMEFYSF9BYVEz/NGROVnhMZ2s9'];
    let index = 0;
    
    const changeBackground = () => {
      document.body.className = imageClasses[index];
      index = (index + 1) % imageClasses.length;
    };
    
    const intervalId = setInterval(changeBackground, 5000); // Change image every 5 seconds
    
    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, []);
  