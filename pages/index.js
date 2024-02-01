import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import MySVG from "@/public/MySVG.svg"
import MyIIMG from '@/public/MyIIMG.svg'
import { FaGithub , FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { IoLogoDiscord } from "react-icons/io5";
import MyLogo from "@/public/MyLogo.svg"
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";


export default function Home() {
  
  return (
    <>
      <Head>
        <title>Assignment-by-Poonam</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mainContainer">

<Image id='svg-1' src={MyIIMG} alt="Mysvg" height={100} width={100}>
</Image>
        <div className="l-container">
<Image id='svg-2' src={MyLogo} alt="MyLogo" height={100} width={100}>
</Image>
        

          <div className="top-Logo"></div>
          <div className="base"><h1>BASE</h1></div>
          <div className='bottom-logo'>
          <FaGithub />
          <FaLinkedin />
        
          <AiFillTwitterCircle />
          <IoLogoDiscord />
          </div>
        </div>
        <div className="r-container">
          <div className="signin-head">
            <h1>Sign In</h1>
            <h3>Sign in to your account</h3>
          </div>
          <div className="signBy">
            <div><FcGoogle/><span>SignIn with Google</span></div>
            <div><FaApple/>SignIn with Apple</div>
          </div>
          <div className="signInBox">
            <form action="/upload">

              <label>Email Address</label><br/>
              <input type="text" value='john' onChange={(e) => e.target.value} /><br/>
              <lable>Password</lable><br/>
              <input type="password" value='1234567' onChange={(e) => e.target.value} /><br/>
              <Link href='#'>Forgot Password?</Link><br/>
              <button >Submit</button>
            </form>
          </div>
    <p>Don't have an account? <Link href='#'>Register here</Link></p>
        </div>

      </div>

      <main >





      </main>
    </>
  );
}
