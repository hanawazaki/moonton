import React from 'react'
import Label from '@/Components/Label'
import Input from '@/Components/Input'
import Button from '@/Components/Button'
import { Link, Head } from '@inertiajs/inertia-react'

const Register = () => {
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
            <form className="w-[370px]">
              <div className="flex flex-col gap-6">
                <div>
                  <Label forInput="fullname" value="Full Name" />
                  {/* <input type="text" name="fullname"
                  
                  placeholder="Your fullname..." value="Angga React" /> */}
                  <Input
                    type={"text"}
                    name={"fullname"}
                    placeHolder={"Your fullname..."}
                    className="rounded-2xl bg-form-bg py-[13px] px-7 w-full focus:outline-alerange focus:outline-none"
                    defaultValue={'Angga React'}
                  />
                </div>
                <div>
                  <Label forInput="email" value="Email Address" />
                  <Input
                    type={"email"}
                    name={"email"}
                    placeHolder={"Your Email Address"}
                    className="rounded-2xl bg-form-bg py-[13px] px-7 w-full focus:outline-alerange focus:outline-none"
                    defaultValue={'email@mail.com'}
                  />
                </div>
                <div>
                  <Label forInput="password" value="Password" />
                  <Input
                    type={"password"}
                    name="password"
                    className="rounded-2xl bg-form-bg py-[13px] px-7 w-full focus:outline-alerange focus:outline-none"
                    placeholder="Your Password"
                    defaultValue="eeeeeeeeeeeeeee"
                  />
                </div>
              </div>
              <div className="grid space-y-[14px] mt-[30px]">
                <Link href={route('prototype.dashboard')}>
                  <Button>
                    <span className="text-base font-semibold">
                      Sign Up
                    </span>
                  </Button>
                </Link>
                <Link href={route('prototype.login')}>
                  <span className="text-base text-white">
                    Sign In to My Account
                  </span>
                </Link>

                {/* <!-- <button type="submit" className="rounded-2xl bg-alerange py-[13px] text-center">
                <span className="text-base font-semibold">
                  Sign Up
                </span>
              </button> --> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register