

let arr = JSON.parse(localStorage.getItem('LodingSignup')) || [];
        console.log(arr)

        document.querySelector('.buttonfirst').addEventListener('click', () => {
            alert('Button Clicked!');
          });

        
          function submitData(event){
              event.preventDefault();

              let obj = {
                name:document.getElementById('name').value,
                email:document.getElementById('email').value,
                companyName:document.getElementById('companyName').value,
                mobilenumber:document.getElementById('mobilenumber').value
              }
              if(!obj.email || !obj.name || !obj.companyName || !obj.mobilenumber){
                document.getElementById('error').innerHTML = "please fill all the fields"
                return
              }

              function checkUser(){
                for(let i=0; i<arr.length; i++){
                  if(arr[i].email===obj.email){
                    return true
                  }
                }
                return false
              }
              let ans  = checkUser()

              if(ans ===false){
              
              arr.push(obj)
              console.log(arr)
              localStorage.setItem('LodingSignup',JSON.stringify(arr))
              window.location.href = 'Home.html'
              }
              
              else{
                document.getElementById('error').innerHTML = "user already exists"

                setTimeout(()=>{
                document.getElementById('error').innerHTML = ""
                },1000)
              }
            
          }