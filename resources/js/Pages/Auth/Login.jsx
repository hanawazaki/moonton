import React, { useState, useEffect } from 'react';
import Button from '@/Components/Button'
import Checkbox from '@/Components/Checkbox';
import Guest from '@/Layouts/Guest';
import Input from '@/Components/Input';
import InputError from '@/Components/InputError';
import Label from '@/Components/Label';
import { Head, Link, useForm } from '@inertiajs/inertia-react';

export default function Login() {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: '',
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <>
            <Head title='Login' />
            <div className="mx-auto max-w-screen min-h-screen bg-black text-white md:px-10 px-3">
                <div className="fixed top-[-50px] hidden lg:block">
                    <img src="/images/signup-image.png"
                        className="hidden laptopLg:block laptopLg:max-w-[450px] laptopXl:max-w-[640px]" alt="" />
                </div>
                <div className="py-24 flex laptopLg:ml-[680px] laptopXl:ml-[870px]">
                    <div>
                        <img src="/images/moonton-white.svg" alt="" />
                        <div className="my-[70px]">
                            <div className="font-semibold text-[26px] mb-3">
                                Welcome Back
                            </div>
                            <p className="text-base text-[#767676] leading-7">
                                Explore our new movies and get <br />
                                the better insight for your life
                            </p>
                        </div>
                        <form className="w-[370px]" onSubmit={submit}>
                            <div className="flex flex-col gap-6">
                                <div>
                                    <Label
                                        forInput="email"
                                        value="Email Address"
                                    />
                                    <Input
                                        type={"email"}
                                        name={"email"}
                                        placeHolder={"Email Address"}
                                        value={data.email}
                                        isFocused={true}
                                        handleChange={onHandleChange}
                                    />
                                    <InputError message={errors.email} className="mt-2" />
                                </div>
                                <div>
                                    <Label
                                        forInput={"password"}
                                        value={"Password"}
                                    />
                                    <Input
                                        type={"password"}
                                        name={"password"}
                                        placeHolder={"Password"}
                                        value={data.password}
                                        autoComplete="current-password"
                                        handleChange={onHandleChange}
                                    />
                                </div>
                                <InputError message={errors.password} className="mt-2" />

                            </div>
                            <div className="grid space-y-[14px] mt-[30px]">
                                <Button type={"submit"} variant="primary" processing={processing}>
                                    <span className="text-base font-semibold">
                                        Start Watching
                                    </span>
                                </Button>
                                <Link href={route('register')}>
                                    <Button type={"button"} variant="light-outline">
                                        <span className="text-base text-white">
                                            Create New Account
                                        </span>
                                    </Button>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )

}
