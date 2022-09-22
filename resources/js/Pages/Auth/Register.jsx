import React, { useEffect } from 'react';
import Label from '@/Components/Label'
import Input from '@/Components/Input'
import Button from '@/Components/Button'
import InputError from '@/Components/InputError';
import { Head, Link, useForm } from '@inertiajs/inertia-react';

const Register = () => {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const onHandleChange = (event) => {
        console.log(event);
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));

        console.log(data, 'data');
    };

    return (
        <>
            <Head title='Sign Up' />
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
                                Sign Up
                            </div>
                            <p className="text-base text-[#767676] leading-7">
                                Explore our new movies and get <br />
                                the better insight for your life
                            </p>
                        </div>
                        <form className="w-[370px]" onSubmit={submit}>
                            <div className="flex flex-col gap-6">
                                <div>
                                    <Label forInput="fullname" defaultValue="Full Name" />
                                    <Input
                                        type={"text"}
                                        name={"name"}
                                        placeHolder={"Your fullname..."}
                                        defaultValue={data.name}
                                        isFocused={true}
                                        handleChange={onHandleChange}
                                        required
                                        autoComplete={"off"}
                                    />
                                    <InputError message={errors.name} className="mt-2" />
                                </div>
                                <div>
                                    <Label forInput="email" defaultValue="Email Address" />
                                    <Input
                                        type={"email"}
                                        name={"email"}
                                        placeHolder={"Your Email Address"}
                                        defaultValue={data.email}
                                        handleChange={onHandleChange}
                                        required
                                    />
                                    <InputError message={errors.email} className="mt-2" />
                                </div>
                                <div>
                                    <Label forInput="password" defaultValue="Password" />
                                    <Input
                                        type={"password"}
                                        name="password"
                                        defaultValue={data.password}
                                        placeholder="Your Password"
                                        handleChange={onHandleChange}
                                        required
                                    />
                                    <InputError message={errors.password} className="mt-2" />
                                </div>
                                <div>
                                    <Label forInput="password_confirmation" defaultValue="Confirm Password" />
                                    <Input
                                        type={"password"}
                                        name="password_confirmation"
                                        defaultValue={data.password_confirmation}
                                        placeholder="Your Password"
                                        handleChange={onHandleChange}
                                        required
                                    />
                                    <InputError message={errors.password_confirmation} className="mt-2" />
                                </div>
                            </div>
                            <div className="grid space-y-[14px] mt-[30px]">
                                <Button processing={processing} type="submit">
                                    <span className="text-base font-semibold">
                                        Sign Up
                                    </span>
                                </Button>
                                <Link href={route('login')}>
                                    <Button type={"button"} variant="light-outline">
                                        <span className="text-base text-white">
                                            Sign In to My Account
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

export default Register