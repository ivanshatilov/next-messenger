'use client'

import Button from "@/app/components/Button";
import Input from "@/app/components/inputs/Input";
import { useCallback, useEffect, useState } from "react";
import { useForm, FieldValues, SubmitHandler } from 'react-hook-form';
import AuthSocialButton from "./AuthSocialButton";
import { BsGithub, BsGoogle, BsDiscord, BsFacebook } from "react-icons/bs";
import { signIn, useSession } from "next-auth/react";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";


type Variant = 'LOGIN' | 'REGISTER';

const AuthForm = () => {
    const session = useSession();
    const router = useRouter();
    useEffect(() => {
        if(session?.status === "authenticated") {
            router.push("/")
        }
    }, [session?.status, router])

    const [variant, setVariant] = useState<Variant>('LOGIN');
    const [isLoading, setIsLoading] = useState(false);

    const toggleVariant = useCallback(() => {
        if(variant === 'LOGIN') setVariant('REGISTER')
        else setVariant('LOGIN')
    }, [variant]);

    const {register,handleSubmit,
        formState: {
            errors
        }
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: '',
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);
        const signInToast = toast.loading("Please wait...", {position: toast.POSITION.TOP_LEFT});

        if(variant === 'REGISTER') {
            axios.post('/api/register', data)
            .then(() => signIn('credentials', {...data, redirect: false})
                .then((callback) => {
                    if(callback?.ok && !callback?.error) {
                        toast.update(signInToast, { render: "Logged In", type: "success", isLoading: false,  closeButton: true, autoClose: 5000, hideProgressBar: true })
                    }
                }))  
            .catch(() => toast.update(signInToast, { render: "Error", type: "error", isLoading: false,  closeButton: true, autoClose: 5000, hideProgressBar: true}))
            .finally(() => setIsLoading(false))
            
        }
        else {
            signIn('credentials', {
                ...data,
                redirect: false
            })
            .then((callback) => {
                if(callback?.error) {
                    toast.update(signInToast, { render: "Invalid Credentials", type: "error", isLoading: false,  closeButton: true, autoClose: 5000, hideProgressBar: true })
                    setIsLoading(false)
                }
                if(callback?.ok && !callback?.error) {
                    toast.update(signInToast, { render: "Logged In", type: "success", isLoading: false,  closeButton: true, autoClose: 5000, hideProgressBar: true })
                    router.push('/')
                    setIsLoading(false)
                }
            })
            
        }
        
    };

    const socialAction = (action: string) => {
        setIsLoading(true);
        const signInToast = toast.loading("Please wait...", {position: toast.POSITION.TOP_LEFT});

        signIn(action, {redirect: false})
        .then((callback) => {
            if(callback?.error) {
                toast.update(signInToast, { render: "Invalid Credentials", type: "error", isLoading: false,  closeButton: true, autoClose: 5000, hideProgressBar: true })
                setIsLoading(false)
            }
            if(callback?.ok && !callback?.error) {
                toast.update(signInToast, { render: "Logged In", type: "success", isLoading: false,  closeButton: true, autoClose: 5000, hideProgressBar: true })
                router.push('/')
                setIsLoading(false)
            }
        })
        
    }

    return ( 
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white px-6 pt-4 pb-8 shadow-md sm:rounded-lg sm:px-10">
                <h2 className="my-6 text-3xl text-left text-gray-700 font-bold">Sign in to your account</h2>
                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    {variant === 'REGISTER' && (
                        <Input id="name" label="Username" register={register} errors={errors} disabled={isLoading} required/>
                    )}
                    <Input id="email" label="Email" type="email" register={register} errors={errors}  disabled={isLoading} required/>
                    <Input id="password" label="Password" type="password" register={register} errors={errors}  disabled={isLoading} required/>

                    <Button type="submit" disabled={isLoading} fullWidth>{variant === 'LOGIN' ? "Sign in" : "Register"}</Button>
                </form>
                    <div className="mt-6">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300"></div>
                            </div>
                            <div className="relative flex justify-center text-center">
                                <span className="bg-white px-3 text-gray-400 text-sm">Or continue with</span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 flex gap-7 justify-center">
                        <AuthSocialButton icon={BsGithub} onClick={() => socialAction('github')} disabled={isLoading}/>
                        <AuthSocialButton icon={BsGoogle} onClick={() => socialAction('google')}  disabled={isLoading}/>
                        <AuthSocialButton icon={BsFacebook} disabled={true}/>
                        <AuthSocialButton icon={BsDiscord} disabled={true}/>
                    </div>

                    <div className="flex gap-2 justify-center text-sm mt-6 px-2 text-gray-400">
                        <div>
                            {variant === 'LOGIN' ? "New to Messenger?" : "Already have an account?"}
                        </div>
                        <span className="cursor-pointer hover:underline" onClick={toggleVariant}>
                            {variant === 'LOGIN' ? "Create an account" : "Login"}
                        </span>
                    </div>
            </div>

        </div>
     );
}
 
export default AuthForm;