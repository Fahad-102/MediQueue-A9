"use client"
import { Check } from '@gravity-ui/icons';
import { Button, Card, Description, FieldError, Form, Input, Label, Separator, TextField } from '@heroui/react';
import { useRouter } from 'next/navigation';
import React from 'react';
import { authClient } from '../lib/auth-client';
import { Bounce, toast } from 'react-toastify';
import { RiResetLeftFill } from 'react-icons/ri';
import { FcGoogle } from 'react-icons/fc';

const LoginPage = () => {

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
    
    const { data, error } = await authClient.signIn.email({
        email:user.email,
        password:user.password, 
    })
    console.log({data,error})
    
    if(error){
      toast.error(error.message||'Signin Error!', {
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
     toast.success('Login successful! ');
      router.push("/");
    }

  }
    
    return (
        <div className="max-w-lg mx-auto">
            <Card className="border flex items-center">
             <Form onSubmit={onSubmit} className="flex w-96 flex-col gap-4" >
      
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
        <Input name='email' placeholder="john@example.com" />
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
        <Input name='password' placeholder="Enter your password" />
        <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
        <FieldError />
      </TextField>
      <div className="flex gap-2">
        <Button className="w-full bg-teal-600" type="submit">
          <Check />
          Login
        </Button>
        <Button className="w-full bg-teal-600 text-white" type="reset" variant="secondary">
          <RiResetLeftFill />
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

export default LoginPage;