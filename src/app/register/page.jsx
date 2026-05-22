"use client"
import { Check } from '@gravity-ui/icons';
import { Button, Card, Description, FieldError, Form, Input, Label, Separator, TextField } from '@heroui/react';
import { useRouter } from 'next/navigation';
import React from 'react';
import { authClient } from '../../lib/auth-client';
import { Bounce, toast } from 'react-toastify';
import { FcGoogle } from 'react-icons/fc';

const RegisterPage = () => {

  const handleGoogleSignIn = async() =>{
      await authClient.signIn.social({
    provider: "google",
  });
  }

  const router = useRouter();

  const onSubmit = async(e)=>{
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const user = Object.fromEntries(formData.entries())
    
    const { data, error } = await authClient.signUp.email({
        email:user.email,
        password:user.password,
        name:user.name, 
        image:user.image,  
    })
    
    if(error){
      toast.error(error.message ||'Registration Failed!', {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Bounce,
});
    }else{
     toast.success('Registration successful! ');
      router.push("/login");
    }
  }
    
    return (
        <div className="max-w-lg mx-auto">
            <Card className="border flex items-center">
             <Form onSubmit={onSubmit} className="flex w-96 flex-col gap-4" >
      <TextField
        isRequired
       
        type="text"
      >
        <Label>Name</Label>
        <Input  name="name" placeholder="Enter your Name" />
        <FieldError />
      </TextField>
      
      <TextField
        isRequired
        
        type="email"
        validate={(value) => {
          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
            return "Please enter a valid email address";
          }
          return null;
        }}
      >
        <Label>Email</Label>
        <Input name="email" placeholder="john@example.com" />
        <FieldError />
      </TextField>
      <TextField
        isRequired
        type="url"
      >
        <Label>Photo Url</Label>
        <Input  name="image" placeholder="Enter your Photo Url" />
        <FieldError />
      </TextField>
      <TextField
        isRequired
        minLength={8}
        
        type="password"
        validate={(value) => {
          if (value.length < 8) {
            return "Password must be at least 8 characters";
          }
          if (!/[A-Z]/.test(value)) {
            return "Password must contain at least one uppercase letter";
          }
          if (!/[0-9]/.test(value)) {
            return "Password must contain at least one number";
          }
          return null;
        }}
      >
        <Label>Password</Label>
        <Input name="password" placeholder="Enter your password" />
        <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
        <FieldError />
      </TextField>
      <div className="flex gap-2">
        <Button type="submit">
          <Check />
          Submit
        </Button>
        <Button type="reset" variant="secondary">
          Reset
        </Button>
      </div>
    </Form>
     <div className="flex justify-center items-center gap-3">
          <Separator/>
          <div className='whitespace-nowrap '>Or</div>
          <Separator/>
        </div>
        <div><Button onClick={handleGoogleSignIn} className="w-full text-teal-600" variant="outline"> <FcGoogle /> Login with Google</Button></div>
    </Card>
        </div>
    );
};

export default RegisterPage